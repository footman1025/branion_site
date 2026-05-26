import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import LangSwitcher from './LangSwitcher';
import './Navbar.css';
import logo from '../assets/logo.png';
import service1 from '../assets/service_1.png';
import service2 from '../assets/service_2.png';
import service3 from '../assets/service_3.png';
import service4 from '../assets/service_4.png';

const SERVICE_ROUTES = {
  'DeFi Protocol Development': '/web3-development',
  'Smart Contract Platform':   '/nft-development',
  'Cross-Chain Bridge':        '/nft-marketplace',
  'Web3 Wallet Infrastructure': '/crypto-wallets',
};

const SERVICES_MENU = [
  {
    key: 'web3',
    label: 'Smart Payments',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    route: '/smart-payments',
    preview: {
      title: 'Smart Payments',
      desc: 'Production-grade AMMs, lending protocols & yield vaults',
      tags: ['AMM', 'Lending', 'Yield Farming'],
      image: service1,
    },
  },
  {
    key: 'nft-dev',
    label: 'AI Recommendations',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    route: '/ai-recommendations',
    preview: {
      title: 'AI Recommendations',
      desc: 'Audited Solidity & Rust development with formal verification',
      tags: ['Solidity', 'Audits', 'Security'],
      image: service2,
    },
  },
  {
    key: 'nft-market',
    label: 'Crypto Checkout',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    route: '/crypto-checkout',
    preview: {
      title: 'Crypto Checkout',
      desc: 'Secure asset transfers between Ethereum, Polygon & Solana',
      tags: ['Multi-Chain', 'Bridges', 'Interoperability'],
      image: service3,
    },
  },
  {
    key: 'crypto',
    label: 'Web3 MVPs',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    route: '/web3-mvps',
    preview: {
      title: 'Web3 MVPs',
      desc: 'Self-custodial wallets with social recovery & multi-sig',
      tags: ['Self-Custody', 'Multi-Sig', 'Social Recovery'],
      image: service4,
    },
  },
];

