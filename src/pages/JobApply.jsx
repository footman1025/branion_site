import { useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { openRoles } from './Careers';
import './JobApply.css';

const TOTAL_STEPS = 4;
const STEP_LABELS = ['Personal Info', 'Experience', 'Skills & Portfolio', 'Final Questions'];

/* ─── Validation helpers ─── */
const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isValidUrl   = v => { try { new URL(v); return true; } catch { return false; } };

function validateStep1(d) {
  const e = {};
  if (!d.fullName.trim())          e.fullName  = 'Full name is required.';
  if (!d.gender)                   e.gender    = 'Please select your gender.';
  if (!d.email.trim())             e.email     = 'Email address is required.';
  else if (!isValidEmail(d.email)) e.email     = 'Please enter a valid email address.';
  if (!d.location.trim())          e.location  = 'City and country are required.';
  if (!d.linkedin.trim())          e.linkedin  = 'LinkedIn profile URL is required.';
  else if (!isValidUrl(d.linkedin))e.linkedin  = 'Please enter a valid URL (starting with https://).';
  if (!d.github.trim())            e.github    = 'GitHub profile URL is required.';
  else if (!isValidUrl(d.github))  e.github    = 'Please enter a valid URL (starting with https://).';
  if (!d.referral.trim())          e.referral  = 'Please tell us how you heard about this role.';
  return e;
}

function validateStep2(d) {
  const e = {};
  if (!d.expSolidity)       e.expSolidity       = 'Please select your Solidity experience.';
  if (!d.expSmartContracts) e.expSmartContracts  = 'Please select your Smart Contracts experience.';
  if (!d.expDeFi)           e.expDeFi            = 'Please select your DeFi experience.';
  const unrated = RATING_TECHS.filter(t => !d.ratings?.[t]);
  if (unrated.length > 0)   e.ratings = `Please rate all technologies. Missing: ${unrated.join(', ')}.`;
  return e;
}

function validateStep3(d) {
  const e = {};
  if (!d.skills.trim())        e.skills      = 'Please list your key technical skills.';
  if (!d.projectLink.trim())   e.projectLink = 'A project link is required.';
  else if (!isValidUrl(d.projectLink)) e.projectLink = 'Please enter a valid URL.';
  if (!d.projectDesc.trim())   e.projectDesc = 'Please describe your project.';
  if (!d.cvLink.trim())        e.cvLink      = 'A CV/Resume link is required.';
  else if (!isValidUrl(d.cvLink)) e.cvLink   = 'Please enter a valid URL.';
  if (!d.proudOf.trim())       e.proudOf     = 'Please answer this question.';
  if (!d.whyFit.trim())        e.whyFit      = 'Please answer this question.';
  return e;
}

function validateStep4(d) {
  const e = {};
  if (!d.startDate)           e.startDate          = 'Please select your available start date.';
  if (!d.salary.trim())       e.salary             = 'Please state your salary expectation.';
  if (!d.assessment)          e.assessment         = 'Please select an option.';
  if (!d.availability)        e.availability       = 'Please select your availability.';
  if (!d.hoursPerWeek)        e.hoursPerWeek       = 'Please select hours per week.';
  if (!d.startImmediately)    e.startImmediately   = 'Please select an option.';
  if (!d.legallyAuthorized)   e.legallyAuthorized  = 'Please select an option.';
  if (!d.visaSponsorship)     e.visaSponsorship    = 'Please select an option.';
  return e;
}

/* ─── Error message component ─── */
function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <span className="ja-field-error">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      {msg}
    </span>
  );
}

