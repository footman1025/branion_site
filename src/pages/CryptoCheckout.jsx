import { Link } from 'react-router-dom';
import './CryptoCheckout.css';
import heroImg from '../assets/service_3.png';

const features = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ), 
    title: 'Crypto Payment Integration', 
    desc: 'Accept payments with stablecoins (USDC, USDT, DAI) and major cryptocurrencies without platform rebuilds.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49"/>
      </svg>
    ), 
    title: 'Seamless Checkout Flow', 
    desc: 'Smooth, intuitive payment experience that reduces friction and increases conversion rates.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ), 
    title: 'Wallet Connection', 
    desc: 'Support for MetaMask, WalletConnect, Coinbase Wallet, and other major Web3 wallets.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="5" width="22" height="14" rx="7"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
      </svg>
    ), 
    title: 'Transaction Tracking', 
    desc: 'Real-time transaction confirmation, status updates, and comprehensive settlement reporting.' 
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
    title: 'Multi-Chain Support', 
    desc: 'Accept payments across Ethereum, Polygon, Solana, BNB Chain, and other major blockchains.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v5h5"/>
        <path d="M3 8a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 4"/>
        <path d="M21 21v-5h-5"/>
        <path d="M21 16a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 20"/>
      </svg>
    ), 
    title: 'Instant Settlement', 
    desc: 'Receive stable, reliable transactions with instant settlement and minimal fees.' 
  },
];

const stack = ['Solidity', 'React', 'Node.js', 'Ethereum', 'Polygon', 'Solana', 'USDC', 'USDT', 'DAI', 'MetaMask', 'WalletConnect', 'Stripe'];

const steps = [
  { num: '01', title: 'Integration Setup', desc: 'API key generation, webhook configuration, and sandbox testing environment.' },
  { num: '02', title: 'Smart Contracts', desc: 'Audited payment contracts with escrow, refund mechanisms, and security controls.' },
  { num: '03', title: 'Checkout UI', desc: 'Customizable payment widget that integrates seamlessly with your existing checkout.' },
  { num: '04', title: 'Launch & Support', desc: 'Mainnet deployment, monitoring, and 24/7 technical support.' },
];

const benefits = [
  'Expand your customer base to crypto-native users',
  'Reduce payment friction and increase conversion rates',
  'Accept the future of payments without complexity',
  'Instant settlements with stablecoins',
  'No platform rebuilds required',
  'Comprehensive transaction tracking and reporting',
];

export default function CryptoCheckout() {
  return (
    <main className="cc-page">

      {/* Hero */}
      <section className="cc-hero">
        <img
          src={heroImg}
          alt="Crypto Checkout"
          className="cc-hero-img"
        />
      </section>

      {/* Overview */}
      <section className="cc-section">
        <div className="cc-container">
          <span className="cc-label">Crypto Payments</span>
          <h2 className="cc-title">Crypto Checkout Integration</h2>
          <p className="cc-overview">
            We help e-commerce businesses accept crypto payments quickly and securely—without rebuilding their entire platform. Our solutions are designed for smooth checkout experiences, making it easy for customers to pay with digital assets while you receive stable, reliable transactions.
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="cc-section">
        <div className="cc-container">
          <span className="cc-label">What We Deliver</span>
          <h2 className="cc-title">Complete Payment Solution</h2>
          <div className="cc-features-grid">
            {features.map(f => (
              <div key={f.title} className="cc-feature-card">
                <span className="cc-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="cc-benefits-section">
        <div className="cc-container">
          <span className="cc-label">Why It Matters</span>
          <h2 className="cc-title">Key Benefits</h2>
          <div className="cc-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="cc-benefit-item">
                <div className="cc-benefit-check">✓</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="cc-stack-section">
        <div className="cc-container">
          <span className="cc-label">Tech Stack</span>
          <h2 className="cc-title">Technologies We Use</h2>
          <div className="cc-stack-pills">
            {stack.map(s => <span key={s} className="cc-pill">{s}</span>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="cc-section">
        <div className="cc-container">
          <span className="cc-label">Our Process</span>
          <h2 className="cc-title">How We Deliver</h2>
          <div className="cc-steps">
            {steps.map(s => (
              <div key={s.num} className="cc-step">
                <span className="cc-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cc-cta-section">
        <div className="cc-container cc-cta-inner">
          <h2>Ready to accept crypto payments?</h2>
          <p>Start accepting the future of payments—without complexity. We'll handle the integration.</p>
          <Link to="/contact" className="cc-hero-btn">Start a Project</Link>
        </div>
      </section>

    </main>
  );
}
