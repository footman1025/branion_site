import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import SEO from '../components/SEO';
import './Home.css';
import achivementImg from '../assets/achivement.jpg';
import introductionImg from '../assets/introduction.jpg';
import homeImg from '../assets/home.jpg';
import companyLogo1 from '../assets/company_logo_!.webp';
import companyLogo2 from '../assets/company_logo_2.webp';
import products1Img from '../assets/service_1.jpg';
import products2Img from '../assets/service_2.jpg';
import products3Img from '../assets/service_3.jpg';
import products4Img from '../assets/service_4.jpg';
import products5Img from '../assets/landing_service_1.jpg';
import products0Img from '../assets/landing_service_2.jpg';
import products7Img from '../assets/landing_service_3.jpg';
import products8Img from '../assets/landing_service_4.jpg';
import companyLogo3 from '../assets/company_logo_3.webp';
import companyLogo4 from '../assets/company_logo_4.webp';
import companyLogo5 from '../assets/company_logo_5.webp';
import companyLogo6 from '../assets/company_logo_6.webp';
import companyLogo7 from '../assets/company_logo_7.webp';
import companyLogo8 from '../assets/company_logo_8.webp';
import ceoImg from '../assets/CEO.jpg';
import ctoImg from '../assets/CTO.jpg';
import cfoImg from '../assets/CFO.jpg';
import projectManagerImg from '../assets/project manager.jpg';
import marketingManagerImg from '../assets/marketing manager.jpg';
import recruiterImg from '../assets/recruiter.jpg';
import seniorBlockchainDeveloperImg from '../assets/senior blockchain developer.jpg';
import seniorAIDeveloperImg from '../assets/senior AI developer.jpg';
import service1 from '../assets/service_1.jpg';
import service2 from '../assets/service_2.jpg';
import service3 from '../assets/service_3.jpg';
import service4 from '../assets/service_4.jpg';
import landingService1 from '../assets/landing_service_1.jpg';
import landingService2 from '../assets/landing_service_2.jpg';
import landingService3 from '../assets/landing_service_3.jpg';
import landingService4 from '../assets/landing_service_4.jpg';
import landingProductImg from '../assets/landing_product.jpg';

const SERVICES_DATA = [
  { 
    id: 1, 
    title: 'Zero Transaction Fees',     
    icon: 'defi',       
    description: 'Keep 100% of your revenue. No transaction fees, no monthly fees, no hidden costs.' 
  },
  { 
    id: 2, 
    title: 'Non-Custodial Security', 
    icon: 'web',        
    description: 'You control your private keys and funds. No third-party can freeze or seize your assets.' 
  },
  { 
    id: 3, 
    title: 'Self-Hosted Solution',         
    icon: 'mobile',     
    description: 'Complete data privacy and independence. Deploy on your own infrastructure.' 
  },
  { 
    id: 4, 
    title: '20+ Cryptocurrencies',    
    icon: 'nft',        
    description: 'Accept BTC, ETH, USDT, and 17+ other cryptocurrencies including stablecoins.' 
  },
  { 
    id: 5, 
    title: 'AI-Powered Dashboard',  
    icon: 'cloud',      
    description: 'Built-in AI assistant for analytics, insights, and natural language queries.' 
  },
  { 
    id: 6, 
    title: 'Enhanced Privacy',     
    icon: 'security',   
    description: 'No KYC/AML requirements. Enhanced privacy for you and your customers.' 
  }
];

