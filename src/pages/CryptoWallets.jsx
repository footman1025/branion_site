import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import './CryptoWallets.css';
import heroImg from '../assets/service_4.jpg';

const FEATURE_ICONS = [
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
];

const STACK = ['React Native', 'Swift', 'Kotlin', 'Web3.js', 'Ethers.js', 'WalletConnect', 'Solidity', 'Bitcoin Core', 'Fireblocks SDK', 'AWS KMS', 'Biometric Auth'];

export default function CryptoWallets() {
  const { t } = useLang();
  const p = t.web3Mvps;

  return (
    <main className="cw-page">
      <section className="cw-hero">
        <img
          src={heroImg}
          alt={p.heroImgAlt}
          className="cw-hero-img"
          width={2976}
          height={1190}
          decoding="async"
        />
      </section>

      <section className="cw-features-section">
        <div className="cw-container">
          <header className="cw-features-header">
            <span className="cw-label">{p.featuresLabel}</span>
            <h2 className="cw-title">{p.featuresTitle}</h2>
          </header>
          <div className="cw-features-grid">
            {p.features.map((f, i) => (
              <article key={f.title} className="cw-feature">
                <span className="cw-feature-icon">{FEATURE_ICONS[i]}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cw-stack-section">
        <div className="cw-container">
          <header className="cw-stack-header">
            <span className="cw-label">{p.stackLabel}</span>
            <h2 className="cw-title">{p.stackTitle}</h2>
          </header>
          <ul className="cw-stack-list">
            {STACK.map(s => (
              <li key={s} className="cw-stack-item">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cw-process-section">
        <div className="cw-container">
          <header className="cw-process-header">
            <span className="cw-label">{p.processLabel}</span>
            <h2 className="cw-title">{p.processTitle}</h2>
          </header>
          <ol className="cw-steps">
            {p.steps.map(s => (
              <li key={s.num} className="cw-step">
                <div className="cw-step-rail" aria-hidden="true">
                  <span className="cw-step-dot" />
                </div>
                <span className="cw-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cw-cta-section">
        <div className="cw-cta-glow" aria-hidden="true" />
        <div className="cw-container cw-cta-inner">
          <p className="cw-cta-brand">DefiGate</p>
          <h2>{p.ctaTitle}</h2>
          <p className="cw-cta-sub">{p.ctaSub}</p>
          <Link to="/contact" className="cw-hero-btn">{p.ctaBtn}</Link>
        </div>
      </section>
    </main>
  );
}