function ServicesPanel({ onClose }) {
  const [active, setActive] = useState(SERVICES_MENU[0]);
  return (
    <div className="svc-panel">
      <div className="svc-panel-left">
        <p className="svc-panel-label">SERVICES</p>
        {SERVICES_MENU.map(item => (
          <Link
            key={item.key}
            to={item.route}
            className={`svc-panel-item ${active.key === item.key ? 'active' : ''}`}
            onMouseEnter={() => setActive(item)}
            onClick={onClose}
          >
            <span className="svc-panel-icon">{item.icon}</span>
            <span>{item.label}</span>
            {active.key === item.key && (
              <svg className="svc-panel-arrow" width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </Link>
        ))}
      </div>
      <div className="svc-panel-right">
        <div className="svc-preview-card">
          <div className="svc-preview-top">
            <div className="svc-preview-img">
              <img src={active.preview.image} alt={active.preview.title} />
            </div>
            <div className="svc-preview-info">
              <h3>{active.preview.title}</h3>
              <p>{active.preview.desc}</p>
            </div>
          </div>
          <div className="svc-preview-tags">
            {active.preview.tags.map(tag => (
              <span key={tag} className="svc-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const { pathname } = useLocation();

  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [servicesOpen, setServicesOpen]   = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [companyOpen, setCompanyOpen]     = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const closeTimer     = useRef(null);
  const portfolioTimer = useRef(null);
  const companyTimer   = useRef(null);
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const updateIndicator = (el) => {
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect  = el.getBoundingClientRect();
    setIndicator({ left: elRect.left - navRect.left, width: elRect.width, opacity: 1 });
  };

  const openServices  = () => { clearTimeout(closeTimer.current);     closeTimer.current = setTimeout(() => setServicesOpen(true), 120); };
  const closeServices = () => { clearTimeout(closeTimer.current);     closeTimer.current = setTimeout(() => setServicesOpen(false), 300); };
  const openPortfolio  = () => { clearTimeout(portfolioTimer.current); portfolioTimer.current = setTimeout(() => setPortfolioOpen(true), 120); };
  const closePortfolio = () => { clearTimeout(portfolioTimer.current); portfolioTimer.current = setTimeout(() => setPortfolioOpen(false), 300); };
  const openCompany    = () => { clearTimeout(companyTimer.current);   companyTimer.current = setTimeout(() => setCompanyOpen(true), 120); };
  const closeCompany   = () => { clearTimeout(companyTimer.current);   companyTimer.current = setTimeout(() => setCompanyOpen(false), 300); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const active = navRef.current?.querySelector('.nav-link.active, .nav-link-btn.active');
    if (active) updateIndicator(active);
    else setIndicator(i => ({ ...i, opacity: 0 }));
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      const active = navRef.current?.querySelector('.nav-link.active, .nav-link-btn.active');
      if (active) updateIndicator(active);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setPortfolioOpen(false);
    setCompanyOpen(false);
    setMobileExpanded({});
  }, [pathname]);

  const toggleMobileSection = (key) =>
    setMobileExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <nav className={`navbar ${scrolled || (pathname !== '/' && pathname !== '/about' && pathname !== '/contact' && pathname !== '/products' && pathname !== '/pricing' && pathname !== '/careers') ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Bravion" className="logo-img" />
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links-desktop" ref={navRef}>
          {/* Sliding indicator */}
          <div
            className="nav-indicator"
            style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
          />

          {/* Services */}
          <li
            className="nav-item"
            onMouseEnter={(e) => { openServices(); updateIndicator(e.currentTarget.querySelector('.nav-link-btn')); }}
            onMouseLeave={closeServices}
          >
            <button className={`nav-link nav-link-btn ${servicesOpen ? 'active' : ''}`} aria-expanded={servicesOpen}>
              {t.nav?.services || 'Services'}
              <svg className={`nav-chevron ${servicesOpen ? 'rotated' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {servicesOpen && (
              <div className="mega-menu" onMouseEnter={openServices} onMouseLeave={closeServices}>
                <ServicesPanel onClose={() => setServicesOpen(false)} />
              </div>
            )}
          </li>

          {/* Products */}
          <li className="nav-item" onMouseEnter={(e) => updateIndicator(e.currentTarget.querySelector('.nav-link'))}>
            <Link to="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`}>
              Products
            </Link>
          </li>

          {/* Pricing */}
          <li className="nav-item" onMouseEnter={(e) => updateIndicator(e.currentTarget.querySelector('.nav-link'))}>
            <Link to="/pricing" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}>
              Pricing
            </Link>
          </li>

          {/* About Us */}
          <li className="nav-item" onMouseEnter={(e) => updateIndicator(e.currentTarget.querySelector('.nav-link'))}>
            <Link to="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>
          </li>

          {/* Careers */}
          <li className="nav-item" onMouseEnter={(e) => updateIndicator(e.currentTarget.querySelector('.nav-link'))}>
            <Link to="/careers" className={`nav-link ${pathname === '/careers' ? 'active' : ''}`}>
              Careers
            </Link>
          </li>

          {/* Contact */}
          <li className="nav-item" onMouseEnter={(e) => updateIndicator(e.currentTarget.querySelector('.nav-link'))}>
            <Link to="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>

        </ul>

        {/* Right */}
        <div className="navbar-right">
          <LangSwitcher />
          <Link to="/contact" className="nav-contact-btn">{t.nav?.contact || 'Get Started'}</Link>
          <button
            className={`hamburger ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>

        {/* Services */}
        <div className="mob-section">
          <button className="mob-section-btn" onClick={() => toggleMobileSection('services')}>
            Services
            <svg className={`nav-chevron ${mobileExpanded.services ? 'rotated' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobileExpanded.services && (
            <div className="mob-sub">
              {SERVICES_MENU.map(item => (
                <Link key={item.key} to={item.route} className="mob-link">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/products" className="mob-top-link">Products</Link>

        <Link to="/pricing" className="mob-top-link">Pricing</Link>

        <Link to="/about" className="mob-top-link">About Us</Link>
        <Link to="/careers" className="mob-top-link">Careers</Link>
        <Link to="/contact" className="mob-top-link">Contact</Link>

        <div className="mob-footer">
          <Link to="/contact" className="nav-contact-btn" style={{ width: '100%', justifyContent: 'center' }}>
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
