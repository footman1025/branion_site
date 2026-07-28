import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import './Web3Dev.css';
import heroImg from '../assets/service_1.jpg';

const FEATURE_ICONS = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="7" width="16" height="10" rx="1" />
      <path d="M12 1v6M12 23v-6" />
      <path d="M8 11h8M8 13h6" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3v14c0 1.66-4 3-9 3s-9-1.34-9-3V5Z" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
      <path d="M3 12h6m6 0h6" />
    </svg>
  ),
];

const STACK = ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'MetaMask', 'USDC', 'USDT', 'DAI', 'Hardhat', 'OpenZeppelin', 'Wagmi', 'React'];

export default function Web3Dev() {
  const { t } = useLang();
  const p = t.smartPayments;

  return (
    <main className="w3-page">
      <section className="w3-hero">
        <img
          src={heroImg}
          alt={p.heroImgAlt}
          className="w3-hero-img"
          width={2976}
          height={1190}
          decoding="async"
        />
      </section>

      <section className="w3-features-section">
        <div className="w3-container">
          <header className="w3-features-header">
            <span className="w3-label">{p.featuresLabel}</span>
            <h2 className="w3-title">{p.featuresTitle}</h2>
          </header>
          <div className="w3-features-grid">
            {p.features.map((f, i) => (
              <article key={f.title} className="w3-feature">
                <span className="w3-feature-icon">{FEATURE_ICONS[i]}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w3-stack-section">
        <div className="w3-container">
          <header className="w3-stack-header">
            <span className="w3-label">{p.stackLabel}</span>
            <h2 className="w3-title">{p.stackTitle}</h2>
          </header>
          <ul className="w3-stack-list">
            {STACK.map(s => (
              <li key={s} className="w3-stack-item">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w3-process-section">
        <div className="w3-container">
          <header className="w3-process-header">
            <span className="w3-label">{p.processLabel}</span>
            <h2 className="w3-title">{p.processTitle}</h2>
          </header>
          <ol className="w3-steps">
            {p.steps.map(s => (
              <li key={s.num} className="w3-step">
                <span className="w3-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w3-cta-section">
        <div className="w3-cta-glow" aria-hidden="true" />
        <div className="w3-container w3-cta-inner">
          <p className="w3-cta-brand">DefiGate</p>
          <h2>{p.ctaTitle}</h2>
          <p className="w3-cta-sub">{p.ctaSub}</p>
          <Link to="/contact" className="w3-hero-btn w3-cta-btn">{p.ctaBtn}</Link>
        </div>
      </section>
    </main>
  );
}
