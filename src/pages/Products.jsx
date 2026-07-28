import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../context/LangContext';
import homeImg from '../assets/home.jpg';
import app2Img from '../assets/app_2.jpg';
import app3Img from '../assets/app_3.jpg';
import app4Img from '../assets/app_4.jpg';
import app5Img from '../assets/app_5.jpg';
import app7Img from '../assets/app_7.jpg';
import downloadBtn from '../assets/download_button.png';
import './Products.css';

const FEATURE_ICONS = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8l-4 4-4-4M12 16V8" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
      <path d="M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
      <polyline points="7.5,19.79 7.5,14.6 3,12" />
      <polyline points="21,12 16.5,14.6 16.5,19.79" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
];

const USE_CASE_ICONS = [
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="2" x2="6" y2="6"/>
      <line x1="18" y1="2" x2="18" y2="6"/>
      <line x1="6" y1="18" x2="6" y2="22"/>
      <line x1="18" y1="18" x2="18" y2="22"/>
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <circle cx="12" cy="12" r="2"/>
      <path d="M8 10h0m8 0h0"/>
    </svg>
  ),
];

const USE_CASE_IMAGES = [app2Img, app3Img, app4Img, app5Img];

const supportedCryptos = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '₿', color: '#F7931A' },
  { name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', color: '#627EEA' },
  { name: 'USDT', symbol: 'USDT', icon: '₮', color: '#26A17B' },
  { name: 'USDC', symbol: 'USDC', icon: '◎', color: '#2775CA' },
  { name: 'Litecoin', symbol: 'LTC', icon: 'Ł', color: '#345D9D' },
  { name: 'Dogecoin', symbol: 'DOGE', icon: 'Ð', color: '#BA9F33' },
  { name: 'Monero', symbol: 'XMR', icon: '⬡', color: '#FF6600' },
  { name: 'Solana', symbol: 'SOL', icon: '◎', color: '#14F195' },
  { name: 'Polygon', symbol: 'MATIC', icon: '△', color: '#8247E5' },
  { name: 'Optimism', symbol: 'OP', icon: '◆', color: '#FF0420' },
  { name: 'Avalanche', symbol: 'AVAX', icon: '▲', color: '#E84142' },
  { name: 'Chainlink', symbol: 'LINK', icon: '⛓', color: '#375BD2' },
];

