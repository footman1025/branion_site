import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import './CryptoCheckout.css';
import heroImg from '../assets/service_3.jpg';

const FEATURE_ICONS = [
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="16" cy="14" r="1.5" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  ),
];

const STACK = ['Solidity', 'React', 'Node.js', 'Ethereum', 'Polygon', 'Solana', 'USDC', 'USDT', 'DAI', 'MetaMask', 'WalletConnect', 'Stripe'];

export default function CryptoCheckout() {
  const { t } = useLang();
  const p = t.cryptoCheckout;

  return (
    <main className="cc-page">
      <section className="cc-hero">
        <img
          src={heroImg}
          alt={p.heroImgAlt}
          className="cc-hero-img"
          width={2976}
          height={1190}
          decoding="async"
        />
      </section>

      <section className="cc-features-section">
        <div className="cc-container">
          <header className="cc-features-header">
            <span className="cc-label">{p.featuresLabel}</span>
            <h2 className="cc-title">{p.featuresTitle}</h2>
          </header>
          <div className="cc-features-grid">
            {p.features.map((f, i) => (
              <article key={f.title} className="cc-feature">
                <span className="cc-feature-icon">{FEATURE_ICONS[i]}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cc-benefits-section">
        <div className="cc-container">
          <header className="cc-benefits-header">
            <span className="cc-label">{p.benefitsLabel}</span>
            <h2 className="cc-title">{p.benefitsTitle}</h2>
          </header>
          <ul className="cc-benefits-grid">
            {p.benefits.map(benefit => (
              <li key={benefit} className="cc-benefit-item">
                <span className="cc-benefit-check" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cc-stack-section">
        <div className="cc-container">
          <header className="cc-stack-header">
            <span className="cc-label">{p.stackLabel}</span>
            <h2 className="cc-title">{p.stackTitle}</h2>
          </header>
          <ul className="cc-stack-list">
            {STACK.map(s => (
              <li key={s} className="cc-stack-item">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cc-process-section">
        <div className="cc-container">
          <header className="cc-process-header">
            <span className="cc-label">{p.processLabel}</span>
            <h2 className="cc-title">{p.processTitle}</h2>
          </header>
          <ol className="cc-steps">
            {p.steps.map(s => (
              <li key={s.num} className="cc-step">
                <span className="cc-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cc-cta-section">
        <div className="cc-cta-glow" aria-hidden="true" />
        <div className="cc-container cc-cta-inner">
          <p className="cc-cta-brand">DefiGate</p>
          <h2>{p.ctaTitle}</h2>
          <p className="cc-cta-sub">{p.ctaSub}</p>
          <Link to="/contact" className="cc-hero-btn cc-cta-btn">{p.ctaBtn}</Link>
        </div>
      </section>
    </main>
  );
}