/* ─── Step 1: Personal Information ─── */
function StepPersonal({ data, onChange, errors }) {
  const inp = (field, type = 'text', placeholder = '') => (
    <input
      type={type}
      placeholder={placeholder}
      value={data[field]}
      onChange={e => onChange(field, e.target.value)}
      className={errors[field] ? 'ja-input-invalid' : ''}
    />
  );
  return (
    <div className="ja-form-card">
      <h2 className="ja-form-card-title">Personal Information</h2>
      <div className="ja-field">
        <label>Full Name <span className="ja-req">*</span></label>
        {inp('fullName', 'text', 'Your full name')}
        <FieldError msg={errors.fullName} />
      </div>
      <div className="ja-field">
        <label>Gender <span className="ja-req">*</span></label>
        <select value={data.gender} onChange={e => onChange('gender', e.target.value)} className={errors.gender ? 'ja-input-invalid' : ''}>
          <option value="">Select gender</option>
          <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
        </select>
        <FieldError msg={errors.gender} />
      </div>
      <div className="ja-field">
        <label>Email Address <span className="ja-req">*</span></label>
        {inp('email', 'email', 'you@example.com')}
        <FieldError msg={errors.email} />
      </div>
      <div className="ja-field">
        <label>City, Country <span className="ja-req">*</span></label>
        {inp('location', 'text', 'e.g. New York, USA')}
        <FieldError msg={errors.location} />
      </div>
      <div className="ja-field">
        <label>LinkedIn Profile <span className="ja-req">*</span></label>
        {inp('linkedin', 'url', 'https://linkedin.com/in/yourprofile')}
        <FieldError msg={errors.linkedin} />
      </div>
      <div className="ja-field">
        <label>GitHub Profile <span className="ja-req">*</span></label>
        {inp('github', 'url', 'https://github.com/yourusername')}
        <FieldError msg={errors.github} />
      </div>
      <div className="ja-field">
        <label>How did you hear about this opportunity, and who referred you? <span className="ja-req">*</span></label>
        {inp('referral', 'text', 'e.g. LinkedIn, referred by John Doe')}
        <FieldError msg={errors.referral} />
      </div>
    </div>
  );
}

/* ─── Step 2: Experience ─── */
const EXP_YEARS = ['1-3 years', '3-5 years', '5+ years'];

const RADIO_QUESTIONS = [
  { key: 'expSolidity',       label: 'How many years of experience do you have in Solidity?' },
  { key: 'expSmartContracts', label: 'How many years of experience do you have with Smart Contracts?' },
  { key: 'expDeFi',           label: 'How many years of experience do you have with DeFi Protocols?' },
];

const RATING_TECHS = [
  'Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js / ethers.js',
  'Hardhat / Foundry', 'IPFS', 'DeFi Protocols', 'ERC Standards (ERC-20, ERC-721)',
  'NFTs', 'DeFi (Uniswap, GMX, dYdX)', 'Git',
];

function RadioGroup({ question, name, value, onChange, error }) {
  return (
    <div className="ja-radio-group">
      <p className="ja-radio-question">{question} <span className="ja-req">*</span></p>
      <div className="ja-radio-options">
        {EXP_YEARS.map(opt => (
          <label key={opt} className="ja-radio-label">
            <input type="radio" name={name} value={opt} checked={value === opt} onChange={() => onChange(opt)} />
            <span className="ja-radio-custom" />
            {opt}
          </label>
        ))}
      </div>
      <FieldError msg={error} />
    </div>
  );
}

function RatingGrid({ ratings, onChange, error }) {
  const cols = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="ja-rating-section">
      <p className="ja-radio-question">Rate your proficiency (0–10) <span className="ja-req">*</span></p>
      <p className="ja-rating-hint">0 = No experience &nbsp;|&nbsp; 10 = Expert level</p>
      <div className="ja-rating-grid">
        <div className="ja-rating-header">
          <div className="ja-rating-tech-col" />
          {cols.map(n => <div key={n} className="ja-rating-num">{n}</div>)}
        </div>
        {RATING_TECHS.map(tech => (
          <div key={tech} className={`ja-rating-row ${!ratings[tech] && error ? 'ja-rating-row--missing' : ''}`}>
            <div className="ja-rating-tech-col">{tech}</div>
            {cols.map(n => (
              <label key={n} className="ja-rating-cell">
                <input type="radio" name={`rating-${tech}`} value={n} checked={ratings[tech] === n} onChange={() => onChange(tech, n)} />
                <span className="ja-rating-radio" />
              </label>
            ))}
          </div>
        ))}
      </div>
      <FieldError msg={error} />
    </div>
  );
}

