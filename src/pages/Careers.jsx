import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Careers.css';

export const openRoles = [
  {
    slug: 'senior-blockchain-engineer',
    title: 'Senior Blockchain Engineer',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Engineering',
    summary: 'Design and ship production-grade smart contracts and on-chain infrastructure across EVM and non-EVM chains.',
    responsibilities: [
      'Architect and develop smart contracts in Solidity and/or Rust.',
      'Lead technical design reviews and code audits.',
      'Collaborate with product and design to define on-chain mechanics.',
      'Optimize gas usage and ensure contract security.',
      'Mentor junior engineers and contribute to internal tooling.',
    ],
    requirements: [
      '4+ years of software engineering experience.',
      '2+ years of hands-on smart contract development (Solidity / Rust).',
      'Deep understanding of EVM, gas optimization, and security patterns.',
      'Experience with Hardhat, Foundry, or Anchor.',
      'Familiarity with DeFi protocols (AMMs, lending, yield).',
    ],
    niceToHave: [
      'Experience with formal verification tools (Certora, Echidna).',
      'Contributions to open-source blockchain projects.',
      'Knowledge of cross-chain bridges and messaging protocols.',
    ],
  },
  {
    slug: 'smart-contract-auditor',
    title: 'Smart Contract Auditor',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Security',
    summary: 'Identify vulnerabilities in smart contracts and DeFi protocols before they reach mainnet.',
    responsibilities: [
      'Perform manual and automated security audits of Solidity and Rust contracts.',
      'Write detailed audit reports with severity ratings and remediation steps.',
      'Develop and maintain internal fuzzing and static analysis tooling.',
      'Stay current with emerging attack vectors and DeFi exploits.',
      'Work closely with client engineering teams during remediation.',
    ],
    requirements: [
      '3+ years of smart contract development or security research.',
      'Deep knowledge of common vulnerability classes (reentrancy, flash loans, oracle manipulation).',
      'Experience with Slither, Mythril, Echidna, or Certora.',
      'Strong written communication for audit report writing.',
    ],
    niceToHave: [
      'Published CVEs or public audit reports.',
      'Bug bounty track record on Immunefi or similar.',
      'Experience auditing Rust / Solana programs.',
    ],
  },
  {
    slug: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Engineering',
    summary: 'Build AI-powered features that enhance our Web3 products — from on-chain analytics to recommendation engines.',
    responsibilities: [
      'Design and train ML models for on-chain data analysis and user behavior.',
      'Build and maintain data pipelines for blockchain event indexing.',
      'Integrate LLM-based features into product surfaces.',
      'Collaborate with backend engineers on model serving infrastructure.',
      'Monitor model performance and iterate based on real-world feedback.',
    ],
    requirements: [
      '3+ years of ML/AI engineering experience.',
      'Proficiency in Python, PyTorch or TensorFlow.',
      'Experience with data pipelines (Spark, Kafka, or similar).',
      'Solid understanding of NLP and recommendation systems.',
    ],
    niceToHave: [
      'Experience with on-chain data (The Graph, Dune Analytics).',
      'Familiarity with LLM fine-tuning and RAG architectures.',
      'Background in quantitative finance or DeFi analytics.',
    ],
  },
  {
    slug: 'product-designer-web3',
    title: 'Product Designer (Web3)',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Design',
    summary: 'Shape the user experience of complex blockchain products — making Web3 feel simple and intuitive.',
    responsibilities: [
      'Own end-to-end design for Web3 product features from discovery to delivery.',
      'Create wireframes, prototypes, and high-fidelity UI in Figma.',
      'Conduct user research and usability testing.',
      'Establish and maintain a consistent design system.',
      'Partner closely with engineering to ensure pixel-perfect implementation.',
    ],
    requirements: [
      '3+ years of product design experience.',
      'Strong portfolio demonstrating complex UX problem-solving.',
      'Expert-level Figma skills.',
      'Experience designing for crypto wallets, DeFi dashboards, or NFT platforms.',
    ],
    niceToHave: [
      'Motion design skills (Lottie, Framer).',
      'Experience with accessibility standards (WCAG 2.1).',
      'Personal interest in blockchain and decentralized systems.',
    ],
  },
  {
    slug: 'business-development-manager',
    title: 'Business Development Manager',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Growth',
    summary: 'Drive revenue growth by identifying and closing partnerships with Web3 protocols, DAOs, and enterprise clients.',
    responsibilities: [
      'Source, qualify, and close new business opportunities.',
      'Build and manage a pipeline of Web3 protocol and enterprise prospects.',
      'Represent Bravion at industry events and conferences.',
      'Collaborate with the product team to align offerings with market demand.',
      'Negotiate and structure partnership agreements.',
    ],
    requirements: [
      '4+ years of B2B sales or business development experience.',
      'Strong network within the Web3 / blockchain ecosystem.',
      'Excellent communication and negotiation skills.',
      'Ability to understand and articulate technical products.',
    ],
    niceToHave: [
      'Experience selling to DAOs or crypto-native organizations.',
      'Existing relationships with DeFi protocols or Web3 VCs.',
      'Background in software development or technical consulting.',
    ],
  },
  {
    slug: 'frontend-engineer-react',
    title: 'Frontend Engineer (React)',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Engineering',
    summary: 'Build fast, accessible, and beautiful interfaces for our Web3 products and client projects.',
    responsibilities: [
      'Develop responsive React applications with clean, maintainable code.',
      'Integrate Web3 libraries (ethers.js, wagmi, viem) for wallet and contract interactions.',
      'Collaborate with designers to implement pixel-perfect UIs.',
      'Write unit and integration tests for frontend components.',
      'Optimize performance and Core Web Vitals.',
    ],
    requirements: [
      '3+ years of React development experience.',
      'Strong CSS skills and experience with Tailwind or CSS Modules.',
      'Experience with Web3 wallet integrations (MetaMask, WalletConnect).',
      'Familiarity with TypeScript.',
    ],
    niceToHave: [
      'Experience with Next.js and SSR/SSG patterns.',
      'Contributions to open-source frontend projects.',
      'Interest in DeFi and on-chain UX patterns.',
    ],
  },
];

