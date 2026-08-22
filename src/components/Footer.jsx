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
      </div>
    </footer>
  );
}