function StepExperience({ data, onChange, errors }) {
  return (
    <div className="ja-form-card">
      <h2 className="ja-form-card-title">Previous Experience</h2>
      {RADIO_QUESTIONS.map(q => (
        <RadioGroup
          key={q.key} question={q.label} name={q.key}
          value={data[q.key] || ''} onChange={val => onChange(q.key, val)}
          error={errors[q.key]}
        />
      ))}
      <RatingGrid
        ratings={data.ratings || {}}
        onChange={(tech, val) => onChange('ratings', { ...(data.ratings || {}), [tech]: val })}
        error={errors.ratings}
      />
    </div>
  );
}

/* ─── Step 3: Skills & Portfolio ─── */
function StepSkills({ data, onChange, errors }) {
  return (
    <>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Skills &amp; Portfolio</h2>
        <div className="ja-field">
          <label>Key Technical Skills <span className="ja-req">*</span></label>
          <input type="text" placeholder="e.g. Solidity, Rust, React, Python (comma-separated)"
            value={data.skills} onChange={e => onChange('skills', e.target.value)}
            className={errors.skills ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.skills} />
        </div>
        <div className="ja-field">
          <label>Portfolio / Personal Website <span style={{color:'#94a3b8',fontWeight:400}}>(optional)</span></label>
          <input type="url" placeholder="https://yourportfolio.com"
            value={data.portfolio} onChange={e => onChange('portfolio', e.target.value)} />
        </div>
        <div className="ja-field">
          <label>Link to a Relevant Project or Work Sample <span className="ja-req">*</span></label>
          <input type="url" placeholder="https://github.com/yourproject or deployed URL"
            value={data.projectLink} onChange={e => onChange('projectLink', e.target.value)}
            className={errors.projectLink ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.projectLink} />
        </div>
        <div className="ja-field">
          <label>Describe the project briefly <span className="ja-req">*</span></label>
          <textarea rows={5} placeholder="What did you build, what was your role, and what was the impact?"
            value={data.projectDesc} onChange={e => onChange('projectDesc', e.target.value)}
            className={errors.projectDesc ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.projectDesc} />
        </div>
        <div className="ja-field">
          <label>CV / Resume Link <span className="ja-req">*</span></label>
          <input type="url" placeholder="Google Drive, Dropbox, or direct PDF link"
            value={data.cvLink} onChange={e => onChange('cvLink', e.target.value)}
            className={errors.cvLink ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.cvLink} />
        </div>
      </div>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Tell Us About Yourself</h2>
        <p className="ja-card-subtitle">Please share openly — we read every answer carefully.</p>
        <div className="ja-field">
          <label>What are you most proud of accomplishing in your previous role? <span className="ja-req">*</span></label>
          <textarea rows={6} placeholder="Share your experience and achievements..."
            value={data.proudOf} onChange={e => onChange('proudOf', e.target.value)}
            className={errors.proudOf ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.proudOf} />
        </div>
        <div className="ja-field">
          <label>Why do you think you're a great fit for DefiGate? <span className="ja-req">*</span></label>
          <textarea rows={6} placeholder="Tell us what excites you about this opportunity..."
            value={data.whyFit} onChange={e => onChange('whyFit', e.target.value)}
            className={errors.whyFit ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.whyFit} />
        </div>
      </div>
    </>
  );
}