export default function Products() {
  const { t } = useLang();
  const p = t.productsPage;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = downloadBtn;
    a.download = 'DefiGate_download.png';
    a.click();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('.fade-in');
    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="products-main">
      {createPortal(
        <button
          type="button"
          className="products-download-float"
          onClick={handleDownload}
          aria-label={p.downloadAlt || 'Download DefiGate'}
        >
          <img
            src={downloadBtn}
            alt={p.downloadAlt || 'Download DefiGate'}
            className="products-download-float-img"
            width={120}
            height={120}
            decoding="async"
          />
        </button>,
        document.body
      )}

      <section className="products-hero">
        <div className="products-hero-overlay" aria-hidden="true" />
        <div className="products-hero-container">
          <div className="products-hero-content">
            <p className="products-hero-brand">DefiGate</p>
            <h1 className="products-hero-title">
              <span className="products-hero-title-line">{p.heroTitle1}</span>
              <span className="products-hero-title-line">{p.heroTitle2}</span>
              <span className="products-hero-title-accent">{p.heroTitleHighlight}</span>
            </h1>
            <p className="products-hero-subtitle">{p.heroSubtitle}</p>

            <ul className="products-hero-stats">
              {p.heroStats.map(stat => (
                <li key={stat.label} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>

            <div className="products-hero-actions">
              <a href="https://demo.DefiGate.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {p.tryDemo}
              </a>
              <Link to="/contact" className="btn btn-outline">
                {p.getStarted}
              </Link>
            </div>
          </div>

          <div className="products-hero-visual">
            <img loading="lazy" src={homeImg} alt={p.dashboardAlt} className="products-hero-img" />
          </div>
        </div>
      </section>

      <section className="products-features">
        <div className="container">
          <header className="products-features-header">
            <span className="products-features-tag">{p.featuresTag}</span>
            <h2 className="products-features-title">{p.featuresTitle}</h2>
            <p className="products-features-sub">{p.featuresSubtitle}</p>
          </header>
          <div className="products-features-grid">
            {p.keyFeatures.map((feature, index) => (
              <article key={feature.title} className="products-feature fade-in">
                <span className="products-feature-icon">{FEATURE_ICONS[index]}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-crypto">
        <div className="container">
          <header className="products-crypto-header">
            <span className="products-crypto-tag">{p.cryptoTag}</span>
            <h2 className="products-crypto-title">{p.cryptoTitle}</h2>
            <p className="products-crypto-sub">{p.cryptoSubtitle}</p>
          </header>
          <ul className="products-crypto-grid">
            {supportedCryptos.map(crypto => (
              <li key={crypto.symbol} className="products-crypto-item fade-in">
                <span
                  className="products-crypto-icon"
                  style={{ color: crypto.color, backgroundColor: `${crypto.color}18` }}
                  aria-hidden="true"
                >
                  {crypto.icon}
                </span>
                <span className="products-crypto-symbol">{crypto.symbol}</span>
                <span className="products-crypto-name">{crypto.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="products-comparison">
        <div className="container">
          <header className="products-comparison-header">
            <span className="products-comparison-tag">{p.comparisonTag}</span>
            <h2 className="products-comparison-title">{p.comparisonTitle}</h2>
            <p className="products-comparison-sub">{p.comparisonSubtitle}</p>
          </header>
          <div className="products-comparison-table-wrap">
            <table className="products-comparison-table">
              <thead>
                <tr>
                  <th scope="col">{p.comparisonHeaders.feature}</th>
                  <th scope="col" className="is-defigate">{p.comparisonHeaders.defigate}</th>
                  <th scope="col">{p.comparisonHeaders.traditional}</th>
                </tr>
              </thead>
              <tbody>
                {p.comparisonRows.map(row => (
                  <tr key={row.feature}>
                    <th scope="row" className="products-comparison-feature">{row.feature}</th>
                    <td className="products-comparison-defigate">{row.defigate}</td>
                    <td className="products-comparison-traditional">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="products-use-cases">
        <div className="container">
          <header className="products-use-cases-header">
            <span className="products-use-cases-tag">{p.useCasesTag}</span>
            <h2 className="products-use-cases-title">{p.useCasesTitle}</h2>
            <p className="products-use-cases-sub">{p.useCasesSubtitle}</p>
          </header>
          <ul className="products-use-cases-grid">
            {p.useCases.map((useCase, index) => (
              <li key={useCase.title} className="products-use-case fade-in">
                <div className="products-use-case-media">
                  <img loading="lazy" src={USE_CASE_IMAGES[index]} alt="" />
                </div>
                <div className="products-use-case-body">
                  <div className="products-use-case-icon" aria-hidden="true">
                    {USE_CASE_ICONS[index]}
                  </div>
                  <h3 className="products-use-case-title">{useCase.title}</h3>
                  <p className="products-use-case-desc">{useCase.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="products-roi">
        <div className="container">
          <div className="products-roi-layout">
            <div className="products-roi-copy">
              <span className="products-roi-tag">{p.roiTag}</span>
              <h2 className="products-roi-title">{p.roiTitle}</h2>
              <p className="products-roi-sub">{p.roiSubtitle}</p>
              <div className="products-roi-panel">
                <h3 className="products-roi-example">{p.roiExampleTitle}</h3>
                <div className="products-roi-rows">
                  <div className="products-roi-row">
                    <span className="products-roi-label">{p.roiStripeLabel}</span>
                    <span className="products-roi-value">{p.roiStripeValue}</span>
                  </div>
                  <div className="products-roi-row is-defigate">
                    <span className="products-roi-label">{p.roiDefigateLabel}</span>
                    <span className="products-roi-value">{p.roiDefigateValue}</span>
                  </div>
                  <div className="products-roi-row is-savings">
                    <span className="products-roi-label">{p.roiSavingsLabel}</span>
                    <span className="products-roi-value">{p.roiSavingsValue}</span>
                  </div>
                </div>
                <p className="products-roi-note">{p.roiNote}</p>
              </div>
            </div>
            <div className="products-roi-visual">
              <img loading="lazy" src={app7Img} alt={p.roiImageAlt} />
            </div>
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="products-cta-glow" aria-hidden="true" />
        <div className="container products-cta-inner">
          <p className="products-cta-brand">DefiGate</p>
          <h2 className="products-cta-title">{p.ctaTitle}</h2>
          <p className="products-cta-sub">{p.ctaSubtitle}</p>
          <div className="products-cta-actions">
            <a
              href="https://demo.DefiGate.org"
              target="_blank"
              rel="noopener noreferrer"
              className="products-cta-btn products-cta-btn-primary"
            >
              {p.tryDemo}
            </a>
            <Link to="/contact" className="products-cta-btn products-cta-btn-ghost">
              {p.scheduleConsultation}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
