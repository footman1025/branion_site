import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import SEO from '../components/SEO';
import contactBg from '../assets/contact.jpg';
import { useLang } from '../context/LangContext';

function StarField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const stars = [];
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 160; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.004 + 0.002,
        drift: (Math.random() - 0.5) * 0.12,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.a += s.speed;
        s.x += s.drift;
        if (s.x > canvas.width) s.x = 0;
        if (s.x < 0) s.x = canvas.width;
        const alpha = (Math.sin(s.a) + 1) / 2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,210,255,${alpha * 0.85})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(100,180,255,0.6)';
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="contact-starfield" />;
}

const COUNTRIES = ['United States','United Kingdom','Canada','Australia','Germany','France','India','UAE','Singapore','Other'];
const DIALCODES = ['+1','+44','+1','+61','+49','+33','+91','+971','+65'];

function Stars({ rating }) {
  return (
    <div className="t-stars">
      <span className="t-rating">{rating.toFixed(1)}</span>
      <div className="t-stars-icons" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i <= rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
    </div>
  );
}

function TestimonialsSlider() {
  const { t: lang } = useLang();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = lang.home?.testimonials || [];
  const total = items.length;
  const item = items[idx] || {};
  const initials = (item.name || '').split(' ').map((n) => n[0]).join('').slice(0, 2);
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  useEffect(() => {
    if (paused || total === 0) return undefined;
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [total, paused, idx]);

  if (!total) return null;

  return (
    <div
      className="t-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="t-progress" aria-hidden="true">
        <span key={idx} className={`t-progress-bar ${paused ? 'is-paused' : ''}`} />
      </div>

      <div className="t-body" key={idx}>
        <div className="t-left">
          <div className="t-quote-mark" aria-hidden="true">“</div>
          <Stars rating={item.rating} />
          <p className="t-review">{item.review}</p>
          <div className="t-author">
            <div className="t-avatar" aria-hidden="true">{initials}</div>
            <div className="t-author-text">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </div>
        </div>

        <div className="t-right">
          <span className="t-project-label">{lang.home?.caseStudy || 'Case study'}</span>
          <h4>{item.project}</h4>
          <p>{item.projectDesc}</p>
          <Link to={item.caseLink || '/case-studies'} className="t-case-btn">
            {lang.home?.fullCase || 'Full case'}
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="t-nav">
        <button type="button" onClick={prev} aria-label="Previous review" className="t-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div className="t-dots" role="tablist" aria-label="Reviews">
          {items.map((review, i) => (
            <button
              key={review.name}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={`Review from ${review.name}`}
              className={`t-dot ${idx === i ? 'is-active' : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
        <span className="t-counter">{String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <button type="button" onClick={next} aria-label="Next review" className="t-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}

const featureIcons = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
];

export default function Contact() {
  const { t } = useLang();
  const cp = t.contactPage;
  const h = t.home || {};
  const contactFeatures = cp.features || [];
  const [form, setForm] = useState({
    name: '', email: '', country: '', phone: '', message: '',
  });
  const [file, setFile]   = useState(null);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const v = h.validation || {};
    const errs = {};
    if (!form.name.trim()) errs.name = v.nameRequired || 'Name is required';
    if (!form.email.trim()) {
      errs.email = v.emailRequired || 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = v.emailInvalid || 'Enter a valid email';
    }
    if (!form.country) errs.country = v.countryRequired || 'Please select a country';
    if (!form.phone.trim()) {
      errs.phone = v.phoneRequired || 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      errs.phone = v.phoneInvalid || 'Enter a valid phone number';
    }
    if (!form.message.trim()) errs.message = v.messageRequired || 'Please describe your project';
    return errs;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('name',    form.name);
      formData.append('email',   form.email);
      formData.append('country', form.country);
      formData.append('phone',   form.phone);
      formData.append('message', form.message);
      if (file) formData.append('file', file);

      const res  = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');

      setStatus('success');
      setForm({ name: '', email: '', country: '', phone: '', message: '' });
      setFile(null);
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="contact-page">
      <SEO
        title="Contact Us"
        description="Get in touch with DefiGate. Tell us about your blockchain project and we'll get back to you within 1 hour."
        path="/contact"
      />
      {/* ── Hero with background image ── */}
      <div className="contact-hero" style={{ backgroundImage: `url(${contactBg})` }}>
        <div className="contact-bg" aria-hidden="true" />

        <div className="contact-wrap">
        {/* ── Left ── */}
        <div className="contact-left">
          <div className="contact-left-card">
            <h1 className="contact-headline">
              {cp.headline || "Let's Build Your Scalable Software Solution"}
            </h1>
            <p className="contact-sub">
              {cp.sub || "Give us a few details about your project. We'll reach out for a friendly conversation, then put together a proposal that fits your timeline and budget."}
            </p>
            <div className="contact-features-row">
              {contactFeatures.map((f, i) => (
                <div className="cf-card-box" key={f.title}>
                  <span className="cf-icon">{featureIcons[i]}</span>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Form card ── */}
        <div className="contact-right">
          <div className="contact-card">
            <div className="contact-card-header">
              <span className="contact-card-eyebrow">{h.getStartedTag || 'Get Started'}</span>
              <h2 className="contact-card-title">{h.formTitle || "Share Your Project's Vision"}</h2>
              <p className="contact-card-sub">{h.formSub || "Tell us what you're building — we'll reply within 24 hours."}</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-name">{h.nameLabel || 'Name'}</label>
                  <input
                    id="cf-name"
                    name="name" type="text" placeholder={cp.namePlaceholder}
                    value={form.name} onChange={handleChange}
                    className={errors.name ? 'cf-input-error' : ''}
                  />
                  {errors.name && <span className="cf-err-msg">{errors.name}</span>}
                </div>
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-email">{h.emailLabel || 'Email'}</label>
                  <input
                    id="cf-email"
                    name="email" type="email" placeholder={cp.emailPlaceholder}
                    value={form.email} onChange={handleChange}
                    className={errors.email ? 'cf-input-error' : ''}
                  />
                  {errors.email && <span className="cf-err-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-country">{h.countryLabel || 'Country'}</label>
                  <select
                    id="cf-country"
                    name="country" value={form.country} onChange={handleChange}
                    className={errors.country ? 'cf-input-error' : ''}
                  >
                    <option value="">{h.selectCountry || 'Select country'}</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.country && <span className="cf-err-msg">{errors.country}</span>}
                </div>
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-phone">{h.phoneLabel || 'Phone'}</label>
                  <input
                    id="cf-phone"
                    name="phone" type="tel" placeholder={h.phonePlaceholder || 'Phone Number'}
                    value={form.phone} onChange={handleChange}
                    className={errors.phone ? 'cf-input-error' : ''}
                  />
                  {errors.phone && <span className="cf-err-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-message">{h.messageLabel || 'Project details'}</label>
                <textarea
                  id="cf-message"
                  name="message" rows={4} placeholder={cp.messagePlaceholder}
                  value={form.message} onChange={handleChange}
                  className={errors.message ? 'cf-input-error' : ''}
                />
                {errors.message && <span className="cf-err-msg">{errors.message}</span>}
              </div>

              <button type="button" className={`cf-attach ${file ? 'has-file' : ''}`} onClick={() => fileRef.current.click()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                <span>{file ? file.name : (h.attachFile || 'Attach File')}</span>
              </button>
              <input ref={fileRef} type="file" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />

              <div className="cf-nda">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{h.ndaPrefix || 'Your idea is 100% protected by our'} <strong>{h.ndaStrong || 'Non Disclosure Agreement'}</strong>.</span>
              </div>

              {status === 'success' && <p className="cf-success">{cp.success}</p>}
              {status === 'error'   && <p className="cf-error">{cp.error}</p>}

              <button type="submit" className="cf-submit" disabled={status === 'loading'}>
                {status === 'loading' ? (h.sending || cp.sending || 'Sending...') : (
                  <>
                    {h.submit || cp.send || 'Submit'}
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>{/* end contact-hero */}

      {/* ── Trusted Clients ── */}
      <section className="contact-clients">
        <div className="contact-clients-inner">
          <header className="contact-clients-header">
            <p className="contact-clients-tag">{h.clientsTag || 'Our clients'}</p>
            <h2 className="contact-clients-title">{h.clientsTitle || 'We are trusted'}</h2>
          </header>
          <ul className="contact-clients-grid" aria-label="Trusted clients">
            <li className="contact-client">
              <span className="client-logo-sap">SAP</span>
            </li>
            <li className="contact-client">
              <span className="client-logo-decard">
                <span className="decard-star" aria-hidden="true">✳</span>
                <small>DECARD</small>
              </span>
            </li>
            <li className="contact-client">
              <span className="client-logo-oracle">ORACLE</span>
            </li>
            <li className="contact-client">
              <span className="client-logo-coinhook"><b>C</b>&nbsp;coinhook</span>
            </li>
            <li className="contact-client">
              <span className="client-logo-nextstreet">next street</span>
            </li>
            <li className="contact-client">
              <span className="client-logo-paid">⊛&nbsp;Paid</span>
            </li>
            <li className="contact-client">
              <span className="client-logo-xbto">⬡&nbsp;XBTO</span>
            </li>
            <li className="contact-client">
              <span className="client-logo-deverus"><em>de</em>verus</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="testimonials-atmosphere" aria-hidden="true" />
        <div className="testimonials-inner">
          <div className="testimonials-header">
            <p className="testimonials-tag">{h.reviewsTag || 'Reviews'}</p>
            <h2 className="testimonials-title">{h.reviewsTitle || 'Highly satisfied clients'}</h2>
            <p className="testimonials-subtitle">{h.reviewsSub}</p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="contact-cta">
        <div className="contact-cta-glow" aria-hidden="true" />
        <div className="contact-cta-inner">
          <p className="contact-cta-brand">DefiGate</p>
          <h2 className="contact-cta-title">
            {t.sections?.ctaTitle || 'Ready to ship your blockchain product?'}
          </h2>
          <p className="contact-cta-sub">
            {t.sections?.ctaSub || "Let's build the infrastructure that powers the next generation of Web3."}
          </p>
          <div className="contact-cta-actions">
            <button
              type="button"
              className="contact-cta-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {t.nav?.contactUs || 'Contact'}
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
