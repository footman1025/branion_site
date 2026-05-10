import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import './Services.css';

const SERVICES_DATA = [
  { 
    id: 1, 
    title: 'DeFi Protocol Suite',     
    icon: 'defi', 
    description: 'Complete DeFi infrastructure stack with automated market makers, lending protocols, yield farming vaults, and liquidity management — battle-tested with $500M+ TVL.' 
  },
  { 
    id: 2, 
    title: 'Smart Contract Platform',         
    icon: 'contracts',     
    description: 'Enterprise-grade smart contract development platform with formal verification, automated testing, gas optimization, and security audit integration.' 
  },
  { 
    id: 3, 
    title: 'Cross-Chain Bridge',    
    icon: 'bridge',         
    description: 'Secure cross-chain infrastructure enabling seamless asset transfers between Ethereum, Polygon, Arbitrum, Solana, and 10+ other networks.' 
  },
  { 
    id: 4, 
    title: 'Web3 Wallet Infrastructure',  
    icon: 'wallet',      
    description: 'White-label wallet solutions with multi-chain support, social recovery, hardware integration, and institutional-grade security features.' 
  },
];

const details = {
  defi: [
    'Automated Market Makers (AMM)',
    'Lending & Borrowing Protocols', 
    'Yield Farming & Staking Vaults',
    'Liquidity Mining Programs',
    'Flash Loan Integration',
    'Multi-Asset Pool Management'
  ],
  contracts: [
    'Solidity & Rust Development',
    'Formal Verification & Auditing',
    'Gas Optimization Techniques',
    'Automated Testing Suites',
    'Upgrade Pattern Implementation',
    'Security Best Practices'
  ],
  bridge: [
    'Multi-Chain Asset Transfers',
    'Atomic Swap Mechanisms',
    'Validator Network Security',
    'Cross-Chain Message Passing',
    'Liquidity Pool Management',
    'Emergency Pause Mechanisms'
  ],
  wallet: [
    'Multi-Chain Wallet Support',
    'Social Recovery Systems',
    'Hardware Wallet Integration',
    'Biometric Authentication',
    'Transaction Batching',
    'Institutional Custody Features'
  ],
};

const serviceImages = {
  defi:      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300&h=300&q=90',
  contracts: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=300&h=300&q=90',
  bridge:    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&h=300&q=90',
  wallet:    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=300&h=300&q=90',
};

export default function Services() {
  const { t } = useLang();
  const [services] = useState(SERVICES_DATA);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main style={{ paddingTop: 0 }}>
      <section className="services-hero">
        <img className="hero-bg-img" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop" alt="" aria-hidden="true" />
        <div className="hero-banner-overlay" />
        <div className="hero-banner-content">
          <span className="tag">{t.servicesPage.tag}</span>
          <h1 className="section-title">{t.servicesPage.title}</h1>
          <p className="section-subtitle">{t.servicesPage.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map(s => (
              <div key={s.id} className="service-detail-card">
                <div className="sdc-header">
                  <div className="sdc-icon-wrap">
                    <img
                      src={serviceImages[s.icon]}
                      alt={s.title}
                      className="sdc-img"
                      onError={e => { e.target.style.display='none'; }}
                    />
                  </div>
                  <h2>{s.title}</h2>
                </div>
                <p>{s.description}</p>
                <ul className="sdc-list">
                  {(details[s.icon] || []).map(item => (
                    <li key={item}><span className="check">✓</span> {item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline" style={{ marginTop: '24px' }}>{t.servicesPage.getQuote}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