/* ─── Step 4: Final Questions ─── */
function StepFinal({ data, onChange, errors }) {
  const sel = (field, label, opts, req = true) => (
    <div className="ja-field">
      <label>{label} {req && <span className="ja-req">*</span>}</label>
      <select value={data[field]} onChange={e => onChange(field, e.target.value)}
        className={errors[field] ? 'ja-input-invalid' : ''}>
        <option value="">Select...</option>
        {opts.map(o => <option key={o}>{o}</option>)}
      </select>
      <FieldError msg={errors[field]} />
    </div>
  );

  const radioGroup = (field, question, opts) => (
    <div className="ja-radio-group">
      <p className="ja-radio-question">{question} <span className="ja-req">*</span></p>
      <div className="ja-radio-options">
        {opts.map(opt => (
          <label key={opt} className="ja-radio-label">
            <input type="radio" name={field} value={opt} checked={data[field] === opt} onChange={() => onChange(field, opt)} />
            <span className="ja-radio-custom" />
            {opt}
          </label>
        ))}
      </div>
      <FieldError msg={errors[field]} />
    </div>
  );

  return (
    <>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Final Questions</h2>
        <div className="ja-field">
          <label>Earliest Available Start Date <span className="ja-req">*</span></label>
          <input type="date" value={data.startDate} onChange={e => onChange('startDate', e.target.value)}
            className={errors.startDate ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.startDate} />
        </div>
        <div className="ja-field">
          <label>Salary Expectation (USD / month) <span className="ja-req">*</span></label>
          <input type="text" placeholder="e.g. $5,000 – $7,000" value={data.salary}
            onChange={e => onChange('salary', e.target.value)}
            className={errors.salary ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.salary} />
        </div>
        {sel('assessment', 'Are you open to a technical assessment?', [
          'Yes, happy to complete one',
          'Yes, but with a time limit',
          'No, I prefer other evaluation methods',
        ])}
        <div className="ja-field">
          <label>Anything else you'd like us to know? <span style={{color:'#94a3b8',fontWeight:400}}>(optional)</span></label>
          <textarea rows={5} placeholder="Additional context, questions, or anything you'd like to share..."
            value={data.extra} onChange={e => onChange('extra', e.target.value)} />
        </div>
      </div>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">Availability</h2>
        {sel('availability', 'What is your current availability?', [
          'Full-time (40 hrs/week)', 'Part-time (20 hrs/week)', 'Contract / Freelance', 'Open to discussion',
        ])}
        {sel('hoursPerWeek', 'How many hours per week can you commit?', [
          'Less than 10 hours', '10–20 hours', '20–30 hours', '30–40 hours', '40+ hours',
        ])}
        {radioGroup('startImmediately', 'Are you available to start immediately if selected?',
          ['Yes', 'No', 'Within 2 weeks', 'Within 1 month'])}
        {radioGroup('legallyAuthorized', 'Are you legally authorized to work in your current location?',
          ['Yes', 'No'])}
        {radioGroup('visaSponsorship', 'Will you require visa/work permit sponsorship?',
          ['Yes', 'No', 'Not sure'])}
      </div>
    </>
  );
}

/* ─── Email HTML builder ─── */
function row(label, value) {
  return `<tr><td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#64748b;width:200px;vertical-align:top">${label}</td><td style="padding:6px 0;font-size:13px;color:#1e293b">${value || '—'}</td></tr>`;
}
function block(label, value) {
  return `<div style="margin-bottom:16px"><p style="font-weight:600;font-size:13px;color:#64748b;margin:0 0 4px">${label}</p><div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:12px;font-size:13px;color:#1e293b;white-space:pre-wrap">${value || '—'}</div></div>`;
}

