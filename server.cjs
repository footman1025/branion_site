require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const multer  = require('multer');
const { Resend } = require('resend');
const { handleVisit } = require('./lib/visitNotify.cjs');

const app    = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

app.use(cors());
app.use(express.json());

app.post('/api/visit', async (req, res) => {
  try {
    const result = await handleVisit(req, req.body || {});
    return res.status(result.status).json(result.body);
  } catch (err) {
    console.error('Visit notify error:', err);
    return res.status(200).json({ success: false, error: err.message || 'Failed to notify' });
  }
});

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

app.post('/api/send-application', async (req, res) => {
  const d = req.body;

  const html = `<div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;color:#1e293b">
    <div style="background:#0ea5e9;padding:24px 32px;border-radius:10px 10px 0 0">
      <h1 style="color:#fff;margin:0;font-size:22px">New Job Application</h1>
      <p style="color:#e0f2fe;margin:6px 0 0;font-size:15px">Role: <strong>${d.role_title}</strong></p>
    </div>
    <div style="background:#f8fafc;padding:32px;border-radius:0 0 10px 10px;border:1px solid #e2e8f0">
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Personal Information</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        ${row('Full Name',d.full_name)}${row('Gender',d.gender)}${row('Email',d.email)}
        ${row('Location',d.location)}${row('LinkedIn',d.linkedin)}${row('GitHub',d.github)}
        ${row('Referral',d.referral)}
      </table>
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Previous Experience</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:12px">
        ${Array.isArray(d.experience_rows) && d.experience_rows.length
          ? d.experience_rows.map((item) => row(item.label, item.value)).join('')
          : [
              row('Solidity Experience', d.exp_solidity),
              row('Smart Contracts Experience', d.exp_contracts),
              row('DeFi Protocols Experience', d.exp_defi),
            ].join('')}
      </table>
      <p style="font-weight:600;margin:0 0 8px;font-size:14px">Technology Ratings (0–10):</p>
      <pre style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:12px;font-size:13px;white-space:pre-wrap;margin:0 0 24px">${d.ratings}</pre>
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Skills &amp; Portfolio</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
        ${row('Key Skills',d.skills)}${row('Portfolio',d.portfolio)}
        ${row('Project Link',d.project_link)}${row('CV / Resume',d.cv_link)}
      </table>
      ${block('Project Description',d.project_desc)}
      ${block('Most Proud Of',d.proud_of)}
      ${block('Why DefiGate',d.why_fit)}
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;margin-top:24px">Final Questions</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
        ${row('Start Date',d.start_date)}${row('Salary Expectation',d.salary)}
        ${row('Open to Assessment',d.assessment)}${row('Availability',d.availability)}
        ${row('Hours / Week',d.hours_per_week)}${row('Start Immediately',d.start_immediately)}
        ${row('Legally Authorized',d.legally_authorized)}${row('Visa Sponsorship',d.visa_sponsorship)}
      </table>
      ${d.extra && d.extra !== 'N/A' ? block('Additional Notes', d.extra) : ''}
    </div>
  </div>`;

  try {
    const { data, error } = await resend.emails.send({
      from:     'DefiGate Careers <careers@defigate.org>',
      to:       ['gabriel@defigate.org'],
      reply_to: d.email,
      subject:  `New Application: ${d.role_title} — ${d.full_name}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    console.log('Email sent:', data);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message });
  }
});

// ── Contact / Project Vision form ──
app.post('/api/contact', upload.single('file'), async (req, res) => {
  const { name, email, country, phone, message } = req.body;
  const file = req.file;

  const attachments = file ? [{
    filename: file.originalname,
    content:  file.buffer.toString('base64'),
  }] : [];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
      <div style="background:#0ea5e9;padding:24px 32px;border-radius:10px 10px 0 0">
        <h1 style="color:#fff;margin:0;font-size:20px">New Project Inquiry</h1>
        <p style="color:#e0f2fe;margin:6px 0 0;font-size:14px">Via "Share Your Project's Vision" form</p>
      </div>
      <div style="background:#f8fafc;padding:28px 32px;border-radius:0 0 10px 10px;border:1px solid #e2e8f0">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b;width:120px">Name</td><td style="font-size:13px;color:#1e293b">${name || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b">Email</td><td style="font-size:13px;color:#1e293b">${email || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b">Country</td><td style="font-size:13px;color:#1e293b">${country || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b">Phone</td><td style="font-size:13px;color:#1e293b">${phone || '—'}</td></tr>
        </table>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;font-size:13px;color:#1e293b;white-space:pre-wrap;line-height:1.6">
          <strong style="display:block;margin-bottom:8px;color:#64748b">Message:</strong>${message || '—'}
        </div>
        ${file ? `<p style="margin-top:16px;font-size:13px;color:#64748b">📎 Attached file: <strong>${file.originalname}</strong> (${(file.size/1024).toFixed(1)} KB)</p>` : ''}
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
    console.error('Contact form error:', err);
    return res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
