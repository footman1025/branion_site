import { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { getJobApplyProfile } from '../i18n/jobApplyProfiles';
import './JobApply.css';

const TOTAL_STEPS = 4;

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function pad2(n) {
  return String(n).padStart(2, '0');
}

function toISODate(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function parseISODate(value) {
  if (!value) return null;
  const [y, m, day] = value.split('-').map(Number);
  if (!y || !m || !day) return null;
  return new Date(y, m - 1, day);
}

function formatDisplayDate(value) {
  const d = parseISODate(value);
  if (!d) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function DatePicker({ value, onChange, invalid, placeholder = 'Select date' }) {
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  const selected = parseISODate(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialView = selected || today;
  const [viewYear, setViewYear] = useState(initialView.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialView.getMonth());

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    if (selected) {
      setViewYear(selected.getFullYear());
      setViewMonth(selected.getMonth());
    }
  }, [value]);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startWeekday = new Date(viewYear, viewMonth, 1).getDay();
  const cells = [];
  for (let i = 0; i < startWeekday; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);

  const shiftMonth = (delta) => {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  };

  const pickDay = (day) => {
    const iso = toISODate(new Date(viewYear, viewMonth, day));
    onChange(iso);
    setOpen(false);
  };

  const isSameDay = (day) => {
    if (!selected || !day) return false;
    return (
      selected.getFullYear() === viewYear &&
      selected.getMonth() === viewMonth &&
      selected.getDate() === day
    );
  };

  const isToday = (day) => {
    if (!day) return false;
    return (
      today.getFullYear() === viewYear &&
      today.getMonth() === viewMonth &&
      today.getDate() === day
    );
  };

  return (
    <div className={`ja-datepicker${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className={`ja-datepicker-trigger${invalid ? ' ja-input-invalid' : ''}${!value ? ' is-placeholder' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span>{value ? formatDisplayDate(value) : placeholder}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </button>

      {open && (
        <div className="ja-datepicker-panel" role="dialog" aria-label="Choose date">
          <div className="ja-datepicker-head">
            <button type="button" className="ja-datepicker-nav" onClick={() => shiftMonth(-1)} aria-label="Previous month">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <p className="ja-datepicker-month">{MONTHS[viewMonth]} {viewYear}</p>
            <button type="button" className="ja-datepicker-nav" onClick={() => shiftMonth(1)} aria-label="Next month">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>

          <div className="ja-datepicker-weekdays">
            {WEEKDAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="ja-datepicker-grid">
            {cells.map((day, i) => (
              day ? (
                <button
                  key={`${viewYear}-${viewMonth}-${day}`}
                  type="button"
                  className={`ja-datepicker-day${isSameDay(day) ? ' is-selected' : ''}${isToday(day) ? ' is-today' : ''}`}
                  onClick={() => pickDay(day)}
                >
                  {day}
                </button>
              ) : (
                <span key={`empty-${i}`} className="ja-datepicker-empty" />
              )
            ))}
          </div>

          <div className="ja-datepicker-foot">
            <button
              type="button"
              className="ja-datepicker-foot-btn"
              onClick={() => {
                onChange('');
                setOpen(false);
              }}
            >
              Clear
            </button>
            <button
              type="button"
              className="ja-datepicker-foot-btn is-accent"
              onClick={() => {
                onChange(toISODate(today));
                setViewYear(today.getFullYear());
                setViewMonth(today.getMonth());
                setOpen(false);
              }}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Validation helpers ─── */
const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isValidUrl   = v => { try { new URL(v); return true; } catch { return false; } };

function validateStep1(d, v) {
  const e = {};
  if (!d.fullName.trim())          e.fullName  = v.fullNameRequired;
  if (!d.gender)                   e.gender    = v.genderRequired;
  if (!d.email.trim())             e.email     = v.emailRequired;
  else if (!isValidEmail(d.email)) e.email     = v.emailInvalid;
  if (!d.location.trim())          e.location  = v.locationRequired;
  if (!d.linkedin.trim())          e.linkedin  = v.linkedinRequired;
  else if (!isValidUrl(d.linkedin))e.linkedin  = v.linkedinInvalid;
  if (!d.github.trim())            e.github    = v.githubRequired;
  else if (!isValidUrl(d.github))  e.github    = v.githubInvalid;
  if (!d.referral.trim())          e.referral  = v.referralRequired;
  return e;
}

function validateStep2(d, v, expSkills, ratingTechs) {
  const e = {};
  for (const skill of expSkills) {
    if (!d.answers?.[skill]) {
      e[`exp:${skill}`] = v.expSkillRequired.replace('{skill}', skill);
    }
  }
  const unrated = ratingTechs.filter(t => !d.ratings?.[t]);
  if (unrated.length > 0) e.ratings = v.ratingsRequired.replace('{missing}', unrated.join(', '));
  return e;
}

function validateStep3(d, v) {
  const e = {};
  if (!d.skills.trim())        e.skills      = v.skillsRequired;
  if (!d.projectLink.trim())   e.projectLink = v.projectLinkRequired;
  else if (!isValidUrl(d.projectLink)) e.projectLink = v.projectLinkInvalid;
  if (!d.projectDesc.trim())   e.projectDesc = v.projectDescRequired;
  if (!d.cvLink.trim())        e.cvLink      = v.cvLinkRequired;
  else if (!isValidUrl(d.cvLink)) e.cvLink   = v.cvLinkInvalid;
  if (!d.proudOf.trim())       e.proudOf     = v.proudOfRequired;
  if (!d.whyFit.trim())        e.whyFit      = v.whyFitRequired;
  return e;
}

function validateStep4(d, v) {
  const e = {};
  if (!d.startDate)           e.startDate          = v.startDateRequired;
  if (!d.salary.trim())       e.salary             = v.salaryRequired;
  if (!d.assessment)          e.assessment         = v.assessmentRequired;
  if (!d.availability)        e.availability       = v.availabilityRequired;
  if (!d.hoursPerWeek)        e.hoursPerWeek       = v.hoursPerWeekRequired;
  if (!d.startImmediately)    e.startImmediately   = v.startImmediatelyRequired;
  if (!d.legallyAuthorized)   e.legallyAuthorized  = v.legallyAuthorizedRequired;
  if (!d.visaSponsorship)     e.visaSponsorship    = v.visaSponsorshipRequired;
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
function StepPersonal({ data, onChange, errors, ja }) {
  const s = ja.steps.personal;
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
      <h2 className="ja-form-card-title">{s.title}</h2>
      <div className="ja-field">
        <label>{s.fullName} <span className="ja-req">*</span></label>
        {inp('fullName', 'text', s.fullNamePlaceholder)}
        <FieldError msg={errors.fullName} />
      </div>
      <div className="ja-field">
        <label>{s.gender} <span className="ja-req">*</span></label>
        <select value={data.gender} onChange={e => onChange('gender', e.target.value)} className={errors.gender ? 'ja-input-invalid' : ''}>
          <option value="">{s.selectGender}</option>
          {ja.genderOptions.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <FieldError msg={errors.gender} />
      </div>
      <div className="ja-field">
        <label>{s.email} <span className="ja-req">*</span></label>
        {inp('email', 'email', s.emailPlaceholder)}
        <FieldError msg={errors.email} />
      </div>
      <div className="ja-field">
        <label>{s.location} <span className="ja-req">*</span></label>
        {inp('location', 'text', s.locationPlaceholder)}
        <FieldError msg={errors.location} />
      </div>
      <div className="ja-field">
        <label>{s.linkedin} <span className="ja-req">*</span></label>
        {inp('linkedin', 'url', s.linkedinPlaceholder)}
        <FieldError msg={errors.linkedin} />
      </div>
      <div className="ja-field">
        <label>{s.github} <span className="ja-req">*</span></label>
        {inp('github', 'url', s.githubPlaceholder)}
        <FieldError msg={errors.github} />
      </div>
      <div className="ja-field">
        <label>{s.referral} <span className="ja-req">*</span></label>
        {inp('referral', 'text', s.referralPlaceholder)}
        <FieldError msg={errors.referral} />
      </div>
    </div>
  );
}

/* ─── Step 2: Experience ─── */
function RadioGroup({ question, name, value, onChange, error, options }) {
  return (
    <div className="ja-radio-group">
      <p className="ja-radio-question">{question} <span className="ja-req">*</span></p>
      <div className="ja-radio-options">
        {options.map(opt => (
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

function RatingGrid({ ratings, onChange, error, ja, ratingTechs }) {
  const cols = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="ja-rating-section">
      <p className="ja-radio-question">{ja.ratingQuestion} <span className="ja-req">*</span></p>
      <p className="ja-rating-hint">{ja.ratingHint}</p>
      <div className="ja-rating-grid">
        <div className="ja-rating-header">
          <div className="ja-rating-tech-col" />
          {cols.map(n => <div key={n} className="ja-rating-num">{n}</div>)}
        </div>
        {ratingTechs.map(tech => (
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

function StepExperience({ data, onChange, errors, ja, profile }) {
  return (
    <div className="ja-form-card">
      <h2 className="ja-form-card-title">{ja.steps.experience.title}</h2>
      {profile.expSkills.map((skill) => (
        <RadioGroup
          key={skill}
          question={ja.expQuestionTemplate.replace('{skill}', skill)}
          name={`exp-${skill}`}
          value={data.answers?.[skill] || ''}
          onChange={(val) => onChange('answers', { ...(data.answers || {}), [skill]: val })}
          error={errors[`exp:${skill}`]}
          options={ja.expYears}
        />
      ))}
      <RatingGrid
        ratings={data.ratings || {}}
        onChange={(tech, val) => onChange('ratings', { ...(data.ratings || {}), [tech]: val })}
        error={errors.ratings}
        ja={ja}
        ratingTechs={profile.ratingTechs}
      />
    </div>
  );
}

/* ─── Step 3: Skills & Portfolio ─── */
function StepSkills({ data, onChange, errors, ja, skillsPlaceholder }) {
  const s = ja.steps.skills;
  return (
    <>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">{s.title}</h2>
        <div className="ja-field">
          <label>{s.skills} <span className="ja-req">*</span></label>
          <input type="text" placeholder={skillsPlaceholder || s.skillsPlaceholder}
            value={data.skills} onChange={e => onChange('skills', e.target.value)}
            className={errors.skills ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.skills} />
        </div>
        <div className="ja-field">
          <label>{s.portfolio} <span style={{color:'#94a3b8',fontWeight:400}}>{s.optional}</span></label>
          <input type="url" placeholder={s.portfolioPlaceholder}
            value={data.portfolio} onChange={e => onChange('portfolio', e.target.value)} />
        </div>
        <div className="ja-field">
          <label>{s.projectLink} <span className="ja-req">*</span></label>
          <input type="url" placeholder={s.projectLinkPlaceholder}
            value={data.projectLink} onChange={e => onChange('projectLink', e.target.value)}
            className={errors.projectLink ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.projectLink} />
        </div>
        <div className="ja-field">
          <label>{s.projectDesc} <span className="ja-req">*</span></label>
          <textarea rows={5} placeholder={s.projectDescPlaceholder}
            value={data.projectDesc} onChange={e => onChange('projectDesc', e.target.value)}
            className={errors.projectDesc ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.projectDesc} />
        </div>
        <div className="ja-field">
          <label>{s.cvLink} <span className="ja-req">*</span></label>
          <input type="url" placeholder={s.cvLinkPlaceholder}
            value={data.cvLink} onChange={e => onChange('cvLink', e.target.value)}
            className={errors.cvLink ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.cvLink} />
        </div>
      </div>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">{s.aboutTitle}</h2>
        <p className="ja-card-subtitle">{s.aboutSubtitle}</p>
        <div className="ja-field">
          <label>{s.proudOf} <span className="ja-req">*</span></label>
          <textarea rows={6} placeholder={s.proudOfPlaceholder}
            value={data.proudOf} onChange={e => onChange('proudOf', e.target.value)}
            className={errors.proudOf ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.proudOf} />
        </div>
        <div className="ja-field">
          <label>{s.whyFit} <span className="ja-req">*</span></label>
          <textarea rows={6} placeholder={s.whyFitPlaceholder}
            value={data.whyFit} onChange={e => onChange('whyFit', e.target.value)}
            className={errors.whyFit ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.whyFit} />
        </div>
      </div>
    </>
  );
}

/* ─── Step 4: Final Questions ─── */
function StepFinal({ data, onChange, errors, ja }) {
  const s = ja.steps.final;
  const sel = (field, label, opts, req = true) => (
    <div className="ja-field">
      <label>{label} {req && <span className="ja-req">*</span>}</label>
      <select value={data[field]} onChange={e => onChange(field, e.target.value)}
        className={errors[field] ? 'ja-input-invalid' : ''}>
        <option value="">{s.selectOption}</option>
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
        <h2 className="ja-form-card-title">{s.title}</h2>
        <div className="ja-field">
          <label>{s.startDate} <span className="ja-req">*</span></label>
          <DatePicker
            value={data.startDate}
            onChange={(v) => onChange('startDate', v)}
            invalid={Boolean(errors.startDate)}
            placeholder="mm/dd/yyyy"
          />
          <FieldError msg={errors.startDate} />
        </div>
        <div className="ja-field">
          <label>{s.salary} <span className="ja-req">*</span></label>
          <input type="text" placeholder={s.salaryPlaceholder} value={data.salary}
            onChange={e => onChange('salary', e.target.value)}
            className={errors.salary ? 'ja-input-invalid' : ''} />
          <FieldError msg={errors.salary} />
        </div>
        {sel('assessment', s.assessment, ja.assessmentOptions)}
        <div className="ja-field">
          <label>{s.extra} <span style={{color:'#94a3b8',fontWeight:400}}>{ja.steps.skills.optional}</span></label>
          <textarea rows={5} placeholder={s.extraPlaceholder}
            value={data.extra} onChange={e => onChange('extra', e.target.value)} />
        </div>
      </div>
      <div className="ja-form-card">
        <h2 className="ja-form-card-title">{s.availabilityTitle}</h2>
        {sel('availability', s.availability, ja.availabilityOptions)}
        {sel('hoursPerWeek', s.hoursPerWeek, ja.hoursOptions)}
        {radioGroup('startImmediately', s.startImmediately, ja.startImmediatelyOptions)}
        {radioGroup('legallyAuthorized', s.legallyAuthorized, ja.yesNoOptions)}
        {radioGroup('visaSponsorship', s.visaSponsorship, ja.visaOptions)}
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
  const { t } = useLang();
  const ja = t.jobApply;
  const role = t.jobs?.[slug];
  const profile = getJobApplyProfile(slug);

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const [personal,    setPersonal]    = useState({ fullName:'', gender:'', email:'', location:'', linkedin:'', github:'', referral:'' });
  const [experience,  setExperience]  = useState({ answers: {}, ratings: {} });
  const [skills,      setSkills]      = useState({ skills:'', portfolio:'', projectLink:'', projectDesc:'', cvLink:'', proudOf:'', whyFit:'' });
  const [final,       setFinal]       = useState({ startDate:'', salary:'', assessment:'', extra:'', availability:'', hoursPerWeek:'', startImmediately:'', legallyAuthorized:'', visaSponsorship:'' });

  useEffect(() => {
    setExperience({ answers: {}, ratings: {} });
    setErrors({});
    setStep(1);
  }, [slug]);

  if (!role) return <Navigate to="/careers" replace />;

  const pct = Math.round((step / TOTAL_STEPS) * 100);
  const updateField = setter => (key, val) => setter(prev => ({ ...prev, [key]: val }));

  const validate = () => {
    const v = ja.validation;
    switch (step) {
      case 1: return validateStep1(personal, v);
      case 2: return validateStep2(experience, v, profile.expSkills, profile.ratingTechs);
      case 3: return validateStep3(skills, v);
      case 4: return validateStep4(final, v);
      default: return {};
    }
  };

  const handleNext = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
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
    const ratingsText = Object.entries(experience.ratings || {}).map(([tech, score]) => `${tech}: ${score}/10`).join('\n');
    const experienceRows = profile.expSkills.map((skill) => ({
      label: `${skill} Experience`,
      value: experience.answers?.[skill] || '',
    }));
    try {
      const res = await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role_title: role.title,
          full_name: personal.fullName, gender: personal.gender, email: personal.email,
          location: personal.location, linkedin: personal.linkedin, github: personal.github,
          referral: personal.referral,
          experience_rows: experienceRows,
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
      setSendError(err.message || ja.sendFailed);
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
          {step === 1 ? ja.backToJob : ja.back}
        </button>
        <span className="ja-role-name">{role.title}</span>
      </div>

      <div className="ja-container">
        <div className="ja-progress-bar">
          <div className="ja-progress-meta">
            <span>{ja.stepOf.replace('{step}', step).replace('{total}', TOTAL_STEPS)}</span>
            <span>{ja.pctComplete.replace('{pct}', pct)}</span>
          </div>
          <div className="ja-progress-track">
            <div className="ja-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="ja-step-labels">
            {ja.stepLabels.map((label, i) => (
              <span key={label} className={`ja-step-label ${i+1===step?'active':''} ${i+1<step?'done':''}`}>{label}</span>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="ja-intro-banner">
            <p><strong>{ja.introTitle.replace('{role}', role.title)}</strong></p>
            <p>{ja.introP1}</p>
            <p>{ja.introP2} <span style={{color:'#ef4444'}}>*</span> {ja.requiredNote}</p>
          </div>
        )}

        {Object.keys(errors).length > 0 && (
          <div className="ja-errors-banner">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {ja.fixErrors}
          </div>
        )}

        {step === 1 && <StepPersonal   data={personal}   onChange={updateField(setPersonal)}   errors={errors} ja={ja} />}
        {step === 2 && <StepExperience data={experience} onChange={updateField(setExperience)} errors={errors} ja={ja} profile={profile} />}
        {step === 3 && <StepSkills     data={skills}     onChange={updateField(setSkills)}     errors={errors} ja={ja} skillsPlaceholder={profile.skillsPlaceholder} />}
        {step === 4 && <StepFinal      data={final}      onChange={updateField(setFinal)}      errors={errors} ja={ja} />}

        <div className="ja-nav">
          {step > 1 ? (
            <button className="ja-prev-btn" onClick={handleBack}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              {ja.previous}
            </button>
          ) : <span />}
          <div className="ja-nav-right">
            {sendError && <p className="ja-send-error">{sendError}</p>}
            <button className={`ja-submit-btn ${sending ? 'ja-submit-btn--disabled' : ''}`} onClick={handleNext} disabled={sending}>
              {sending ? <><span className="ja-spinner" /> {ja.sending}</> : (
                <>{step === TOTAL_STEPS ? ja.submitApplication : ja.continue}
                {step < TOTAL_STEPS && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}</>
              )}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="ja-modal-overlay" role="presentation">
          <div className="ja-modal" role="dialog" aria-modal="true" aria-labelledby="ja-modal-title">
            <p className="ja-modal-brand">DefiGate</p>

            <div className="ja-modal-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <h2 id="ja-modal-title" className="ja-modal-title">{ja.modalTitle}</h2>
            <p className="ja-modal-sub">
              {ja.modalSub.replace('{role}', role.title)}
            </p>

            <button type="button" className="ja-modal-btn" onClick={() => navigate('/careers')}>
              {ja.returnToList}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
