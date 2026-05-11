import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import './Home.css';
import achivementImg from '../assets/achivement.jpg';
import introductionImg from '../assets/introduction.png';
import homeImg from '../assets/home.png';
import companyLogo1 from '../assets/company_logo_!.webp';
import companyLogo2 from '../assets/company_logo_2.webp';
import products1Img from '../assets/service_1.png';
import products2Img from '../assets/service_2.png';
import products3Img from '../assets/service_3.png';
import products4Img from '../assets/service_4.png';
import products5Img from '../assets/landing_service_1.png';
import products0Img from '../assets/landing_service_2.png';
import products7Img from '../assets/landing_service_3.png';
import products8Img from '../assets/landing_service_4.png';
import companyLogo3 from '../assets/company_logo_3.webp';
import companyLogo4 from '../assets/company_logo_4.webp';
import companyLogo5 from '../assets/company_logo_5.webp';
import companyLogo6 from '../assets/company_logo_6.webp';
import companyLogo7 from '../assets/company_logo_7.webp';
import companyLogo8 from '../assets/company_logo_8.webp';
import ceoImg from '../assets/CEO.png';
import ctoImg from '../assets/CTO.png';
import cfoImg from '../assets/CFO.png';
import projectManagerImg from '../assets/project manager.png';
import marketingManagerImg from '../assets/marketing manager.png';
import recruiterImg from '../assets/recruiter.png';
import seniorBlockchainDeveloperImg from '../assets/senior blockchain developer.png';
import seniorAIDeveloperImg from '../assets/senior AI developer.png';
import service1 from '../assets/service_1.png';
import service2 from '../assets/service_2.png';
import service3 from '../assets/service_3.png';
import service4 from '../assets/service_4.png';
import landingService1 from '../assets/landing_service_1.png';
import landingService2 from '../assets/landing_service_2.png';
import landingService3 from '../assets/landing_service_3.png';
import landingService4 from '../assets/landing_service_4.png';
import landingProductImg from '../assets/landing_product.jpg';

