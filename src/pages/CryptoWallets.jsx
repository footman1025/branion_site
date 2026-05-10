import { Link } from 'react-router-dom';
import './CryptoWallets.css';
import heroImg from '../assets/service_4.png';

const features = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ), 
    title: 'Custodial Wallets', 
    desc: 'Exchange-grade custodial wallets with HSM key management, MFA, and institutional security.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
        <circle cx="12" cy="16" r="1"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ), 
    title: 'Non-Custodial Wallets', 
    desc: 'Self-custody wallets with seed phrase backup, biometric auth, and hardware wallet support.' 
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
    desc: 'Single wallet supporting ETH, BTC, SOL, BNB, MATIC, and 100+ tokens out of the box.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10v12"/>
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
      </svg>
    ), 
    title: 'In-App Swap', 
    desc: 'DEX aggregator integration for best-rate token swaps directly inside the wallet.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ), 
    title: 'Mobile & Web', 
    desc: 'Native iOS & Android apps plus a browser extension — all synced in real time.' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ), 
    title: 'Security Audits', 
    desc: 'Penetration testing, smart contract audits, and compliance reviews for every release.' 
  },
];

const stack = ['React Native', 'Swift', 'Kotlin', 'Web3.js', 'Ethers.js', 'WalletConnect', 'Solidity', 'Bitcoin Core', 'Fireblocks SDK', 'AWS KMS', 'Biometric Auth'];

const steps = [
  { num: '01', title: 'Requirements', desc: 'Chain selection, custody model, compliance needs, and feature scoping.' },
  { num: '02', title: 'Architecture', desc: 'Key management design, backend infrastructure, and security model.' },
  { num: '03', title: 'Development', desc: 'Mobile & web builds with full test coverage and security hardening.' },
  { num: '04', title: 'Audit & Launch', desc: 'Third-party security audit, app store submission, and post-launch support.' },
];

export default function CryptoWallets() {
  return (
    <main className="cw-page">

      {/* Hero */}
      <section className="cw-hero">
        <img src={heroImg} alt="Cryptocurrency App Development" className="cw-hero-img" />
      </section>

      {/* Features */}
      <section className="cw-section">
        <div className="cw-container">
          <span className="cw-label">What We Build</span>
          <h2 className="cw-title">Complete Wallet Solutions</h2>
          <div className="cw-features-grid">
            {features.map(f => (
              <div key={f.title} className="cw-feature-card">
                <span className="cw-feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="cw-stack-section">
        <div className="cw-container">
          <span className="cw-label">Tech Stack</span>
          <h2 className="cw-title">Technologies We Use</h2>
          <div className="cw-stack-pills">
            {stack.map(s => <span key={s} className="cw-pill">{s}</span>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="cw-section">
        <div className="cw-container">
          <span className="cw-label">Our Process</span>
          <h2 className="cw-title">How We Deliver</h2>
          <div className="cw-steps">
            {steps.map(s => (
              <div key={s.num} className="cw-step">
                <span className="cw-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cw-cta-section">
        <div className="cw-container cw-cta-inner">
          <h2>Ready to build your crypto wallet?</h2>
          <p>Secure, multi-chain, and production-ready — we deliver wallets users trust.</p>
          <Link to="/contact" className="cw-hero-btn">Start a Project</Link>
        </div>
      </section>

    </main>
  );
}