const heroSlides = [
  { label: 'Self-Hosted Payments',   tag: 'ZERO FEES',   img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&h=900&q=90' },
  { label: 'Crypto Payment Processor', tag: 'DefiGate', img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1600&h=900&q=90' },
  { label: 'AI-Powered Dashboard',     tag: 'ANALYTICS',     img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&h=900&q=90' },
  { label: 'Multi-Chain Support', tag: 'BTC, ETH, SOLANA',      img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1600&h=900&q=90' },
];

const techStack = ['Python', 'Flask', 'Docker', 'Kubernetes', 'Bitcoin', 'Ethereum', 'Solana', 'PostgreSQL'];

const serviceImages = {
  blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&h=900&q=95',
  web:        products4Img,
  mobile:     products3Img,
  ai:         'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&h=900&q=95',
  cloud:      products0Img,
  security:   products8Img,
  ai2:        products7Img,
  defi:       products2Img,
  nft:        products5Img,
};

const techStackData = {
  'Blockchain': ['Solidity', 'Rust', 'Move', 'Ethereum', 'Polygon', 'Solana', 'Arbitrum', 'Optimism', 'Avalanche', 'BNB Chain'],
  'Smart Contracts': ['Hardhat', 'Foundry', 'Truffle', 'OpenZeppelin', 'Chainlink', 'The Graph', 'IPFS', 'Arweave', 'Ceramic', 'Lit Protocol'],
  'DeFi & Protocols': ['Uniswap V3', 'Aave', 'Compound', 'Curve', 'Balancer', 'SushiSwap', 'PancakeSwap', 'Yearn', 'Convex', 'Frax'],
  'Infrastructure': ['Web3.js', 'Ethers.js', 'Viem', 'Wagmi', 'RainbowKit', 'WalletConnect', 'Alchemy', 'Infura', 'QuickNode', 'Moralis'],
  'Security & Auditing': ['Slither', 'Mythril', 'Echidna', 'Manticore', 'Certora', 'Formal Verification', 'Fuzzing', 'Static Analysis', 'Economic Modeling'],
  'Frontend & dApps': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Web3 UI Libraries', 'MetaMask SDK', 'WalletConnect'],
  'Backend & APIs': ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
};

const homeTeam = [
  { name: 'Gabriel Ohno',  role: 'CEO & Co-Founder',     bio: "Leading DefiGate to revolutionize cryptocurrency payments. My mission is to eliminate payment processing fees and give businesses complete control over their funds.", founder: true, img: ceoImg },
  { name: 'Emir Jensen',  role: 'Co-Founder & CTO',     bio: 'Architecting the DefiGate payment infrastructure. I focus on building secure, scalable, and user-friendly solutions for accepting crypto payments without intermediaries.', founder: true, img: ctoImg },
  { name: 'Leonard Erete',  role: 'CFO & Business Lead', img: cfoImg },
  { name: 'Fajar Ikhlaq',    role: 'Partnerships Director',  img: projectManagerImg },
  { name: 'Rebeka Galic',    role: 'Community Manager', img: recruiterImg },
  { name: 'James MacArthur',     role: 'Developer Relations',    img: marketingManagerImg },
  { name: 'Benjamin Roy',    role: 'Security Lead',             img: seniorBlockchainDeveloperImg },
  { name: 'Lucas Pelletier',     role: 'Infrastructure Architect',             img: seniorAIDeveloperImg },
];

function Stars({ rating }) {
  return (
    <div className="t-stars">
      <span className="t-rating">{rating.toFixed(1)}</span>
      <div className="t-stars-icons" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i <= rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
    </div>
  );
}

function TestimonialsSlider() {
  const { t: lang } = useLang();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = lang.home?.testimonials || [];
  const total = items.length;
  const t = items[idx] || {};
  const initials = (t.name || '').split(' ').map((n) => n[0]).join('').slice(0, 2);
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  useEffect(() => {
    if (paused || total === 0) return undefined;
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [total, paused, idx]);

  if (!total) return null;

  return (
    <div
      className="t-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="t-progress" aria-hidden="true">
        <span key={idx} className={`t-progress-bar ${paused ? 'is-paused' : ''}`} />
      </div>

      <div className="t-body" key={idx}>
        <div className="t-left">
          <div className="t-quote-mark" aria-hidden="true">“</div>
          <Stars rating={t.rating} />
          <p className="t-review">{t.review}</p>
          <div className="t-author">
            <div className="t-avatar" aria-hidden="true">{initials}</div>
            <div className="t-author-text">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        </div>

        <div className="t-right">
          <span className="t-project-label">{lang.home?.caseStudy || 'Case study'}</span>
          <h4>{t.project}</h4>
          <p>{t.projectDesc}</p>
          <Link to={t.caseLink || '/case-studies'} className="t-case-btn">
            {lang.home?.fullCase || 'Full case'}
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="t-nav">
        <button type="button" onClick={prev} aria-label="Previous review" className="t-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div className="t-dots" role="tablist" aria-label="Reviews">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={`Review from ${item.name}`}
              className={`t-dot ${idx === i ? 'is-active' : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
        <span className="t-counter">{String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <button type="button" onClick={next} aria-label="Next review" className="t-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}

function ServicesSlider({ services, serviceImages, t }) {
  const [activeService, setActiveService] = useState(0);
  
  const categories = [
    'Zero Transaction Fees',
    'Non-Custodial Security',
    'Self-Hosted Solution',
    '20+ Cryptocurrencies',
    'AI-Powered Dashboard',
    'Enhanced Privacy',
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{t.sections.ourServices}</h2>
        <p className="section-subtitle">{t.sections.servicesSubtitle}</p>
      </div>
      <div className="services-expertise-container">
        {/* Left: Horizontal Slider */}
        <div className="services-slider-left">
          <div className="services-scroll-container">
            <div className="services-scroll-track">
              {/* First set of cards */}
              {services.map((s) => (
                <div key={`first-${s.id}`} className="service-card">
                  <div className="service-card-img-wrap">
                    <img loading="lazy" src={serviceImages[s.icon]} alt={s.title} className="service-img" />
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{s.title}</h3>
                    <p className="service-card-desc">{s.description}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {services.map((s) => (
                <div key={`second-${s.id}`} className="service-card">
                  <div className="service-card-img-wrap">
                    <img loading="lazy" src={serviceImages[s.icon]} alt={s.title} className="service-img" />
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{s.title}</h3>
                    <p className="service-card-desc">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right: Category List */}
        <div className="services-categories-right">
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className={`category-item ${activeService === idx ? 'active' : ''}`}
              onClick={() => setActiveService(idx)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseAccordion() {
  const { t } = useLang();
  const [expandedIdx, setExpandedIdx] = useState(0);

  const expertiseAreas = [
    {
      title: 'Smart Payments',
      description: 'Production-grade payment solutions with zero transaction fees and instant settlement. Accept 20+ cryptocurrencies directly to your wallet with complete control over your funds. No intermediaries, no chargebacks, no account freezing.',
      image: landingService1,
      link: '/smart-payments',
    },
    {
      title: 'AI Recommendations',
      description: 'Intelligent recommendation engine powered by advanced machine learning algorithms. Personalize user experiences and increase conversion rates with AI-driven insights. Real-time analytics and natural language processing for smarter business decisions.',
      image: landingService2,
      link: '/ai-recommendations',
    },
    {
      title: 'Crypto Checkout',
      description: 'Seamless cryptocurrency payment integration for e-commerce platforms and SaaS applications. Support multiple payment methods with instant confirmation and webhook notifications. Reduce payment friction and increase customer satisfaction with crypto options.',
      image: landingService3,
      link: '/crypto-checkout',
    },
    {
      title: 'Web3 MVPs',
      description: 'Rapid development of Web3 minimum viable products and prototypes with production-ready infrastructure. From smart contracts to frontend dApps, we handle the complete development lifecycle. Launch your blockchain project in weeks, not months.',
      image: landingService4,
      link: '/web3-mvps',
    },
  ].map(area => {
    const service = t.servicesMenu?.find(item => item.key === ({ 'Smart Payments': 'web3', 'AI Recommendations': 'nft-dev', 'Crypto Checkout': 'nft-market', 'Web3 MVPs': 'crypto' }[area.title]));
    return service ? { ...area, title: service.title, description: service.desc } : area;
  });

  return (
    <section className="expertise-accordion-section">
      <div className="expertise-atmosphere" aria-hidden="true" />
      <div className="expertise-container">
        <div className="expertise-left">
          <div className="service-image-display">
            {expertiseAreas.map((area, idx) => (
              <img
                key={area.title}
                loading="lazy"
                src={area.image}
                alt={area.title}
                className={`service-display-img ${expandedIdx === idx ? 'is-active' : ''}`}
              />
            ))}
            <div className="expertise-image-meta" key={expandedIdx}>
              <span className="expertise-image-index">0{expandedIdx + 1}</span>
              <span className="expertise-image-label">{expertiseAreas[expandedIdx].title}</span>
            </div>
          </div>
          <div className="expertise-dots" role="tablist" aria-label="Expertise areas">
            {expertiseAreas.map((area, idx) => (
              <button
                key={area.title}
                type="button"
                role="tab"
                aria-selected={expandedIdx === idx}
                className={`expertise-dot ${expandedIdx === idx ? 'is-active' : ''}`}
                onClick={() => setExpandedIdx(idx)}
                aria-label={area.title}
              />
            ))}
          </div>
        </div>

        <div className="expertise-right">
          <div className="expertise-header">
            <span className="expertise-tag">{t.home.expertiseTag}</span>
            <h2 className="expertise-title">{t.home.expertiseTitle}</h2>
            <p className="expertise-subtitle">{t.home.expertiseSub}</p>
          </div>
          <div className="accordion-list">
            {expertiseAreas.map((area, idx) => {
              const isOpen = expandedIdx === idx;
              return (
                <div key={area.title} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className={`accordion-header ${isOpen ? 'active' : ''}`}
                    onClick={() => setExpandedIdx(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-num">0{idx + 1}</span>
                    <span className="accordion-title">{area.title}</span>
                    <span className="accordion-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9h12M9 3v12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={`accordion-panel ${isOpen ? 'is-open' : ''}`}>
                    <div className="accordion-content">
                      <p>{area.description}</p>
                      <Link to={area.link} className="accordion-btn">
                        {t.home.learnMore}
                        <span className="btn-arrow" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  const { t } = useLang();
  const features = t.home.platformFeatures || [];
  const featureIcons = [
    (
      <svg key="fee" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    (
      <svg key="shield" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    (
      <svg key="sync" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  ];

  return (
    <section
      className="platform-section"
      style={{ backgroundImage: `url(${landingProductImg})` }}
    >
      <div className="platform-overlay" aria-hidden="true" />
      <div className="platform-container">
        <div className="platform-left">
          <p className="platform-brand">DefiGate</p>
          <p className="platform-tag">{t.home.platformTag}</p>
          <h2 className="platform-title">{t.home.platformTitle}</h2>
          <p className="platform-description">{t.home.platformDesc}</p>

          <ul className="platform-highlights">
            {features.map((feat, idx) => (
              <li className="platform-highlight" key={feat.title}>
                <span className="platform-highlight-icon">{featureIcons[idx]}</span>
                <span className="platform-highlight-label">{feat.title}</span>
              </li>
            ))}
          </ul>

          <div className="platform-actions">
            <a href="https://demo.DefiGate.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.home.tryDemo}
            </a>
            <Link to="/contact" className="btn btn-outline platform-btn-ghost">
              {t.home.getStartedCta}
            </Link>
          </div>
        </div>

        <div className="platform-right">
          <img loading="lazy" src={homeImg} alt="DefiGate Dashboard" className="platform-image" />
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  const { t } = useLang();
  const cp = t.contactPage;
  const h = t.home;
  const [form, setForm] = useState({ name: '', email: '', country: '', phone: '', message: '' });
  const [file, setFile]   = useState(null);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  const steps = h.steps || [];

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = h.validation.nameRequired;
    if (!form.email.trim()) {
      errs.email = h.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = h.validation.emailInvalid;
    }
    if (!form.country) errs.country = h.validation.countryRequired;
    if (!form.phone.trim()) {
      errs.phone = h.validation.phoneRequired;
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      errs.phone = h.validation.phoneInvalid;
    }
    if (!form.message.trim()) errs.message = h.validation.messageRequired;
    return errs;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('name',    form.name);
      formData.append('email',   form.email);
      formData.append('country', form.country);
      formData.append('phone',   form.phone);
      formData.append('message', form.message);
      if (file) formData.append('file', file);

      const res  = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');

      setStatus('success');
      setForm({ name: '', email: '', country: '', phone: '', message: '' });
      setFile(null);
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="home-contact-section" id="get-started">
      <div className="hc-atmosphere" aria-hidden="true" />
      <div className="hc-atmosphere hc-atmosphere-2" aria-hidden="true" />
      <div className="home-contact-container">
        <div className="hc-left">
          <div className="hc-intro">
            <span className="hc-tag">{h.getStartedTag}</span>
            <h2 className="hc-title">{h.platformTitle}</h2>
            <p className="hc-sub">{h.platformDesc}</p>
          </div>

          <div className="hc-process">
            <div className="hc-process-head">
              <h3 className="hc-next-title">{h.howWeStart}</h3>
              <span className="hc-process-count">{String(steps.length).padStart(2, '0')}</span>
            </div>
            <ol className="hc-steps">
              {steps.map((s, i) => (
                <li key={s.title} className="hc-step" style={{ '--hc-delay': `${i * 55}ms` }}>
                  <div className="hc-step-num" aria-hidden="true">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="hc-step-body">
                    <strong>{s.title}</strong>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="hc-right">
          <div className="hc-card">
            <div className="hc-card-header">
              <span className="hc-card-eyebrow">{h.getStartedTag}</span>
              <h3 className="hc-card-title">{h.formTitle}</h3>
              <p className="hc-card-sub">{h.formSub}</p>
            </div>
            <form className="hc-form" onSubmit={handleSubmit} noValidate>
              <div className="hc-row">
                <div className="hc-field">
                  <label className="hc-field-label" htmlFor="hc-name">{h.nameLabel || 'Name'}</label>
                  <input
                    id="hc-name"
                    name="name" type="text" placeholder={cp.namePlaceholder}
                    value={form.name} onChange={handleChange}
                    className={errors.name ? 'hc-input-error' : ''}
                  />
                  {errors.name && <span className="hc-err-msg">{errors.name}</span>}
                </div>
                <div className="hc-field">
                  <label className="hc-field-label" htmlFor="hc-email">{h.emailLabel || 'Email'}</label>
                  <input
                    id="hc-email"
                    name="email" type="email" placeholder={cp.emailPlaceholder}
                    value={form.email} onChange={handleChange}
                    className={errors.email ? 'hc-input-error' : ''}
                  />
                  {errors.email && <span className="hc-err-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="hc-row">
                <div className="hc-field">
                  <label className="hc-field-label" htmlFor="hc-country">{h.countryLabel || 'Country'}</label>
                  <select
                    id="hc-country"
                    name="country" value={form.country} onChange={handleChange}
                    className={errors.country ? 'hc-input-error' : ''}
                  >
                    <option value="">{h.selectCountry || 'Select country'}</option>
                    {['United States','United Kingdom','Canada','Australia','Germany','France','India','UAE','Singapore','Other'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.country && <span className="hc-err-msg">{errors.country}</span>}
                </div>
                <div className="hc-field">
                  <label className="hc-field-label" htmlFor="hc-phone">{h.phoneLabel || 'Phone'}</label>
                  <input
                    id="hc-phone"
                    name="phone" type="tel" placeholder={h.phonePlaceholder || 'Phone Number'}
                    value={form.phone} onChange={handleChange}
                    className={errors.phone ? 'hc-input-error' : ''}
                  />
                  {errors.phone && <span className="hc-err-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="hc-field">
                <label className="hc-field-label" htmlFor="hc-message">{h.messageLabel || 'Project details'}</label>
                <textarea
                  id="hc-message"
                  name="message" rows={4} placeholder={cp.messagePlaceholder}
                  value={form.message} onChange={handleChange}
                  className={errors.message ? 'hc-input-error' : ''}
                />
                {errors.message && <span className="hc-err-msg">{errors.message}</span>}
              </div>

              <button type="button" className={`hc-attach ${file ? 'has-file' : ''}`} onClick={() => fileRef.current.click()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                <span>{file ? file.name : h.attachFile}</span>
              </button>
              <input ref={fileRef} type="file" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />

              <div className="hc-nda">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{h.ndaPrefix} <strong>{h.ndaStrong}</strong>.</span>
              </div>

              {status === 'success' && <p className="hc-success">{cp.success || 'Thanks! Our team will contact you within 24 hours.'}</p>}
              {status === 'error' && <p className="hc-error">{cp.error || 'Something went wrong. Please try again.'}</p>}

              <button type="submit" className="hc-submit" disabled={status === 'loading'}>
                {status === 'loading' ? (h.sending || 'Sending...') : (
                  <>
                    {h.submit || 'Submit'}
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTeam() {
  const { t } = useLang();
  return (
    <section className="home-team-section">
      <div className="container">
        <span className="tag">{t.home?.teamTag || t.aboutPage?.teamTag || 'THE TEAM'}</span>
        <h2 className="section-title">{t.home?.teamTitle || t.aboutPage?.teamTitle || 'Meet Our Team'}</h2>

        {/* Founders */}
        <div className="team-founders-grid">
          {homeTeam.filter(m => m.founder).map(m => (
            <div key={m.name} className="team-founder-card">
              <div className="tfc-img-wrap">
                <img loading="lazy" src={m.img} alt={m.name} className="tfc-img" />
              </div>
              <div className="tfc-info">
                <p className="tfc-role">{m.role}</p>
                <h3>{m.name}</h3>
                <p className="tfc-bio">{m.bio}</p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="tfc-linkedin" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Members */}
        <div className="team-members-grid">
          {homeTeam.filter(m => !m.founder).map(m => (
            <div key={m.name} className="team-member-card">
              <img loading="lazy" src={m.img} alt={m.name} className="tmc-img" />
              <div className="tmc-overlay">
                <span className="tmc-name">{m.name}</span>
                <span className="tmc-role">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModel() {
  const { t } = useLang();
  const e = t.home?.engagement;
  if (!e) return null;
  return (
    <section className="engagement-model-section">
      <div className="engagement-atmosphere" aria-hidden="true" />
      <div className="engagement-model-container">
        <header className="engagement-header">
          <span className="engagement-model-tag">{e.tag}</span>
          <h2 className="engagement-model-title">
            {e.titleBefore}{' '}
            <span className="engagement-title-accent">{e.titleHighlight}</span>
            {e.titleAfter}
          </h2>
          <p className="engagement-model-subtitle">{e.subtitle}</p>
        </header>

        <ol className="engagement-phases">
          {e.phases.map((phase, idx) => (
            <li
              className={`phase-card phase-card-${idx + 1}`}
              key={phase.title}
              style={{ '--phase-i': idx }}
            >
              <div className="phase-rail" aria-hidden="true">
                <span className="phase-node">{String(idx + 1).padStart(2, '0')}</span>
                {idx < e.phases.length - 1 && <span className="phase-connector" />}
              </div>
              <div className="phase-body">
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-description">{phase.desc}</p>
                <span className="phase-timeline">{phase.timeline}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  const [services] = useState(SERVICES_DATA);
  const heroWords = t.hero.titleWords || `${t.hero.title1} ${t.hero.title2}`.split(' ');

  const svcPrev = () => {};
  const svcNext = () => {};

  return (
    <main>
      <SEO
        title="Blockchain & Web3 Product Company"
        description="DefiGate combines blockchain and AI to power the future of e-commerce. DeFi protocols, smart contracts, Web3 wallets, and AI-powered products built for scale."
        path="/"
      />
      {/* Hero */}
      <section className="hero">
        <img
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-image"
          src={introductionImg}
          alt="Blockchain Infrastructure"
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <h1>
              {heroWords.slice(0, 3).map((word, index) => (
                <span key={word} className={`hero-word-${index + 1}`}>{word}{index < Math.min(heroWords.length, 3) - 1 ? ' ' : ''}</span>
              ))}
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-hero-primary">{t.hero.cta1}</Link>
              <Link to="/contact" className="btn btn-hero-outline">{t.hero.cta2}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-inner">
          <div className="stats-grid">
            {t.stats.map(stat => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Accordion */}
      <ExpertiseAccordion />

      {/* Platform Section */}
      <PlatformSection />

      {/* Engagement Model */}
      <EngagementModel />

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-atmosphere" aria-hidden="true" />
        <div className="testimonials-inner">
          <div className="testimonials-header">
            <p className="testimonials-tag">{t.home.reviewsTag}</p>
            <h2 className="testimonials-title">{t.home.reviewsTitle}</h2>
            <p className="testimonials-subtitle">{t.home.reviewsSub}</p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="clients-section">
        <div className="clients-inner">
          <header className="clients-header">
            <p className="clients-tag">{t.home.clientsTag}</p>
            <h2 className="clients-title">{t.home.clientsTitle}</h2>
          </header>
        </div>
        <div className="clients-scroll-container" aria-label="Trusted clients">
          <div className="clients-scroll-track">
            {[0, 1].map((copy) => (
              <div className="clients-scroll-group" key={copy} aria-hidden={copy === 1}>
                <div className="client-tile"><span className="client-logo-sap">SAP</span></div>
                <div className="client-tile">
                  <span className="client-logo-decard">
                    <span className="decard-star">✳</span>
                    <small>DECARD</small>
                  </span>
                </div>
                <div className="client-tile"><span className="client-logo-oracle">ORACLE</span></div>
                <div className="client-tile"><span className="client-logo-coinhook"><b>C</b>&nbsp;coinhook</span></div>
                <div className="client-tile"><span className="client-logo-nextstreet">next street</span></div>
                <div className="client-tile"><span className="client-logo-paid">⊛&nbsp;Paid</span></div>
                <div className="client-tile"><span className="client-logo-xbto">⬡&nbsp;XBTO</span></div>
                <div className="client-tile"><span className="client-logo-deverus"><em>de</em>verus</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <HomeContact />
    </main>
  );
}
