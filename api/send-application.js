import { Resend } from 'resend';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Guard: missing API key
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured in Vercel environment variables.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const {
    role_title,
    full_name, gender, email, location, linkedin, github, referral,
    exp_solidity, exp_contracts, exp_defi, ratings,
    skills, portfolio, project_link, project_desc, cv_link, proud_of, why_fit,
    start_date, salary, assessment, extra,
    availability, hours_per_week, start_immediately, legally_authorized, visa_sponsorship,
  } = req.body || {};

  const html = `
    <div style="font-family:'Roboto',Arial,sans-serif;max-width:700px;margin:0 auto;color:#1e293b">
      <div style="background:#0ea5e9;padding:24px 32px;border-radius:10px 10px 0 0">
        <h1 style="color:#fff;margin:0;font-size:22px">New Job Application</h1>
        <p style="color:#e0f2fe;margin:6px 0 0;font-size:15px">Role: <strong>${role_title}</strong></p>
      </div>
      <div style="background:#f8fafc;padding:32px;border-radius:0 0 10px 10px;border:1px solid #e2e8f0">
        <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Personal Information</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          ${row('Full Name', full_name)}${row('Gender', gender)}${row('Email', email)}
          ${row('Location', location)}${row('LinkedIn', linkedin)}${row('GitHub', github)}
          ${row('Referral', referral)}
        </table>
        <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Previous Experience</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:12px">
          ${row('Solidity Experience', exp_solidity)}
          ${row('Smart Contracts Experience', exp_contracts)}
          ${row('DeFi Protocols Experience', exp_defi)}
        </table>
        <p style="font-weight:600;margin:0 0 8px;font-size:14px">Technology Ratings (0–10):</p>
        <pre style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:12px;font-size:13px;white-space:pre-wrap;margin:0 0 24px">${ratings}</pre>
        <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Skills &amp; Portfolio</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
          ${row('Key Skills', skills)}${row('Portfolio', portfolio || 'N/A')}
          ${row('Project Link', project_link)}${row('CV / Resume', cv_link)}
        </table>
        ${block('Project Description', project_desc)}
        ${block('Most Proud Of', proud_of)}
        ${block('Why DefiGate', why_fit)}
        <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;margin-top:24px">Final Questions</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
          ${row('Start Date', start_date)}${row('Salary Expectation', salary)}
          ${row('Open to Assessment', assessment)}${row('Availability', availability)}
          ${row('Hours / Week', hours_per_week)}${row('Start Immediately', start_immediately)}
          ${row('Legally Authorized', legally_authorized)}${row('Visa Sponsorship', visa_sponsorship)}
        </table>
        ${extra && extra !== 'N/A' ? block('Additional Notes', extra) : ''}
      </div>
    </div>`;

  try {
    const { data, error } = await resend.emails.send({
      from:    'DefiGate Careers <careers@defigate.org>',
      to:      ['gabriel@defigate.org'],
      replyTo: email || 'noreply@defigate.org',
      subject: `New Application: ${role_title} — ${full_name}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email' });
  }
}

function row(label, value) {
  return `<tr>
    <td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b;width:200px;vertical-align:top">${label}</td>
    <td style="padding:6px 0;font-size:13px;color:#1e293b">${value || '—'}</td>
  </tr>`;
}

function block(label, value) {
  return `<div style="margin-bottom:16px">
    <p style="font-weight:600;font-size:13px;color:#64748b;margin:0 0 4px">${label}</p>
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:12px;font-size:13px;color:#1e293b;white-space:pre-wrap">${value || '—'}</div>
  </div>`;
}
