import { useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { openRoles } from './Careers';
import './JobApply.css';

const TOTAL_STEPS = 4;

const STEP_LABELS = [
  'Personal Info',
  'Experience',
  'Skills & Portfolio',
  'Final Questions',
];

/* ─── Step 1: Personal Information ─── */
function StepPersonal({ data, onChange }) {
  return (
    <div className="ja-form-card">
      <h2 className="ja-form-card-title">Personal Information</h2>
      <div className="ja-field">
        <label>Full Name <span className="ja-req">*</span></label>
        <input
          type="text"
          placeholder="Your full name"
          value={data.fullName}
          onChange={e => onChange('fullName', e.target.value)}
        />
      </div>
      <div className="ja-field">
        <label>Gender <span className="ja-req">*</span></label>
        <select value={data.gender} onChange={e => onChange('gender', e.target.value)}>
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
          <option>Prefer not to say</option>
        </select>
      </div>
      <div className="ja-field">
        <label>Email Address <span className="ja-req">*</span></label>
        <input
          type="email"
          placeholder="you@example.com"
          value={data.email}
          onChange={e => onChange('email', e.target.value)}
        />
      </div>
      <div className="ja-field">
        <label>City, Country <span className="ja-req">*</span></label>
        <input
          type="text"
          placeholder="e.g. New York, USA"
          value={data.location}
          onChange={e => onChange('location', e.target.value)}
        />
      </div>
      <div className="ja-field">
        <label>LinkedIn Profile <span className="ja-req">*</span></label>
        <input
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          value={data.linkedin}
          onChange={e => onChange('linkedin', e.target.value)}
        />
      </div>
      <div className="ja-field">
        <label>GitHub Profile <span className="ja-req">*</span></label>
        <input
          type="url"
          placeholder="https://github.com/yourusername"
          value={data.github}
          onChange={e => onChange('github', e.target.value)}
        />
      </div>
      <div className="ja-field">
        <label>How did you hear about this opportunity, and who referred you? <span className="ja-req">*</span></label>
        <input
          type="text"
          placeholder="e.g. LinkedIn, referred by John Doe"
          value={data.referral}
          onChange={e => onChange('referral', e.target.value)}
        />
      </div>
    </div>
  );
}

/* ─── Step 2: Previous Experience ─── */
const EXP_YEARS = ['1-3 years', '3-5 years', '5+ years'];

const RADIO_QUESTIONS = [
  { key: 'expSolidity',      label: 'How many years of experience do you have in Solidity?' },
  { key: 'expSmartContracts',label: 'How many years of experience do you have with Smart Contracts?' },
  { key: 'expDeFi',          label: 'How many years of experience do you have with DeFi Protocols?' },
];

const RATING_TECHS = [
  'Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js / ethers.js',
  'Hardhat / Foundry', 'IPFS', 'DeFi Protocols', 'ERC Standards (ERC-20, ERC-721)',
  'NFTs', 'DeFi (Uniswap, GMX, dYdX)', 'Git',
];

function RadioGroup({ question, name, value, onChange }) {
  return (
    <div className="ja-radio-group">
      <p className="ja-radio-question">{question} <span className="ja-req">*</span></p>
      <div className="ja-radio-options">
        {EXP_YEARS.map(opt => (
          <label key={opt} className="ja-radio-label">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span className="ja-radio-custom" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

function RatingGrid({ ratings, onChange }) {
  const cols = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="ja-rating-section">
      <p className="ja-radio-question">
        Please rate your proficiency in the following technologies on a scale from 0 to 10 <span className="ja-req">*</span>
      </p>
      <p className="ja-rating-hint">0 = No experience; 10 = Expert level</p>
      <div className="ja-rating-grid">
        {/* Header row */}
        <div className="ja-rating-header">
          <div className="ja-rating-tech-col" />
          {cols.map(n => (
            <div key={n} className="ja-rating-num">{n}</div>
          ))}
        </div>
        {/* Tech rows */}
        {RATING_TECHS.map(tech => (
          <div key={tech} className="ja-rating-row">
            <div className="ja-rating-tech-col">{tech}</div>
            {cols.map(n => (
              <label key={n} className="ja-rating-cell">
                <input
                  type="radio"
                  name={`rating-${tech}`}
                  value={n}
                  checked={ratings[tech] === n}
                  onChange={() => onChange(tech, n)}
                />
                <span className="ja-rating-radio" />
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function StepExperience({ data, onChange }) {
  return (
    <div className="ja-form-card">
      <h2 className="ja-form-card-title">Previous Experience</h2>

      {RADIO_QUESTIONS.map(q => (
        <RadioGroup
          key={q.key}
          question={q.label}
          name={q.key}
          value={data[q.key] || ''}
          onChange={val => onChange(q.key, val)}
        />
      ))}

      <RatingGrid
        ratings={data.ratings || {}}
        onChange={(tech, val) => onChange('ratings', { ...(data.ratings || {}), [tech]: val })}
      />
    </div>
  );
}

/* ─── Step 3: Skills & Portfolio ─── */
function StepSkills({ data, onChange }) {
  return (
    <>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Skills &amp; Portfolio</h2>
        <div className="ja-field">
          <label>Key Technical Skills <span className="ja-req">*</span></label>
          <input
            type="text"
            placeholder="e.g. Solidity, Rust, React, Python (comma-separated)"
            value={data.skills}
            onChange={e => onChange('skills', e.target.value)}
          />
        </div>
        <div className="ja-field">
          <label>Portfolio / Personal Website</label>
          <input
            type="url"
            placeholder="https://yourportfolio.com"
            value={data.portfolio}
            onChange={e => onChange('portfolio', e.target.value)}
          />
        </div>
        <div className="ja-field">
          <label>Link to a Relevant Project or Work Sample <span className="ja-req">*</span></label>
          <input
            type="url"
            placeholder="https://github.com/yourproject or deployed URL"
            value={data.projectLink}
            onChange={e => onChange('projectLink', e.target.value)}
          />
        </div>
        <div className="ja-field">
          <label>Describe the project briefly <span className="ja-req">*</span></label>
          <textarea
            rows={5}
            placeholder="What did you build, what was your role, and what was the impact?"
            value={data.projectDesc}
            onChange={e => onChange('projectDesc', e.target.value)}
          />
        </div>
        <div className="ja-field">
          <label>CV / Resume Link <span className="ja-req">*</span></label>
          <input
            type="url"
            placeholder="Google Drive, Dropbox, or direct PDF link"
            value={data.cvLink}
            onChange={e => onChange('cvLink', e.target.value)}
          />
        </div>
      </div>

      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Tell Us About Yourself</h2>
        <p className="ja-card-subtitle">We'd love to learn more about your background and what motivates you. Please share your thoughts openly.</p>
        <div className="ja-field">
          <label>Can you tell us about your previous job and what you're most proud of accomplishing there? <span className="ja-req">*</span></label>
          <textarea
            rows={6}
            placeholder="Share your experience and achievements..."
            value={data.proudOf}
            onChange={e => onChange('proudOf', e.target.value)}
          />
        </div>
        <div className="ja-field">
          <label>What interests you about working with our company, and why do you think it's a great fit for you? <span className="ja-req">*</span></label>
          <textarea
            rows={6}
            placeholder="Tell us what excites you about this opportunity..."
            value={data.whyFit}
            onChange={e => onChange('whyFit', e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

/* ─── Step 4: Final Questions ─── */
function StepFinal({ data, onChange }) {
  return (
    <>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Final Questions</h2>
        <div className="ja-field">
          <label>Earliest Available Start Date <span className="ja-req">*</span></label>
          <input
            type="date"
            value={data.startDate}
            onChange={e => onChange('startDate', e.target.value)}
          />
        </div>
        <div className="ja-field">
          <label>Salary Expectation (USD / month) <span className="ja-req">*</span></label>
          <input
            type="text"
            placeholder="e.g. $5,000 – $7,000"
            value={data.salary}
            onChange={e => onChange('salary', e.target.value)}
          />
        </div>
        <div className="ja-field">
          <label>Are you open to a technical assessment as part of the process? <span className="ja-req">*</span></label>
          <select value={data.assessment} onChange={e => onChange('assessment', e.target.value)}>
            <option value="">Select an option</option>
            <option>Yes, happy to complete one</option>
            <option>Yes, but with a time limit</option>
            <option>No, I prefer other evaluation methods</option>
          </select>
        </div>
        <div className="ja-field">
          <label>Anything else you'd like us to know?</label>
          <textarea
            rows={5}
            placeholder="Additional context, questions, or anything you'd like to share..."
            value={data.extra}
            onChange={e => onChange('extra', e.target.value)}
          />
        </div>
      </div>

      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Availability</h2>

        <div className="ja-field">
          <label>What is your current availability? <span className="ja-req">*</span></label>
          <select value={data.availability} onChange={e => onChange('availability', e.target.value)}>
            <option value="">Select...</option>
            <option>Full-time (40 hrs/week)</option>
            <option>Part-time (20 hrs/week)</option>
            <option>Contract / Freelance</option>
            <option>Open to discussion</option>
          </select>
        </div>

        <div className="ja-field">
          <label>How many hours per week are you able to commit to this role? <span className="ja-req">*</span></label>
          <select value={data.hoursPerWeek} onChange={e => onChange('hoursPerWeek', e.target.value)}>
            <option value="">Select...</option>
            <option>Less than 10 hours</option>
            <option>10–20 hours</option>
            <option>20–30 hours</option>
            <option>30–40 hours</option>
            <option>40+ hours</option>
          </select>
        </div>

        <div className="ja-radio-group">
          <p className="ja-radio-question">Are you available to start work immediately if selected? <span className="ja-req">*</span></p>
          <div className="ja-radio-options">
            {['Yes', 'No', 'Within 2 weeks', 'Within 1 month'].map(opt => (
              <label key={opt} className="ja-radio-label">
                <input
                  type="radio"
                  name="startImmediately"
                  value={opt}
                  checked={data.startImmediately === opt}
                  onChange={() => onChange('startImmediately', opt)}
                />
                <span className="ja-radio-custom" />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="ja-radio-group">
          <p className="ja-radio-question">Are you legally authorized to work in your current location? <span className="ja-req">*</span></p>
          <div className="ja-radio-options">
            {['Yes', 'No'].map(opt => (
              <label key={opt} className="ja-radio-label">
                <input
                  type="radio"
                  name="legallyAuthorized"
                  value={opt}
                  checked={data.legallyAuthorized === opt}
                  onChange={() => onChange('legallyAuthorized', opt)}
                />
                <span className="ja-radio-custom" />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="ja-radio-group" style={{ marginBottom: 0 }}>
          <p className="ja-radio-question">Will you now or in the future require visa or work permit sponsorship from the company? <span className="ja-req">*</span></p>
          <div className="ja-radio-options">
            {['Yes', 'No', 'Not sure'].map(opt => (
              <label key={opt} className="ja-radio-label">
                <input
                  type="radio"
                  name="visaSponsorship"
                  value={opt}
                  checked={data.visaSponsorship === opt}
                  onChange={() => onChange('visaSponsorship', opt)}
                />
                <span className="ja-radio-custom" />
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ── Email HTML builder ──
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
function buildEmailHtml(d) {
  return `<div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;color:#1e293b">
    <div style="background:#0ea5e9;padding:24px 32px;border-radius:10px 10px 0 0">
      <h1 style="color:#fff;margin:0;font-size:22px">New Job Application</h1>
      <p style="color:#e0f2fe;margin:6px 0 0;font-size:15px">Role: <strong>${d.role_title}</strong></p>
    </div>
    <div style="background:#f8fafc;padding:32px;border-radius:0 0 10px 10px;border:1px solid #e2e8f0">
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Personal Information</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        ${row('Full Name', d.full_name)}${row('Gender', d.gender)}${row('Email', d.email)}
        ${row('Location', d.location)}${row('LinkedIn', d.linkedin)}${row('GitHub', d.github)}
        ${row('Referral', d.referral)}
      </table>
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Previous Experience</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:12px">
        ${row('Solidity Experience', d.exp_solidity)}
        ${row('Smart Contracts Experience', d.exp_contracts)}
        ${row('DeFi Protocols Experience', d.exp_defi)}
      </table>
      <p style="font-weight:600;margin:0 0 8px;font-size:14px">Technology Ratings (0–10):</p>
      <pre style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:12px;font-size:13px;white-space:pre-wrap;margin:0 0 24px">${d.ratings}</pre>
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px">Skills &amp; Portfolio</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
        ${row('Key Skills', d.skills)}${row('Portfolio', d.portfolio)}
        ${row('Project Link', d.project_link)}${row('CV / Resume', d.cv_link)}
      </table>
      ${block('Project Description', d.project_desc)}
      ${block('Most Proud Of', d.proud_of)}
      ${block('Why Bravion', d.why_fit)}
      <h2 style="color:#0ea5e9;font-size:16px;border-bottom:1px solid #e2e8f0;padding-bottom:8px;margin-top:24px">Final Questions</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
        ${row('Start Date', d.start_date)}${row('Salary Expectation', d.salary)}
        ${row('Open to Assessment', d.assessment)}${row('Availability', d.availability)}
        ${row('Hours / Week', d.hours_per_week)}${row('Start Immediately', d.start_immediately)}
        ${row('Legally Authorized', d.legally_authorized)}${row('Visa Sponsorship', d.visa_sponsorship)}
      </table>
      ${d.extra && d.extra !== 'N/A' ? block('Additional Notes', d.extra) : ''}
    </div>
  </div>`;
}

/* ─── Main Component ─── */
export default function JobApply() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const role = openRoles.find(r => r.slug === slug);

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const [personal, setPersonal] = useState({
    fullName: '', gender: '', email: '', location: '', linkedin: '', github: '', referral: '',
  });
  const [experience, setExperience] = useState({
    expSolidity: '', expSmartContracts: '', expDeFi: '', ratings: {},
  });
  const [skills, setSkills] = useState({
    skills: '', portfolio: '', projectLink: '', projectDesc: '', cvLink: '', proudOf: '', whyFit: '',
  });
  const [final, setFinal] = useState({
    startDate: '', salary: '', assessment: '', extra: '',
    availability: '', hoursPerWeek: '', startImmediately: '', legallyAuthorized: '', visaSponsorship: '',
  });

  if (!role) return <Navigate to="/careers" replace />;

  const pct = Math.round((step / TOTAL_STEPS) * 100);

  const updateField = (setter) => (key, val) => setter(prev => ({ ...prev, [key]: val }));

  // ── Validation per step ──
  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!(
          personal.fullName.trim() &&
          personal.gender &&
          personal.email.trim() &&
          personal.location.trim() &&
          personal.linkedin.trim() &&
          personal.github.trim() &&
          personal.referral.trim()
        );
      case 2:
        return !!(
          experience.expSolidity &&
          experience.expSmartContracts &&
          experience.expDeFi &&
          RATING_TECHS.every(t => experience.ratings?.[t])
        );
      case 3:
        return !!(
          skills.skills.trim() &&
          skills.projectLink.trim() &&
          skills.projectDesc.trim() &&
          skills.cvLink.trim() &&
          skills.proudOf.trim() &&
          skills.whyFit.trim()
        );
      case 4:
        return !!(
          final.startDate &&
          final.salary.trim() &&
          final.assessment &&
          final.availability &&
          final.hoursPerWeek &&
          final.startImmediately &&
          final.legallyAuthorized &&
          final.visaSponsorship
        );
      default:
        return true;
    }
  };

  const canProceed = isStepValid();

  const handleNext = async () => {
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1);
      return;
    }

    setSending(true);
    setSendError('');

    const ratingsText = Object.entries(experience.ratings || {})
      .map(([tech, score]) => `${tech}: ${score}/10`)
      .join('\n');

    try {
      const res = await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role_title:           role.title,
          full_name:            personal.fullName,
          gender:               personal.gender,
          email:                personal.email,
          location:             personal.location,
          linkedin:             personal.linkedin,
          github:               personal.github,
          referral:             personal.referral,
          exp_solidity:         experience.expSolidity,
          exp_contracts:        experience.expSmartContracts,
          exp_defi:             experience.expDeFi,
          ratings:              ratingsText,
          skills:               skills.skills,
          portfolio:            skills.portfolio || 'N/A',
          project_link:         skills.projectLink,
          project_desc:         skills.projectDesc,
          cv_link:              skills.cvLink,
          proud_of:             skills.proudOf,
          why_fit:              skills.whyFit,
          start_date:           final.startDate,
          salary:               final.salary,
          assessment:           final.assessment,
          extra:                final.extra || 'N/A',
          availability:         final.availability,
          hours_per_week:       final.hoursPerWeek,
          start_immediately:    final.startImmediately,
          legally_authorized:   final.legallyAuthorized,
          visa_sponsorship:     final.visaSponsorship,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.message || `Server error ${res.status}`);
      }

      setShowModal(true);
    } catch (err) {
      console.error('Submit error:', err);
      setSendError(err.message || 'Failed to send application. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(s => s - 1);
    else navigate(`/careers/${slug}`);
  };

  return (
    <main className="ja-page">

      {/* Top bar */}
      <div className="ja-topbar">
        <button className="ja-back-link" onClick={handleBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {step === 1 ? 'Back to Job' : 'Back'}
        </button>
        <span className="ja-role-name">{role.title}</span>
      </div>

      <div className="ja-container">

        {/* Progress */}
        <div className="ja-progress-bar">
          <div className="ja-progress-meta">
            <span>Step {step} of {TOTAL_STEPS}</span>
            <span>{pct}% complete</span>
          </div>
          <div className="ja-progress-track">
            <div className="ja-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="ja-step-labels">
            {STEP_LABELS.map((label, i) => (
              <span key={label} className={`ja-step-label ${i + 1 === step ? 'active' : ''} ${i + 1 < step ? 'done' : ''}`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Intro banner — only on step 1 */}
        {step === 1 && (
          <div className="ja-intro-banner">
            <p><strong>Thank you for your interest in joining Bravion as a {role.title}.</strong></p>
            <p>We have designed this application to help us better understand your skills and experience. Please complete the form with accurate and detailed information about your background.</p>
            <p>For your privacy and security, please avoid including any sensitive personal information in this application.</p>
            <p>Thank you again for considering a career with Bravion. We look forward to reviewing your application.</p>
          </div>
        )}

        {/* Step content */}
        {step === 1 && <StepPersonal   data={personal}    onChange={updateField(setPersonal)} />}
        {step === 2 && <StepExperience data={experience}  onChange={updateField(setExperience)} />}
        {step === 3 && <StepSkills     data={skills}      onChange={updateField(setSkills)} />}
        {step === 4 && <StepFinal      data={final}       onChange={updateField(setFinal)} />}

        {/* Navigation */}
        <div className="ja-nav">
          {step > 1 ? (
            <button className="ja-prev-btn" onClick={handleBack}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Previous
            </button>
          ) : (
            <span />
          )}
          <div className="ja-nav-right">
            {sendError && <p className="ja-send-error">{sendError}</p>}
            <button
              className={`ja-submit-btn ${(!canProceed || sending) ? 'ja-submit-btn--disabled' : ''}`}
              onClick={handleNext}
              disabled={!canProceed || sending}
            >
              {sending ? (
                <>
                  <span className="ja-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  {step === TOTAL_STEPS ? 'Submit Application' : 'Continue'}
                  {step < TOTAL_STEPS && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  )}
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="ja-modal-overlay">
          <div className="ja-modal">
            <div className="ja-modal-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2 className="ja-modal-title">Application Submitted!</h2>
            <p className="ja-modal-sub">
              Thank you for applying for <strong>{role.title}</strong> at Bravion.
              We'll review your application and get back to you within 5 business days.
            </p>
            <button className="ja-modal-btn" onClick={() => navigate('/careers')}>
              Return to Job List
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
