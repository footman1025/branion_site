/**
 * Shared visit → Telegram notify helpers (used by api/visit.js and server.cjs).
 */

const recentHits = new Map();
const RATE_WINDOW_MS = 5000;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length) {
    return forwarded.split(',')[0].trim();
  }
  if (typeof req.headers['x-real-ip'] === 'string') {
    return req.headers['x-real-ip'].trim();
  }
  return req.socket?.remoteAddress || req.connection?.remoteAddress || 'unknown';
}

function isBot(userAgent = '') {
  return /bot|crawl|spider|slurp|facebookexternalhit|preview|headless|wget|curl|python-requests|axios\//i.test(userAgent);
}

function parseUserAgent(ua = '') {
  let browser = 'Unknown';
  if (/Edg\//i.test(ua)) browser = 'Edge';
  else if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) browser = 'Chrome';
  else if (/Firefox\//i.test(ua)) browser = 'Firefox';
  else if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
  else if (/OPR\//i.test(ua) || /Opera/i.test(ua)) browser = 'Opera';

  let os = 'Unknown';
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Mac OS X|Macintosh/i.test(ua)) os = 'macOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Linux/i.test(ua)) os = 'Linux';

  const device = /Mobile|Android|iPhone|iPad/i.test(ua) ? 'Mobile' : 'Desktop';
  return { browser, os, device };
}

function shouldRateLimit(ip, path) {
  const key = `${ip}|${path}`;
  const now = Date.now();
  const last = recentHits.get(key) || 0;
  if (now - last < RATE_WINDOW_MS) return true;
  recentHits.set(key, now);

  // Opportunistic cleanup
  if (recentHits.size > 500) {
    for (const [k, ts] of recentHits) {
      if (now - ts > RATE_WINDOW_MS * 12) recentHits.delete(k);
    }
  }
  return false;
}

async function lookupGeo(ip) {
  if (!ip || ip === 'unknown' || ip === '::1' || ip.startsWith('127.') || ip.startsWith('10.') || ip.startsWith('192.168.')) {
    return { city: 'Local', region: '', country: 'Local', org: '' };
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.error) return null;
    return {
      city: data.city || '',
      region: data.region || '',
      country: data.country_name || data.country || '',
      org: data.org || '',
    };
  } catch {
    return null;
  }
}

function formatVisitMessage({ path, referrer, language, screen, ip, ua, geo }) {
  const { browser, os, device } = parseUserAgent(ua);
  const location = geo
    ? [geo.city, geo.region, geo.country].filter(Boolean).join(', ') || 'Unknown'
    : 'Unknown';
  const when = new Date().toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC');

  return [
    '<b>New site visit</b>',
    '',
    `<b>Page:</b> ${escapeHtml(path || '/')}`,
    `<b>IP:</b> <code>${escapeHtml(ip)}</code>`,
    `<b>Location:</b> ${escapeHtml(location)}`,
    geo?.org ? `<b>ISP:</b> ${escapeHtml(geo.org)}` : null,
    `<b>Referrer:</b> ${escapeHtml(referrer || 'Direct')}`,
    `<b>Language:</b> ${escapeHtml(language || '—')}`,
    `<b>Device:</b> ${escapeHtml(device)} · ${escapeHtml(os)} · ${escapeHtml(browser)}`,
    `<b>Screen:</b> ${escapeHtml(screen || '—')}`,
    `<b>Time:</b> ${escapeHtml(when)}`,
  ].filter(Boolean).join('\n');
}

async function sendTelegramMessage(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return { skipped: true, reason: 'missing_env' };
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    const message = data.description || `Telegram HTTP ${res.status}`;
    throw new Error(message);
  }
  return { skipped: false, messageId: data.result?.message_id };
}

/**
 * Handle a visit notification request.
 * @returns {{ status: number, body: object }}
 */
async function handleVisit(req, body = {}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return { status: 200, body: { success: true, skipped: true } };
  }

  const ua = req.headers['user-agent'] || '';
  if (isBot(ua)) {
    return { status: 200, body: { success: true, skipped: true, reason: 'bot' } };
  }

  const path = typeof body.path === 'string' ? body.path.slice(0, 300) : '/';
  const referrer = typeof body.referrer === 'string' ? body.referrer.slice(0, 500) : '';
  const language = typeof body.language === 'string' ? body.language.slice(0, 40) : '';
  const screen = typeof body.screen === 'string' ? body.screen.slice(0, 40) : '';

  const ip = getClientIp(req);
  if (shouldRateLimit(ip, path)) {
    return { status: 200, body: { success: true, skipped: true, reason: 'rate_limit' } };
  }

  const geo = await lookupGeo(ip);
  const text = formatVisitMessage({ path, referrer, language, screen, ip, ua, geo });
  await sendTelegramMessage(text);

  return { status: 200, body: { success: true } };
}

module.exports = {
  handleVisit,
  getClientIp,
  isBot,
  parseUserAgent,
};