/* ─── Main Component ─── */
export default function JobApply() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const role = openRoles.find(r => r.slug === slug);

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const [personal,    setPersonal]    = useState({ fullName:'', gender:'', email:'', location:'', linkedin:'', github:'', referral:'' });
  const [experience,  setExperience]  = useState({ expSolidity:'', expSmartContracts:'', expDeFi:'', ratings:{} });
  const [skills,      setSkills]      = useState({ skills:'', portfolio:'', projectLink:'', projectDesc:'', cvLink:'', proudOf:'', whyFit:'' });
  const [final,       setFinal]       = useState({ startDate:'', salary:'', assessment:'', extra:'', availability:'', hoursPerWeek:'', startImmediately:'', legallyAuthorized:'', visaSponsorship:'' });

  if (!role) return <Navigate to="/careers" replace />;

  const pct = Math.round((step / TOTAL_STEPS) * 100);
  const updateField = setter => (key, val) => setter(prev => ({ ...prev, [key]: val }));

  const validate = () => {
    switch (step) {
      case 1: return validateStep1(personal);
      case 2: return validateStep2(experience);
      case 3: return validateStep3(skills);
      case 4: return validateStep4(final);
      default: return {};
    }
  };

  const handleNext = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      setTimeout(() => {
        const el = document.querySelector('.ja-input-invalid, .ja-field-error, .ja-rating-row--missing');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }
    setErrors({});

    if (step < TOTAL_STEPS) {
      setStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSending(true);
    setSendError('');
    const ratingsText = Object.entries(experience.ratings || {}).map(([t,s]) => `${t}: ${s}/10`).join('\n');
    try {
      const res = await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role_title: role.title,
          full_name: personal.fullName, gender: personal.gender, email: personal.email,
          location: personal.location, linkedin: personal.linkedin, github: personal.github,
          referral: personal.referral, exp_solidity: experience.expSolidity,
          exp_contracts: experience.expSmartContracts, exp_defi: experience.expDeFi,
          ratings: ratingsText, skills: skills.skills, portfolio: skills.portfolio || 'N/A',
          project_link: skills.projectLink, project_desc: skills.projectDesc, cv_link: skills.cvLink,
          proud_of: skills.proudOf, why_fit: skills.whyFit, start_date: final.startDate,
          salary: final.salary, assessment: final.assessment, extra: final.extra || 'N/A',
          availability: final.availability, hours_per_week: final.hoursPerWeek,
          start_immediately: final.startImmediately, legally_authorized: final.legallyAuthorized,
          visa_sponsorship: final.visaSponsorship,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Server error ${res.status}`);
      setShowModal(true);
    } catch (err) {
      setSendError(err.message || 'Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleBack = () => {
    setErrors({});
    if (step > 1) { setStep(s => s - 1); window.scrollTo({ top:0, behavior:'smooth' }); }
    else navigate(`/careers/${slug}`);
  };

  return (
    <main className="ja-page">
      <div className="ja-topbar">
        <button className="ja-back-link" onClick={handleBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          {step === 1 ? 'Back to Job' : 'Back'}
        </button>
        <span className="ja-role-name">{role.title}</span>
      </div>

      <div className="ja-container">
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
              <span key={label} className={`ja-step-label ${i+1===step?'active':''} ${i+1<step?'done':''}`}>{label}</span>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="ja-intro-banner">
            <p><strong>Thank you for your interest in joining DefiGate as a {role.title}.</strong></p>
            <p>Please complete the form with accurate and detailed information about your background.</p>
            <p>Fields marked with <span style={{color:'#ef4444'}}>*</span> are required.</p>
          </div>
        )}

        {Object.keys(errors).length > 0 && (
          <div className="ja-errors-banner">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Please fix the errors below before continuing.
          </div>
        )}

        {step === 1 && <StepPersonal   data={personal}   onChange={updateField(setPersonal)}   errors={errors} />}
        {step === 2 && <StepExperience data={experience} onChange={updateField(setExperience)} errors={errors} />}
        {step === 3 && <StepSkills     data={skills}     onChange={updateField(setSkills)}     errors={errors} />}
        {step === 4 && <StepFinal      data={final}      onChange={updateField(setFinal)}      errors={errors} />}

        <div className="ja-nav">
          {step > 1 ? (
            <button className="ja-prev-btn" onClick={handleBack}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Previous
            </button>
          ) : <span />}
          <div className="ja-nav-right">
            {sendError && <p className="ja-send-error">{sendError}</p>}
            <button className={`ja-submit-btn ${sending ? 'ja-submit-btn--disabled' : ''}`} onClick={handleNext} disabled={sending}>
              {sending ? <><span className="ja-spinner" /> Sending...</> : (
                <>{step === TOTAL_STEPS ? 'Submit Application' : 'Continue'}
                {step < TOTAL_STEPS && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}</>
              )}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="ja-modal-overlay">
          <div className="ja-modal">

            <div className="ja-modal-accent" />

            <div className="ja-modal-icon-wrap">
              <div className="ja-modal-icon-ring" />
              <div className="ja-modal-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
            </div>

            <div className="ja-modal-body">
              <h2 className="ja-modal-title">Application Submitted!</h2>
              <p className="ja-modal-sub">
                Thank you for applying for <strong>{role.title}</strong> at DefiGate.<br />
                We'll review your application and get back to you within 5 business days.
              </p>
            </div>

            <button className="ja-modal-btn" onClick={() => navigate('/careers')}>
              Return to Job List
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>

          </div>
        </div>
      )}
    </main>
  );
}
