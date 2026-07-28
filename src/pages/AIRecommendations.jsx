import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import './AIRecommendations.css';
import heroImg from '../assets/service_2.jpg';

const BENEFIT_ICONS = [
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
];

export default function AIRecommendations() {
  const { t } = useLang();
  const p = t.aiRecommendations;

  return (
    <main className="ai-recommendations-page">
      <section className="ai-hero">
        <img
          src={heroImg}
          alt={p.heroImgAlt}
          className="ai-hero-img"
          width={2976}
          height={1190}
          decoding="async"
        />
      </section>

      <section className="ai-deliver-section">
        <div className="ai-container">
          <header className="ai-deliver-header">
            <span className="ai-section-tag">{p.deliverTag}</span>
            <h2>{p.deliverTitle}</h2>
            <p>{p.deliverSub}</p>
          </header>

          <div className="ai-benefits-grid">
            {p.benefits.map((b, i) => (
              <article key={b.title} className="ai-benefit">
                <div className="ai-benefit-top">
                  <span className="ai-benefit-icon">{BENEFIT_ICONS[i]}</span>
                  <span className="ai-benefit-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-how-section">
        <div className="ai-container">
          <header className="ai-how-header">
            <span className="ai-section-tag">{p.howTag}</span>
            <h2>{p.howTitle}</h2>
          </header>

          <ol className="ai-how-grid">
            {p.steps.map((s, i) => (
              <li key={s.title} className="ai-how-step">
                <span className="ai-how-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ai-cta-section">
        <div className="ai-cta-glow" aria-hidden="true" />
        <div className="ai-container ai-cta-inner">
          <p className="ai-cta-brand">DefiGate</p>
          <h2>{p.ctaTitle}</h2>
          <p className="ai-cta-sub">{p.ctaSub}</p>
          <Link to="/contact" className="btn btn-primary ai-cta-btn">{p.ctaBtn}</Link>
        </div>
      </section>
    </main>
  );
}
