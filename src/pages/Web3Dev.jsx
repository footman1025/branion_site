import { Link } from 'react-router-dom';
import './Web3Dev.css';
import heroImg from '../assets/service_1.png';

const features = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v6m0 0l4-4m-4 4L8 3"/>
        <path d="M12 23v-6m0 0l4 4m-4-4l-4 4"/>
        <rect x="4" y="7" width="16" height="10" rx="1"/>
        <path d="M8 11h8"/>
        <path d="M8 13h6"/>
      </svg>
    ), 
    title: 'Escrow-based Smart Contract Payments', 
    desc: 'Secure payment execution only when predefined conditions are met, reducing risk for both buyers and sellers.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3v14c0 1.66-4 3-9 3s-9-1.34-9-3V5Z"/>
        <path d="M12 12v4"/>
        <path d="M12 8v1"/>
      </svg>
    ), 
    title: 'Crypto Checkout Integration', 
    desc: 'Seamless stablecoin payments with USDC, USDT, and DAI support for instant settlements.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ), 
    title: 'Automated Transaction Execution', 
    desc: 'Smart contracts handle payment processing automatically, eliminating manual intervention and human error.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
        <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
        <path d="M3 12h6m6 0h6"/>
      </svg>
    ), 
    title: 'Simple Wallet Connection', 
    desc: 'One-click MetaMask integration with support for all major Web3 wallets and mobile compatibility.' 
  },
];

const stack = ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'MetaMask', 'USDC', 'USDT', 'DAI', 'Hardhat', 'OpenZeppelin', 'Wagmi', 'React'];

const steps = [
  { num: '01', title: 'Requirements Analysis', desc: 'We analyze your e-commerce needs, payment flows, and security requirements.' },
  { num: '02', title: 'Smart Contract Design', desc: 'Escrow contract architecture, payment conditions, and wallet integration planning.' },
  { num: '03', title: 'Development & Testing', desc: 'Build payment contracts with comprehensive testing on testnets before mainnet.' },
  { num: '04', title: 'Integration & Launch', desc: 'Seamless integration with your e-commerce platform and ongoing support.' },
];

export default function Web3Dev() {
  return (
    <main className="w3-page">

      {/* Hero */}
      <section className="w3-hero">
        <div className="w3-hero-grid" aria-hidden="true">
          {Array.from({ length: 120 }).map((_, i) => <span key={i} className="w3-grid-dot" />)}
        </div>
        <div className="w3-hero-content">
          <div className="w3-hero-left" style={{display: 'none'}}>
            <span className="w3-tag">Smart Payments</span>
            <h1>Secure Blockchain<br />Payment Systems<br />for E-commerce</h1>
            <p>We build secure, blockchain-based payment systems designed specifically for e-commerce. Our focus is simple: make transactions faster, safer, and fully automated—without unnecessary complexity.</p>
            <p>By using smart contracts, payments are executed only when conditions are met. This reduces risk, removes manual processes, and builds trust between buyers and sellers.</p>
            <Link to="/contact" className="w3-hero-btn">Get Started Today</Link>
          </div>
          <div className="w3-hero-right">
            <img
              src={heroImg}
              alt="Smart Payment System"
              className="w3-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w3-section">
        <div className="w3-container">
          <span className="w3-label">What We Deliver</span>
          <h2 className="w3-title">Smart Payment Solutions</h2>
          <div className="w3-features-grid">
            {features.map(f => (
              <div key={f.title} className="w3-feature-card">
                <span className="w3-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w3-stack-section">
        <div className="w3-container">
          <span className="w3-label">Tech Stack</span>
          <h2 className="w3-title">Technologies We Use</h2>
          <div className="w3-stack-pills">
            {stack.map(s => <span key={s} className="w3-pill">{s}</span>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w3-section">
        <div className="w3-container">
          <span className="w3-label">Our Process</span>
          <h2 className="w3-title">How We Deliver</h2>
          <div className="w3-steps">
            {steps.map(s => (
              <div key={s.num} className="w3-step">
                <span className="w3-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w3-cta-section">
        <div className="w3-container w3-cta-inner">
          <h2>Ready to revolutionize your e-commerce payments?</h2>
          <p>Let's build a secure, automated payment system that your customers will trust and love.</p>
          <Link to="/contact" className="w3-hero-btn">Start Your Project</Link>
        </div>
      </section>

    </main>
  );
}