const TESTIMONIALS = [
  {
    rating: 5,
    review: "In less than three months, Bravion successfully delivered a stable application. External stakeholders gave overall positive feedback, and the client was impressed with the team's project management. They communicated effectively through Slack, video meetings, Confluence, and Jira.",
    name: 'Marcus Eng',
    role: 'CEO, Anatomia (PhysAct)',
    project: 'Project',
    projectDesc: 'PhysAct is a mobile app for patients combined with a web platform for doctors that works as a bridge between doctors and patients struggling with depression. Our goal was to develop a product that will successfully launch, attract an audience and help people fight mild depression.',
    caseLink: '#',
  },
  {
    rating: 5,
    review: "Bravion delivered our blockchain platform on time and within budget. The smart contracts were thoroughly audited and the team was proactive in suggesting improvements. Highly recommend for any Web3 project.",
    name: 'Sarah Chen',
    role: 'CTO, ChainVault',
    project: 'Project',
    projectDesc: 'ChainVault is a DeFi lending protocol built on Ethereum. The platform allows users to deposit collateral and borrow stablecoins with competitive interest rates and full on-chain transparency.',
    caseLink: '#',
  },
  {
    rating: 5,
    review: "The team exceeded our expectations at every stage. From discovery to launch, communication was seamless and the final product was polished and performant. We will definitely work with Bravion again.",
    name: 'James Rivera',
    role: 'Founder, NexusAI',
    project: 'Project',
    projectDesc: 'NexusAI is an AI-powered SaaS platform that automates customer support workflows using large language models. The platform integrates with existing CRM tools and reduces support ticket volume by up to 60%.',
    caseLink: '#',
  },
  {
    rating: 5,
    review: "Professional, fast, and detail-oriented. Bravion built our cross-platform mobile app in React Native and it works flawlessly on both iOS and Android. The code quality was excellent.",
    name: 'Priya Patel',
    role: 'Product Manager, MediTrack',
    project: 'Project',
    projectDesc: 'MediTrack is a healthcare mobile application that allows patients to track medications, schedule appointments, and communicate securely with their healthcare providers.',
    caseLink: '#',
  },
  {
    rating: 5,
    review: "We hired Bravion for a security audit and penetration test. They found critical vulnerabilities we had missed and provided clear remediation steps. Our platform is now SOC2 compliant thanks to their work.",
    name: 'Alex Morgan',
    role: 'CEO, CloudShield',
    project: 'Project',
    projectDesc: 'CloudShield is a cybersecurity platform offering automated vulnerability scanning, compliance reporting, and real-time threat monitoring for cloud-native applications.',
    caseLink: '#',
  },
  {
    rating: 5,
    review: "Outstanding work on our NFT marketplace. The team handled everything from smart contract development to the frontend UI. Launch day was smooth with zero critical issues.",
    name: 'Liam Chen',
    role: 'Co-Founder, NFTForge',
    project: 'Project',
    projectDesc: 'NFTForge is a multi-chain NFT marketplace supporting ERC-721 and ERC-1155 tokens. The platform features lazy minting, royalty management, and a curated discovery feed.',
    caseLink: '#',
  },
];



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
  { label: 'Crypto Payment Processor', tag: 'Bravion', img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1600&h=900&q=90' },
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
  { name: 'Gabriel Ohno',  role: 'CEO & Co-Founder',     bio: "Leading Bravion to revolutionize cryptocurrency payments. My mission is to eliminate payment processing fees and give businesses complete control over their funds.", founder: true, img: ceoImg },
  { name: 'Emir Jensen',  role: 'Co-Founder & CTO',     bio: 'Architecting the Bravion payment infrastructure. I focus on building secure, scalable, and user-friendly solutions for accepting crypto payments without intermediaries.', founder: true, img: ctoImg },
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
      <span className="t-rating">{rating}</span>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24"
          fill={i <= Math.floor(rating) ? '#ef4444' : i - 0.5 === rating ? 'url(#half)' : '#e5e7eb'}
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="half"><stop offset="50%" stopColor="#ef4444"/><stop offset="50%" stopColor="#e5e7eb"/></linearGradient>
          </defs>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialsSlider() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[idx];
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(i => (i + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="t-slider">
      <div className="t-body">
        <div className="t-left">
          <Stars rating={t.rating} />
          <p className="t-review">"{t.review}"</p>
          <div className="t-author">
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </div>
        </div>
        <div className="t-divider" />
        <div className="t-right">
          <h4>{t.project}</h4>
          <p>{t.projectDesc}</p>
          <a href={t.caseLink} className="t-case-btn">Full case</a>
        </div>
      </div>
      <div className="t-nav">
        <button onClick={prev} aria-label="Previous" className="t-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span className="t-counter">{idx + 1} / {total}</span>
        <button onClick={next} aria-label="Next" className="t-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
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
                    <img src={serviceImages[s.icon]} alt={s.title} className="service-img" />
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
                    <img src={serviceImages[s.icon]} alt={s.title} className="service-img" />
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
  const [expandedIdx, setExpandedIdx] = useState(0);
  
  const expertiseAreas = [
    { 
      title: 'Smart Payments', 
      description: 'Production-grade payment solutions with zero transaction fees and instant settlement. Accept 20+ cryptocurrencies directly to your wallet with complete control over your funds. No intermediaries, no chargebacks, no account freezing.',
      image: landingService1, 
      link: '/smart-payments' 
    },
    { 
      title: 'AI Recommendations', 
      description: 'Intelligent recommendation engine powered by advanced machine learning algorithms. Personalize user experiences and increase conversion rates with AI-driven insights. Real-time analytics and natural language processing for smarter business decisions.',
      image: landingService2, 
      link: '/ai-recommendations' 
    },
    { 
      title: 'Crypto Checkout', 
      description: 'Seamless cryptocurrency payment integration for e-commerce platforms and SaaS applications. Support multiple payment methods with instant confirmation and webhook notifications. Reduce payment friction and increase customer satisfaction with crypto options.',
      image: landingService3, 
      link: '/crypto-checkout' 
    },
    { 
      title: 'Web3 MVPs', 
      description: 'Rapid development of Web3 minimum viable products and prototypes with production-ready infrastructure. From smart contracts to frontend dApps, we handle the complete development lifecycle. Launch your blockchain project in weeks, not months.',
      image: landingService4, 
      link: '/web3-mvps' 
    },
  ];

  return (
    <section className="expertise-accordion-section">
      <div className="expertise-container">
        {/* Left: Service Image */}
        <div className="expertise-left">
          <div className="service-image-display">
            <img 
              key={expandedIdx}
              src={expertiseAreas[expandedIdx].image} 
              alt={expertiseAreas[expandedIdx].title} 
              className="service-display-img" 
            />
          </div>
        </div>
        
        {/* Right: Accordion */}
        <div className="expertise-right">
          <div className="expertise-header">
            <span className="expertise-tag">Expertise</span>
            <h2 className="expertise-title">Areas of expertise</h2>
          </div>
          <div className="accordion-list">
            {expertiseAreas.map((area, idx) => (
              <div key={idx} className="accordion-item">
                <button 
                  className={`accordion-header ${expandedIdx === idx ? 'active' : ''}`}
                  onClick={() => setExpandedIdx(idx)}
                >
                  <span className="accordion-title">{area.title}</span>
                  <span className="accordion-icon">{expandedIdx === idx ? '✕' : '+'}</span>
                </button>
                {expandedIdx === idx && (
                  <div className="accordion-content">
                    <p>{area.description}</p>
                    <Link to={area.link} className="accordion-btn">
                      Learn More <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="platform-section" style={{ backgroundImage: `url(${landingProductImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="platform-overlay"></div>
      <div className="platform-container">
        {/* Left: Content */}
        <div className="platform-left">
          <span className="platform-tag">SELF-HOSTED PAYMENT GATEWAY</span>
          <h2 className="platform-title">Accept Crypto Payments with Zero Fees.</h2>
          <p className="platform-description">
            Bravion is a self-hosted cryptocurrency payment gateway designed specifically for e-commerce businesses. Accept 20+ cryptocurrencies with zero transaction fees, instant settlement, and complete control over your funds. No intermediaries, no chargebacks, no account freezing.
          </p>
          
          <div className="platform-features">
            <div className="platform-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22M17 5H9.5a4 4 0 0 0 0 8h5m0 0H9.5a4 4 0 0 1 0-8H17"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Zero Transaction Fees</h4>
                <p>Keep 100% of your revenue. No 2.9% + $0.30 fees like traditional processors. Save thousands annually.</p>
              </div>
            </div>
            
            <div className="platform-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M12 12v4M10 14h4"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Non-Custodial Security</h4>
                <p>You control your private keys and funds. Payments go directly to your wallet. No third-party can freeze or seize your assets.</p>
              </div>
            </div>
            
            <div className="platform-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                  <path d="M21 3v5h-5"/>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                  <path d="M3 21v-5h5"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Self-Hosted Control</h4>
                <p>Deploy on your own infrastructure. Complete data privacy and independence. No vendor lock-in or monthly fees.</p>
              </div>
            </div>
          </div>
          
          <div className="platform-actions">
            <a href="https://demo.Bravion.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Try Live Demo
            </a>
            <Link to="/contact" className="btn btn-outline">
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Right: Dashboard Image */}
        <div className="platform-right">
          <img src={homeImg} alt="Bravion Dashboard" className="platform-image" />
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  const { t } = useLang();
  const cp = t.contactPage;
  const [form, setForm] = useState({ name: '', email: '', country: '', phone: '', message: '' });
  const [file, setFile]   = useState(null);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  const steps = [
    'Install Bravion in 5 minutes using Docker Compose or Kubernetes.',
    'Enable the cryptocurrencies you want to accept (BTC, ETH, USDT, etc.).',
    'Generate API keys and configure webhooks for payment notifications.',
    'Integrate with your store using ready-made plugins or REST API.',
    'Start accepting crypto payments with zero transaction fees and instant settlement.',
  ];

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!form.country) errs.country = 'Please select a country';
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!form.message.trim()) errs.message = 'Please describe your project';
    return errs;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', country: '', phone: '', message: '' });
      setFile(null);
      setErrors({});
    }, 800);
  };

  return (
    <section className="home-contact-section">
      <div className="home-contact-container">
        <div className="hc-left">
          <h2 className="hc-title">Ready to accept crypto payments with zero fees?</h2>
          <p className="hc-sub">Deploy Bravion in 5 minutes. Complete control over your funds. Start accepting 20+ cryptocurrencies today.</p>
          <h3 className="hc-next-title">How we get started:</h3>
          <div className="hc-steps">
            {steps.map((s, i) => (
              <div key={i} className="hc-step">
                <div className="hc-step-num">0{i + 1}</div>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hc-right">
          <div className="hc-card">
            <h3 className="hc-card-title">Share Your Project's Vision</h3>
            {status === 'success' ? (
              <p className="hc-success">Thanks! Our team will contact you within 24 hours.</p>
            ) : (
              <form className="hc-form" onSubmit={handleSubmit} noValidate>
                <div className="hc-row">
                  <div className="hc-field">
                    <input
                      name="name" type="text" placeholder={cp.namePlaceholder}
                      value={form.name} onChange={handleChange}
                      className={errors.name ? 'hc-input-error' : ''}
                    />
                    {errors.name && <span className="hc-err-msg">{errors.name}</span>}
                  </div>
                  <div className="hc-field">
                    <input
                      name="email" type="email" placeholder={cp.emailPlaceholder}
                      value={form.email} onChange={handleChange}
                      className={errors.email ? 'hc-input-error' : ''}
                    />
                    {errors.email && <span className="hc-err-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="hc-row">
                  <div className="hc-field">
                    <select name="country" value={form.country} onChange={handleChange}
                      className={errors.country ? 'hc-input-error' : ''}>
                      <option value="">Country</option>
                      {['United States','United Kingdom','Canada','Australia','Germany','France','India','UAE','Singapore','Other'].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.country && <span className="hc-err-msg">{errors.country}</span>}
                  </div>
                  <div className="hc-field">
                    <input
                      name="phone" type="tel" placeholder="Phone Number"
                      value={form.phone} onChange={handleChange}
                      className={errors.phone ? 'hc-input-error' : ''}
                    />
                    {errors.phone && <span className="hc-err-msg">{errors.phone}</span>}
                  </div>
                </div>

                <div className="hc-field">
                  <textarea
                    name="message" rows={4} placeholder={cp.messagePlaceholder}
                    value={form.message} onChange={handleChange}
                    className={errors.message ? 'hc-input-error' : ''}
                  />
                  {errors.message && <span className="hc-err-msg">{errors.message}</span>}
                </div>

                {/* File attach */}
                <div className="hc-attach" onClick={() => fileRef.current.click()}>
                  <span>{file ? file.name : 'Attach File'}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                  </svg>
                  <input ref={fileRef} type="file" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
                </div>

                {/* NDA note */}
                <div className="hc-nda">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Your idea is 100% protected by our <strong>Non Disclosure Agreement</strong>.</span>
                </div>

                {status === 'success' && <p className="hc-success">Thanks! Our team will contact you within 24 hours.</p>}
                {status === 'error'   && <p className="hc-error">Something went wrong. Please try again.</p>}

                <button type="submit" className="hc-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTeam() {
  return (
    <section className="home-team-section">
      <div className="container">
        <span className="tag">THE TEAM</span>
        <h2 className="section-title">Meet Our Team</h2>

        {/* Founders */}
        <div className="team-founders-grid">
          {homeTeam.filter(m => m.founder).map(m => (
            <div key={m.name} className="team-founder-card">
              <div className="tfc-img-wrap">
                <img src={m.img} alt={m.name} className="tfc-img" />
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
              <img src={m.img} alt={m.name} className="tmc-img" />
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
  return (
    <section className="engagement-model-section">
      <div className="engagement-model-container">
        <span className="engagement-model-tag">BLOCKCHAIN DEVELOPMENT</span>
        <h2 className="engagement-model-title">From Protocol to <span className="gradient-text">Production</span>.</h2>
        <p className="engagement-model-subtitle">A proven four-phase methodology for building production-grade blockchain protocols with security-first development and institutional-grade infrastructure.</p>
        
        <div className="engagement-phases">
          <div className="phase-card phase-card-1">
            <div className="phase-number">01</div>
            <h3 className="phase-title">Protocol Design & Tokenomics</h3>
            <p className="phase-description">Economic modeling, tokenomics design, security architecture, and technical requirements. Deliverable: comprehensive protocol specification, economic audit, and security model documentation.</p>
            <div className="phase-timeline">Week 1-2</div>
          </div>
          
          <div className="phase-card phase-card-2">
            <div className="phase-number">02</div>
            <h3 className="phase-title">Smart Contract Development</h3>
            <p className="phase-description">Solidity/Rust development with formal verification, automated testing suites, gas optimization, and security vulnerability assessment — all code reviewed and audited before deployment.</p>
            <div className="phase-timeline">Week 2-6</div>
          </div>
          
          <div className="phase-card phase-card-3">
            <div className="phase-number">03</div>
            <h3 className="phase-title">Security Audit & Testing</h3>
            <p className="phase-description">Comprehensive security audits with third-party verification, mainnet simulation, stress testing, and economic attack vector analysis across all protocol components.</p>
            <div className="phase-timeline">Week 6-8</div>
          </div>
          
          <div className="phase-card phase-card-4">
            <div className="phase-number">04</div>
            <h3 className="phase-title">Deployment & Monitoring</h3>
            <p className="phase-description">Mainnet deployment, real-time monitoring setup, on-chain analytics implementation, and ongoing security support. Most protocols continue with us for long-term maintenance.</p>
            <div className="phase-timeline">Ongoing</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  const [services] = useState(SERVICES_DATA);

  const svcPrev = () => {};
  const svcNext = () => {};

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <img
          className="hero-image"
          src={introductionImg}
          alt="Blockchain Infrastructure"
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <h1>
              <span className="hero-word-1">CREATE.</span>{' '}
              <span className="hero-word-2">INNOVATE.</span>{' '}
              <span className="hero-word-3">EVOLVE.</span>
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
      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>$20M+</h3>
              <p>TVL Secured</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Protocols Deployed</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Chains Supported</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Audit Pass Rate</p>
            </div>
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
        <div className="testimonials-inner">
          <p className="testimonials-tag">Reviews</p>
          <h2 className="testimonials-title">Highly satisfied clients</h2>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="clients-section">
        <div className="clients-inner">
          <p className="clients-tag">Our clients</p>
          <h2 className="clients-title">We are trusted</h2>
          <div className="clients-scroll-container">
            <div className="clients-scroll-track">
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
              
              {/* Duplicate for seamless loop */}
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
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <HomeContact />
    </main>
  );
}
