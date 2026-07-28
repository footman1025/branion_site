import { Link } from 'react-router-dom';
import './NFTDev.css';
import heroImg from '../assets/service_2.jpg';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Real-Time Behavior Tracking',
    desc: 'Capture every click, scroll, and purchase in real time to build accurate customer profiles that power smarter recommendations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    title: 'Frequently Bought Together',
    desc: 'Automatically surface product bundles based on purchase patterns, increasing average order value with zero manual curation.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Personalized Product Feeds',
    desc: 'Every customer sees a unique storefront tailored to their taste — driving higher engagement and repeat purchases.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Conversion Optimization',
    desc: 'A/B test recommendation placements and algorithms to continuously improve click-through and conversion rates.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Privacy-First Architecture',
    desc: 'GDPR-compliant recommendation engine that respects user consent while still delivering highly relevant suggestions.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Easy Store Integration',
    desc: 'Drop-in widgets and REST APIs that connect to Shopify, WooCommerce, Magento, or any custom stack in hours, not weeks.',
  },
];

const stack = ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Redis', 'Elasticsearch', 'Node.js', 'React', 'PostgreSQL', 'Kafka', 'Docker', 'AWS'];

const steps = [
  { num: '01', title: 'Data Audit', desc: 'We analyse your existing product catalogue, customer data, and purchase history to identify recommendation opportunities.' },
  { num: '02', title: 'Model Design', desc: 'We select and tune the right ML algorithms — collaborative filtering, content-based, or hybrid — for your specific use case.' },
  { num: '03', title: 'Build & Integrate', desc: 'We build the recommendation engine and integrate it into your storefront with minimal disruption to your existing stack.' },
  { num: '04', title: 'Monitor & Improve', desc: 'Continuous performance monitoring, A/B testing, and model retraining to keep recommendations sharp as your catalogue grows.' },
];

export default function NFTDev() {
  return (
    <main className="nft-page">

      {/* ── Hero ── */}
      <section className="nft-hero">
        <div className="nft-hero-bg">
          <img src={heroImg} alt="AI Recommendations" className="nft-hero-img" />
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="nft-deliver-section">
        <div className="nft-container">
          <div className="nft-deliver-grid">
            {/* Left: value props */}
            <div className="nft-deliver-left">
              <span className="nft-label">What We Deliver</span>
              <h2 className="nft-deliver-title">The right product,<br />to the right customer,<br />at the right time.</h2>
              <p className="nft-deliver-desc">Our AI recommendation engine learns from real customer behavior to surface the most relevant products — automatically, at scale, without manual curation.</p>
              <div className="nft-deliver-stats">
                <div className="nft-stat">
                  <span className="nft-stat-num">+35%</span>
                  <span className="nft-stat-label">Average order value</span>
                </div>
                <div className="nft-stat">
                  <span className="nft-stat-num">+28%</span>
                  <span className="nft-stat-label">Conversion rate</span>
                </div>
                <div className="nft-stat">
                  <span className="nft-stat-num">+42%</span>
                  <span className="nft-stat-label">Customer retention</span>
                </div>
              </div>
            </div>
            {/* Right: outcome cards */}
            <div className="nft-deliver-right">
              <div className="nft-outcome-card">
                <div className="nft-outcome-icon blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div>
                  <h4>Higher conversions</h4>
                  <p>Show customers exactly what they want before they search for it.</p>
                </div>
              </div>
              <div className="nft-outcome-card">
                <div className="nft-outcome-icon purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <div>
                  <h4>Increased order value</h4>
                  <p>Bundle suggestions and upsells that feel natural, not pushy.</p>
                </div>
              </div>
              <div className="nft-outcome-card">
                <div className="nft-outcome-icon green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <h4>Smarter experience</h4>
                  <p>Every visit feels personal — customers come back because it just works.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="nft-section">
        <div className="nft-container">
          <span className="nft-label">Capabilities</span>
          <h2 className="nft-title">Everything your store needs to recommend smarter</h2>
          <div className="nft-features-grid">
            {features.map(f => (
              <div key={f.title} className="nft-feature-card">
                <span className="nft-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack ── */}
      <section className="nft-stack-section">
        <div className="nft-container">
          <span className="nft-label">Tech Stack</span>
          <h2 className="nft-title">Technologies We Use</h2>
          <div className="nft-stack-pills">
            {stack.map(s => <span key={s} className="nft-pill">{s}</span>)}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="nft-section">
        <div className="nft-container">
          <span className="nft-label">Our Process</span>
          <h2 className="nft-title">How We Deliver</h2>
          <div className="nft-steps">
            {steps.map(s => (
              <div key={s.num} className="nft-step">
                <span className="nft-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nft-cta-section">
        <div className="nft-container nft-cta-inner">
          <h2>Ready to boost your store's revenue?</h2>
          <p>From data audit to live recommendations — we build AI systems that your customers will love.</p>
          <Link to="/contact" className="nft-hero-btn">Start a Project</Link>
        </div>
      </section>

    </main>
  );
}
