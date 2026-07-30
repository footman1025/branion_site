import TransitionLink from './TransitionLink';
import { useLang } from '../context/LangContext';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();
  const serviceRoutes = {
    web3: '/smart-payments',
    'nft-dev': '/ai-recommendations',
    'nft-market': '/crypto-checkout',
    crypto: '/web3-mvps',
  };
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <TransitionLink to="/" className="logo-footer">
            <img src={logo} alt="DefiGate" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          </TransitionLink>
          <p>{f.desc}</p>
        </div>

        <div className="footer-links">
          <h4>{f.services}</h4>
          <ul>
            {t.servicesMenu?.map(service => (
              <li key={service.key}><TransitionLink to={serviceRoutes[service.key]}>{service.label}</TransitionLink></li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>{f.company}</h4>
          <ul>
            <li><TransitionLink to="/about">{f.aboutUs}</TransitionLink></li>
            <li><TransitionLink to="/contact">{f.contact}</TransitionLink></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>{f.contact}</h4>
          <ul>
            <li><a href="mailto:support@defigate.org">support@defigate.org</a></li>
          </ul>
        </div>
      </div>



      <div className="footer-bottom">
        <p>{f.rights.replace('{year}', year)}</p>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">{f.privacy}</a>
          <a href="/cookie-policy">{f.cookie}</a>
          <a href="/terms-of-service">{f.terms}</a>
        </div>
        <div className="footer-socials-bottom">
          <a href="https://youtube.com/@DefiGate" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="fsb-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
              <path d="m10 9.5 5 2.5-5 2.5v-5Z" />
            </svg>
          </a>
          <a href="https://facebook.com/DefiGate" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="fsb-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9.25" />
              <path d="M13.2 17.5v-5.2h1.75l.3-2.1H13.2V8.95c0-.6.17-1.02 1.1-1.02H15.4V6.05A15 15 0 0 0 13.55 6c-1.85 0-3.1 1.13-3.1 3.2v1.8H8.7v2.1h1.75v5.4h2.75Z" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://linkedin.com/company/DefiGate" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="fsb-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 11v6M8 8.5v.01M12 17v-3.5a2 2 0 0 1 4 0V17" />
            </svg>
          </a>
          <a href="https://x.com/defigate" target="_blank" rel="noopener noreferrer" aria-label="X" className="fsb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4l16 16M20 4 4 20" />
            </svg>
          </a>
          <a href="https://instagram.com/defigate" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="fsb-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://tiktok.com/@defigate" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="fsb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 4v9.2a3.8 3.8 0 1 1-2.8-3.66V6.7c.9.2 1.85.5 2.8.9V4Z" />
              <path d="M14 6.7A8.5 8.5 0 0 0 18.2 8v2.35A10.8 10.8 0 0 1 14 9.2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
