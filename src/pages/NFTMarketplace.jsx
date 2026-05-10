import { Link } from 'react-router-dom';
import './NFTMarketplace.css';
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
    title: 'Multi-Chain Asset Transfers', 
    desc: 'Seamless token transfers between Ethereum, Polygon, Solana, BNB Chain, and Arbitrum networks.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49"/>
      </svg>
    ), 
    title: 'Atomic Swap Mechanisms', 
    desc: 'Trustless cross-chain swaps with atomic transactions ensuring either complete success or failure.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ), 
    title: 'Validator Network Security', 
    desc: 'Decentralized validator network with multi-signature consensus and slashing mechanisms for security.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="5" width="22" height="14" rx="7"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
      </svg>
    ), 
    title: 'Liquidity Pool Management', 
    desc: 'Automated liquidity provisioning with dynamic fee structures and yield optimization strategies.' 
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
    title: 'Cross-Chain Message Passing', 
    desc: 'Arbitrary message passing between chains enabling complex cross-chain dApp interactions.' 
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
    title: 'Emergency Pause Mechanisms', 
    desc: 'Multi-sig emergency controls with time-locked upgrades and circuit breakers for maximum security.' 
  },
];

const stack = ['Solidity', 'Rust', 'Go', 'Ethereum', 'Polygon', 'Solana', 'BNB Chain', 'Arbitrum', 'Chainlink', 'LayerZero', 'Axelar', 'Wormhole'];

const steps = [
  { num: '01', title: 'Platform Design', desc: 'UX research, wireframes, and marketplace architecture planning.' },
  { num: '02', title: 'Smart Contracts', desc: 'Audited marketplace contracts with escrow, royalties, and access control.' },
  { num: '03', title: 'Frontend Build', desc: 'Responsive marketplace UI with wallet connect, listings, and activity feeds.' },
  { num: '04', title: 'Launch & Growth', desc: 'Mainnet deployment, SEO, creator onboarding, and ongoing support.' },
];

export default function NFTMarketplace() {
  return (
    <main className="nftm-page">

      {/* Hero */}
      <section className="nftm-hero">
        <img
          src={heroImg}
          alt="Cross-Chain Bridge Infrastructure"
          className="nftm-hero-img"
        />
      </section>

      {/* Features */}
      <section className="nftm-section">
        <div className="nftm-container">
          <span className="nftm-label">What We Build</span>
          <h2 className="nftm-title">Cross-Chain Bridge Infrastructure</h2>
          <div className="nftm-features-grid">
            {features.map(f => (
              <div key={f.title} className="nftm-feature-card">
                <span className="nftm-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="nftm-stack-section">
        <div className="nftm-container">
          <span className="nftm-label">Tech Stack</span>
          <h2 className="nftm-title">Technologies We Use</h2>
          <div className="nftm-stack-pills">
            {stack.map(s => <span key={s} className="nftm-pill">{s}</span>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="nftm-section">
        <div className="nftm-container">
          <span className="nftm-label">Our Process</span>
          <h2 className="nftm-title">How We Deliver</h2>
          <div className="nftm-steps">
            {steps.map(s => (
              <div key={s.num} className="nftm-step">
                <span className="nftm-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nftm-cta-section">
        <div className="nftm-container nftm-cta-inner">
          <h2>Ready to build your Cross-Chain Bridge?</h2>
          <p>We deliver secure, scalable, and efficient cross-chain infrastructure from concept to mainnet.</p>
          <Link to="/contact" className="nftm-hero-btn">Start a Project</Link>
        </div>
      </section>

    </main>
  );
}
