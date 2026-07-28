import { useLang } from '../context/LangContext';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './About.css';
import ceoImg from '../assets/CEO.jpg';
import ctoImg from '../assets/CTO.jpg';
import cfoImg from '../assets/CFO.jpg';
import projectManagerImg from '../assets/project manager.jpg';
import marketingManagerImg from '../assets/marketing manager.jpg';
import recruiterImg from '../assets/recruiter.jpg';
import seniorBlockchainDeveloperImg from '../assets/senior blockchain developer.jpg';
import seniorAIDeveloperImg from '../assets/senior AI developer.jpg';

/* ── Counter animation hook ── */
function useCountUp(target, duration = 3000, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

/* ── Animated stat card ── */
function StatCard({ raw, label }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Parse: leading non-digits (prefix), digits (num), trailing non-digits (suffix)
  const match = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/);
  const prefix = match ? match[1] : '';
  const num    = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';
  const animated = useCountUp(num, 3000, inView);

  return (
    <div className="about-mission-stat" ref={ref}>
      <div className="about-mission-stat-value">{prefix}{animated}{suffix}</div>
      <p className="about-mission-stat-label">{label}</p>
    </div>
  );
}


function ParticleHero({ copy }) {
  const canvasRef = useRef(null);
  const titleLines = copy.heroTitle.split('\n');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 180;
    const particles = Array.from({ length: COUNT }, (_, i) => ({
      x: Math.random() * W,
      y: H * 0.35 + Math.sin(i * 0.4) * H * 0.18 + (Math.random() - 0.5) * H * 0.22,
      vx: 0.18 + Math.random() * 0.22,
      vy: (Math.random() - 0.5) * 0.12,
      r: 0.8 + Math.random() * 1.6,
      a: 0.25 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += Math.sin(t + p.phase) * 0.35 + p.vy;
        if (p.x > W + 10) {
          p.x = -10;
          p.y = H * 0.35 + (Math.random() - 0.5) * H * 0.4;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, `rgba(96,165,250,${p.a})`);
        grad.addColorStop(1, 'rgba(56,189,248,0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${p.a * 0.9})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${0.16 * (1 - dist / 60)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="particle-hero">
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
      <div className="particle-hero-overlay" aria-hidden="true" />
      <div className="particle-hero-container">
        <div className="particle-hero-content">
          <p className="particle-hero-brand">DefiGate</p>
          <h1 className="particle-hero-title">
            {titleLines.map((line) => (
              <span key={line} className="particle-hero-title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="particle-hero-sub">{copy.heroSubtitle}</p>
          <div className="particle-hero-actions">
            <Link to="/contact" className="particle-hero-btn">
              {copy.heroCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY_ICONS = [
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
];

const PRINCIPLE_ICONS = [
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 11v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z" />
    </svg>
  ),
];

const DRIVES_ICONS = [
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
];

const team = [
  { name: 'Gabriel Ohno',  role: 'CEO & Co-Founder',     bio: "My mission is to ensure that we, at DefiGate, always stick to our values. We have an obsession with our clients' success, laser focus on select few businesses and staying at the forefront of blockchain development.", founder: true, img: ceoImg },
  { name: 'Emir Jensen',  role: 'Co-Founder & CTO',     bio: 'I am a scientist turned Software Engineer turned Senior IT Consultant and will be the bridge between your business objectives and development strategies. My intention is to become your ultimate development partner.', founder: true, img: ctoImg },
  { name: 'Leonard Erete',  role: 'CFO', img: cfoImg },
  { name: 'Fajar Ikhlaq',    role: 'Partnership Manager',  img: projectManagerImg },
  { name: 'Rebeka Galic',    role: 'Recruiter', img: recruiterImg },
  { name: 'James MacArthur',     role: 'Marketing Manager',    img: marketingManagerImg },
  { name: 'Benjamin Roy',    role: 'AI Team Lead',             img: seniorBlockchainDeveloperImg },
  { name: 'Lucas Pelletier',     role: 'Blockchain Team Lead',             img: seniorAIDeveloperImg },
];

export default function About() {
  const { t } = useLang();
  const a = t.aboutPage;
  return (
    <main className="about-main">
      <SEO
        title={a.seoTitle}
        description={a.seoDescription}
        path="/about"
      />
      <ParticleHero copy={a} />

      {/* Mission */}
      <section className="about-mission">
        <div className="container about-mission-grid">
          <div className="about-mission-copy">
            <span className="about-mission-tag">{a.missionTag}</span>
            <h2 className="about-mission-title">{a.missionTitle}</h2>
            <p className="about-mission-text">{a.missionP1}</p>
            <p className="about-mission-text">{a.missionP2}</p>
          </div>
          <ul className="about-mission-stats">
            {a.stats.map((stat) => (
              <li key={stat.label}>
                <StatCard raw={stat.raw} label={stat.label} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-principles">
        <div className="container">
          <header className="about-principles-header">
            <span className="about-principles-tag">{a.principlesTag}</span>
            <h2 className="about-principles-title">{a.principlesTitle}</h2>
          </header>
          <ul className="about-principles-grid">
            {a.principles.map((item, index) => (
              <li key={item.title} className="about-principle">
                <div className="about-principle-icon" aria-hidden="true">
                  {PRINCIPLE_ICONS[index]}
                </div>
                <h3 className="about-principle-title">{item.title}</h3>
                <p className="about-principle-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why DefiGate */}
      <section className="about-why">
        <div className="container">
          <header className="about-why-header">
            <span className="about-why-tag">{a.whyTag}</span>
            <h2 className="about-why-title">{a.whyTitle}</h2>
          </header>
          <ul className="about-why-grid">
            {a.whyItems.map((item, index) => (
              <li key={item.title} className="about-why-item">
                <div className="about-why-icon" aria-hidden="true">
                  {WHY_ICONS[index]}
                </div>
                <h3 className="about-why-item-title">{item.title}</h3>
                <p className="about-why-item-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="about-drives">
        <div className="container">
          <header className="about-drives-header">
            <span className="about-drives-tag">{a.valuesTag}</span>
            <h2 className="about-drives-title">{a.drivesTitle}</h2>
          </header>
          <ul className="about-drives-grid">
            {a.drives.map((item, index) => (
              <li key={item.title} className="about-drive">
                <div className="about-drive-icon" aria-hidden="true">
                  {DRIVES_ICONS[index]}
                </div>
                <h3 className="about-drive-title">{item.title}</h3>
                <p className="about-drive-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