const perks = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Flexible Hours',
    desc: 'Work when you are most productive. We care about output, not clock-in times.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Fully Remote',
    desc: 'Work from anywhere in the world. Our team spans 15+ countries.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Learning Budget',
    desc: '$2,000/year for courses, conferences, and certifications.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Equity & Tokens',
    desc: 'Competitive salary plus equity and token allocations in the projects you ship.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Great Team',
    desc: 'Work alongside world-class engineers, auditors, and product builders.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Meaningful Work',
    desc: 'Build infrastructure that powers real DeFi protocols used by thousands.',
  },
];

export default function Careers() {
  const [searchParams] = useSearchParams();
  const [showToast, setShowToast] = useState(searchParams.get('applied') === '1');

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 6000);
      return () => clearTimeout(t);
    }
  }, [showToast]);

  return (
    <main className="careers-page">

      {/* Success toast */}
      {showToast && (
        <div className="careers-toast">
          <div className="careers-toast-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div>
            <p className="careers-toast-title">Application Submitted!</p>
            <p className="careers-toast-sub">We'll review your application and get back to you within 5 business days.</p>
          </div>
          <button className="careers-toast-close" onClick={() => setShowToast(false)} aria-label="Dismiss">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      )}

      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-hero-inner">
          <span className="careers-tag">Join the Team</span>
          <h1>Build the Future of<br />Web3 With Us</h1>
          <p>We are a remote-first blockchain product company. If you love hard problems, decentralized systems, and shipping things that matter — you will fit right in.</p>
          <a href="#open-roles" className="careers-hero-btn">See Open Roles</a>
        </div>
      </section>

      {/* Perks */}
      <section className="careers-section">
        <div className="careers-container">
          <span className="careers-tag">Why Bravion</span>
          <h2 className="careers-section-title">Life at Bravion</h2>
          <div className="perks-grid">
            {perks.map(p => (
              <div key={p.title} className="perk-card">
                <div className="perk-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="careers-section careers-roles-section" id="open-roles">
        <div className="careers-container">
          <span className="careers-tag">Open Positions</span>
          <h2 className="careers-section-title">Current Openings</h2>
          <div className="roles-list">
            {openRoles.map(role => (
              <Link key={role.slug} to={`/careers/${role.slug}`} className="role-card">
                <div className="role-info">
                  <span className="role-dept">{role.dept}</span>
                  <h3 className="role-title">{role.title}</h3>
                  <div className="role-meta">
                    <span className="role-badge">{role.type}</span>
                    <span className="role-badge">{role.location}</span>
                  </div>
                </div>
                <svg className="role-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-cta-section">
        <div className="careers-container careers-cta-inner">
          <h2>Don't see your role?</h2>
          <p>We are always looking for exceptional people. Send us your CV and tell us how you can contribute.</p>
          <Link to="/contact" className="careers-hero-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
