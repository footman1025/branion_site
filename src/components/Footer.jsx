import TransitionLink from './TransitionLink';
import { useLang } from '../context/LangContext';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <TransitionLink to="/" className="logo-footer">
            <img src={logo} alt="Bravion" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          </TransitionLink>
          <p>Bravion is a global software development company building production-grade blockchain infrastructure, Web3 solutions, and AI-powered applications for startups and enterprises worldwide.</p>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><TransitionLink to="/smart-payments">Smart Payments</TransitionLink></li>
            <li><TransitionLink to="/ai-recommendations">AI Recommendations</TransitionLink></li>
            <li><TransitionLink to="/crypto-checkout">Crypto Checkout</TransitionLink></li>
            <li><TransitionLink to="/web3-mvps">Web3 MVPs</TransitionLink></li>
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
        <p>© {year} Bravion LLC. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">{f.privacy}</a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/terms-of-service">{f.terms}</a>
        </div>
        <div className="footer-socials-bottom">
          <a href="https://linkedin.com/company/Bravion" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="fsb-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://x.com/Bravion" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="fsb-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://youtube.com/Bravion" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="fsb-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#070c18"/></svg>
          </a>
          <a href="https://t.me/solanagenius" target="_blank" rel="noopener noreferrer" aria-label="Send" className="fsb-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
