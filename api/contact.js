import { Resend } from 'resend';

export const config = { api: { bodyParser: false } };

async function parseFormData(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        // Try JSON first
        resolve({ fields: JSON.parse(body), file: null });
      } catch {
        // Parse multipart manually via boundary
        const contentType = req.headers['content-type'] || '';
        const boundary = contentType.split('boundary=')[1];
        if (!boundary) return resolve({ fields: {}, file: null });

        const parts = body.split(`--${boundary}`).slice(1, -1);
        const fields = {};
        let file = null;

        parts.forEach(part => {
          const [headerSection, ...bodyParts] = part.split('\r\n\r\n');
          const bodyContent = bodyParts.join('\r\n\r\n').replace(/\r\n$/, '');
          const nameMatch = headerSection.match(/name="([^"]+)"/);
          const filenameMatch = headerSection.match(/filename="([^"]+)"/);
          if (!nameMatch) return;
          if (filenameMatch) {
            file = { originalname: filenameMatch[1], content: Buffer.from(bodyContent).toString('base64') };
          } else {
            fields[nameMatch[1]] = bodyContent;
          }
        });
        resolve({ fields, file });
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fields, file } = await parseFormData(req);
  const { name, email, country, phone, message } = fields;

  const attachments = file ? [{ filename: file.originalname, content: file.content }] : [];

  const html = `
    <div style="font-family:'Roboto',Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
      <div style="background:#0ea5e9;padding:24px 32px;border-radius:10px 10px 0 0">
        <h1 style="color:#fff;margin:0;font-size:20px">New Project Inquiry</h1>
        <p style="color:#e0f2fe;margin:6px 0 0;font-size:14px">Via "Share Your Project's Vision" form</p>
      </div>
      <div style="background:#f8fafc;padding:28px 32px;border-radius:0 0 10px 10px;border:1px solid #e2e8f0">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b;width:120px">Name</td><td style="font-size:13px">${name||'—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b">Email</td><td style="font-size:13px">${email||'—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b">Country</td><td style="font-size:13px">${country||'—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b">Phone</td><td style="font-size:13px">${phone||'—'}</td></tr>
        </table>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;font-size:13px;white-space:pre-wrap;line-height:1.6">
          <strong style="display:block;margin-bottom:8px;color:#64748b">Message:</strong>${message||'—'}
        </div>
        ${file ? `<p style="margin-top:16px;font-size:13px;color:#64748b">📎 Attached: <strong>${file.originalname}</strong></p>` : ''}
      </div>
    </div>`;

  try {
    const { error } = await resend.emails.send({
      from:        'DefiGate Contact <careers@defigate.org>',
      to:          ['gabriel@defigate.org'],
      replyTo:     email,
      subject:     `New Project Inquiry from ${name}`,
      html,
      attachments,
    });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
