import { useLang } from '../context/LangContext';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './About.css';
import ceoImg from '../assets/CEO.png';
import ctoImg from '../assets/CTO.png';
import cfoImg from '../assets/CFO.png';
import projectManagerImg from '../assets/project manager.png';
import marketingManagerImg from '../assets/marketing manager.png';
import recruiterImg from '../assets/recruiter.png';
import seniorBlockchainDeveloperImg from '../assets/senior blockchain developer.png';
import seniorAIDeveloperImg from '../assets/senior AI developer.png';

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
    <div className="mission-card" ref={ref}>
      <div className="mc-stat">{prefix}{animated}{suffix}</div>
      <p>{label}</p>
    </div>
  );
}


function ParticleHero() {
  const canvasRef = useRef(null);

  useEffect(() => {/*  */
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles forming a flowing wave
    const COUNT = 220;
    const particles = Array.from({ length: COUNT }, (_, i) => ({
      x: Math.random() * W,
      y: H * 0.35 + Math.sin(i * 0.4) * H * 0.18 + (Math.random() - 0.5) * H * 0.22,
      vx: 0.18 + Math.random() * 0.22,
      vy: (Math.random() - 0.5) * 0.12,
      r:  0.8 + Math.random() * 1.6,
      a:  0.3 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.012,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      particles.forEach(p => {
        // Wave motion
        p.x += p.vx;
        p.y += Math.sin(t + p.phase) * 0.35 + p.vy;
        if (p.x > W + 10) { p.x = -10; p.y = H * 0.35 + (Math.random() - 0.5) * H * 0.4; }

        // Glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, `rgba(96,165,250,${p.a})`);
        grad.addColorStop(1, `rgba(56,189,248,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${p.a * 0.9})`;
        ctx.fill();
      });

      // Connect nearby particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${0.18 * (1 - dist / 60)})`;
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
      <canvas ref={canvasRef} className="particle-canvas" />
      <div className="particle-hero-content">
        <h1>We Turn Your Idea Into a<br />Winning Product</h1>
        <p>We empower businesses to achieve digital transformation and maintain strong customer connections through innovative, high-quality solutions and cutting-edge technologies.</p>
        <Link to="/contact" className="particle-hero-btn">Let's talk</Link>
      </div>
    </section>
  );
}

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

const values = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="8" fill="#eff6ff"/>
        <path d="M12 3L4 7v5c0 4.418 3.582 8 8 8s8-3.582 8-8V7l-8-4z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Chain-Native',
    desc: 'We build for the blockchain from day one — not as an afterthought. Every product is designed for decentralization.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="8" fill="#fef3c7"/>
        <rect x="7" y="11" width="10" height="8" rx="2" stroke="#f59e0b" strokeWidth="1.5"/>
        <path d="M9 11V8a3 3 0 0 1 6 0v3" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="15" r="1" fill="#f59e0b"/>
      </svg>
    ),
    title: 'Security First',
    desc: 'Every smart contract we ship is audited. Security is not a feature — it is the foundation.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="8" fill="#ecfdf5"/>
        <circle cx="12" cy="12" r="7" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M12 5c0 0-3 3-3 7s3 7 3 7" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 5c0 0 3 3 3 7s-3 7-3 7" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 12h14" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Multi-Chain',
    desc: 'We support Ethereum, Polygon, Solana, BNB Chain, Arbitrum, and more. Your product should not be chain-limited.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="8" fill="#fdf4ff"/>
        <path d="M5 17l4-4 3 3 4-5 3 3" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 8h2v2" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Built to Scale',
    desc: 'From 100 users to 1 million — our infrastructure handles growth without compromising decentralization.'
  },
];

export default function About() {
  const { t } = useLang();
  return (
    <main style={{ paddingTop: 0 }}>
      <SEO
        title="About Us"
        description="DefiGate is a blockchain product company building DeFi protocols, NFT platforms, and Web3 infrastructure used by thousands of users across 10+ chains."
        path="/about"
      />
      <ParticleHero />

      {/* Mission */}
      <section className="section">
        <div className="container mission-grid">
          <div className="mission-text">
            <span className="tag">{t.aboutPage.missionTag}</span>
            <h2>{t.aboutPage.missionTitle}</h2>
            <p>{t.aboutPage.missionP1}</p>
            <p>{t.aboutPage.missionP2}</p>
          </div>
          <div className="mission-visual">
            <StatCard raw="2023" label="Founded" />
            <StatCard raw="10+" label="Chains Supported" />
            <StatCard raw="20M+" label="TVL Secured" />
            <StatCard raw="50+" label="Protocols Deployed" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section our-values-section">
        <div className="container">
          <span className="values-tag">Our principles</span>
          <h2 className="values-title">Our values</h2>
          <div className="our-values-grid">
            <div className="value-item">
              <div className="value-icon excellence">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We believe there's always room for improvement. Excellence isn't just a skill; it's a mindset we all share.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon partnership">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7007C21.7033 16.0473 20.9999 15.5902 20.2 15.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8003 3.35031 17.5037 3.80771 18.0098 4.46111C18.5159 5.1145 18.8004 5.92493 18.8004 6.76C18.8004 7.59507 18.5159 8.4055 18.0098 9.05889C17.5037 9.71229 16.8003 10.1697 16 10.39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Partnership</h3>
              <p>Building trustworthy, fruitful relationships is crucial for success. Respect is deeply ingrained in our culture.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon tenacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Tenacity</h3>
              <p>We're determined to overcome any challenge and relish the effort it takes. Persistence is the key to success.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon lean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Lean and Simple</h3>
              <p>True simplicity means removing all confusion. We keep our processes streamlined and our team focus on the core idea.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon visionary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Visionary</h3>
              <p>We stay attentive to details without losing sight of the overall vision. We're practical visionaries, balancing innovation with realism.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon everyone">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 8V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4C17.4696 4 16.9609 4.21071 16.5858 4.58579C16.2107 4.96086 16 5.46957 16 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 13C23 14.1046 22.1046 15 21 15H19C17.8954 15 17 14.1046 17 13V11C17 9.89543 17.8954 9 19 9H21C22.1046 9 23 9.89543 23 11V13Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Everyone Brings Value</h3>
              <p>Our diversity and individuality are invaluable. By sharing our unique perspectives, we strengthen our team and progress together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DefiGate */}
      <section className="section why-interexy-section">
        <div className="container">
          <span className="expertise-tag">Our expertise</span>
          <h2 className="expertise-title">Why DefiGate?</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="expertise-icon new-world">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>New-World Opportunities</h3>
              <p>With extensive expertise in next-gen technologies, we are here to help you explore new opportunities and create cutting-edge web and mobile apps that solve modern challenges and meet real market needs.</p>
            </div>
            
            <div className="expertise-item">
              <div className="expertise-icon security">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22S8 18 8 12V7L12 5L16 7V12C16 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Security & Compliance</h3>
              <p>Innovations can be strong and healthy just when they're safe. We care about the security of your customers and business data and will ensure your app complies with legal and industry requirements.</p>
            </div>
            
            <div className="expertise-item">
              <div className="expertise-icon dedicated">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7007C21.7033 16.0473 20.9999 15.5902 20.2 15.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8003 3.35031 17.5037 3.80771 18.0098 4.46111C18.5159 5.1145 18.8004 5.92493 18.8004 6.76C18.8004 7.59507 18.5159 8.4055 18.0098 9.05889C17.5037 9.71229 16.8003 10.1697 16 10.39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Dedicated Team</h3>
              <p>Whether you can outsource the whole project, augment your team, or hire a dedicated team tailored to project requirements. Our top talent is ready to build innovative, scalable, and robust solutions for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--dark2)' }}>
        <div className="container">
          <span className="tag">{t.aboutPage.valuesTag}</span>
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
