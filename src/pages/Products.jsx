import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLang } from '../context/LangContext';
import homeImg from '../assets/home.png';
import appImg from '../assets/5435.png';
import app2Img from '../assets/app_2.jpg';
import app3Img from '../assets/app_3.jpg';
import app4Img from '../assets/app_4.jpg';
import app5Img from '../assets/app_5.jpg';
import app6Img from '../assets/app_6.jpg';
import app7Img from '../assets/app_7.png';
import app8Img from '../assets/app_8.jpg';
import app9Img from '../assets/app_9.jpg';
import downloadBtn from '../assets/download_button.jpg';
import './Products.css';

const keyFeatures = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 8l-4 4-4-4"/>
        <path d="M12 16V8"/>
      </svg>
    ),
    title: 'Zero Transaction Fees',
    description: 'Keep 100% of your revenue. No transaction fees, no monthly fees, no hidden costs.',
    highlight: true
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <circle cx="12" cy="16" r="1"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Non-Custodial Security',
    description: 'You control your private keys and funds. No third-party can freeze or seize your assets.',
    highlight: false
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Self-Hosted Solution',
    description: 'Complete data privacy and independence. Deploy on your own infrastructure.',
    highlight: false
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6"/>
        <path d="M1 12h6m6 0h6"/>
        <path d="M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24"/>
        <path d="M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24"/>
      </svg>
    ),
    title: '20+ Cryptocurrencies',
    description: 'Accept BTC, ETH, USDT, and 17+ other cryptocurrencies including stablecoins.',
    highlight: false
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
        <polyline points="7.5,19.79 7.5,14.6 3,12"/>
        <polyline points="21,12 16.5,14.6 16.5,19.79"/>
      </svg>
    ),
    title: 'AI-Powered Dashboard',
    description: 'Built-in AI assistant for analytics, insights, and natural language queries.',
    highlight: true
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2m0 18v2"/>
        <path d="M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42"/>
        <path d="M1 12h2m18 0h2"/>
        <path d="M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: 'Enhanced Privacy',
    description: 'No KYC/AML requirements. Enhanced privacy for you and your customers.',
    highlight: false
  }
];

const supportedCryptos = [
  { name: 'Bitcoin', symbol: 'BTC', network: 'Layer 1 + Lightning', icon: '₿', color: '#F7931A' },
  { name: 'Ethereum', symbol: 'ETH', network: 'Layer 1', icon: 'Ξ', color: '#627EEA' },
  { name: 'USDT', symbol: 'USDT', network: 'Multi-chain', icon: '₮', color: '#26A17B' },
  { name: 'USDC', symbol: 'USDC', network: 'Multi-chain', icon: '◎', color: '#2775CA' },
  { name: 'Litecoin', symbol: 'LTC', network: 'Layer 1', icon: 'Ł', color: '#345D9D' },
  { name: 'Dogecoin', symbol: 'DOGE', network: 'Layer 1', icon: 'Ð', color: '#BA9F33' },
  { name: 'Monero', symbol: 'XMR', network: 'Privacy', icon: '⬡', color: '#FF6600' },
  { name: 'Solana', symbol: 'SOL', network: 'Layer 1', icon: '◎', color: '#14F195' },
  { name: 'Polygon', symbol: 'MATIC', network: 'Layer 2', icon: '△', color: '#8247E5' },
  { name: 'Optimism', symbol: 'OP', network: 'Layer 2', icon: '◆', color: '#FF0420' },
  { name: 'Avalanche', symbol: 'AVAX', network: 'Layer 1', icon: '▲', color: '#E84142' },
  { name: 'Chainlink', symbol: 'LINK', network: 'Layer 1', icon: '⛓', color: '#375BD2' }
];

const comparisonData = [
  { 
    feature: 'Transaction Fees', 
    bravio: '0%', 
    traditional: '2.9% + $0.30'
  },
  { 
    feature: 'Monthly Fees', 
    bravio: '$0', 
    traditional: '$0-50'
  },
  { 
    feature: 'Settlement Time', 
    bravio: 'Instant', 
    traditional: '2-7 days'
  },
  { 
    feature: 'Chargebacks', 
    bravio: 'Impossible', 
    traditional: 'Common risk'
  },
  { 
    feature: 'Account Freezing', 
    bravio: 'Never', 
    traditional: 'Possible'
  },
  { 
    feature: 'Self-Hosted', 
    bravio: 'Yes', 
    traditional: 'No'
  },
  { 
    feature: 'AI Assistant', 
    bravio: 'Built-in', 
    traditional: 'No'
  }
];

const useCases = [
  {
    title: 'E-Commerce Stores',
    description: 'WooCommerce, Shopify, Magento integration. Accept crypto alongside traditional payments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    image: app2Img
  },
  {
    title: 'SaaS & Subscriptions',
    description: 'Recurring crypto payments with automated billing and webhook notifications.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    image: app3Img
  },
  {
    title: 'Freelancers & Services',
    description: 'Invoice clients in crypto with no chargebacks or payment disputes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    image: app4Img
  },
  {
    title: 'Gaming & Digital Goods',
    description: 'Microtransactions with zero fees and instant payment confirmation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="2" x2="6" y2="6"/>
        <line x1="18" y1="2" x2="18" y2="6"/>
        <line x1="6" y1="18" x2="6" y2="22"/>
        <line x1="18" y1="18" x2="18" y2="22"/>
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M8 10h0m8 0h0"/>
      </svg>
    ),
    image: app5Img
  }
];

export default function Products() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('features');

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = downloadBtn;
    a.download = 'bravio_download.jpg';
    a.click();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('.fade-in');
    targets.forEach(t => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="products-main">
      {/* Floating Download Button */}
      <img 
        src={downloadBtn} 
        alt="Download Bravio" 
        className="products-download-float" 
        onClick={handleDownload} 
      />
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Self-Hosted <br />
              Cryptocurrency <br />
              <span className="gradient-text" style={{whiteSpace: 'nowrap'}}>Payment Gateway</span>
            </h1>
            <p className="products-hero-subtitle">
              Accept crypto payments directly without intermediaries, fees, or third-party dependencies. 
              Complete control over your funds with support for 20+ cryptocurrencies.
            </p>
            <div className="products-hero-stats">
              <div className="stat-item">
                <span className="stat-value">0%</span>
                <span className="stat-label">Transaction Fees</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">20+</span>
                <span className="stat-label">Cryptocurrencies</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">$10M+</span>
                <span className="stat-label">Processed Monthly</span>
              </div>
            </div>
            <div className="products-hero-actions">
              <a href="https://demo.bravio.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Try Live Demo
              </a>
              <Link to="/contact" className="btn btn-outline">
                Get Started
              </Link>
            </div>
          </div>
          <div className="products-hero-visual">
            <img src={homeImg} alt="Bravio Dashboard" className="products-hero-img" />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="products-features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Key Features</span>
            <h2 className="section-title">Why Choose Bravio?</h2>
            <p className="section-subtitle">
              Complete cryptocurrency payment infrastructure that transforms your business
            </p>
          </div>
          <div className="features-grid">
            {keyFeatures.map((feature, index) => (
              <div key={index} className={`feature-card fade-in ${feature.highlight ? 'featured' : ''}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Cryptocurrencies */}
      <section className="products-crypto">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Supported Assets</span>
            <h2 className="section-title">20+ Cryptocurrencies Supported</h2>
            <p className="section-subtitle">
              Accept payments in major cryptocurrencies and stablecoins across multiple networks
            </p>
          </div>
          <div className="crypto-grid">
            {supportedCryptos.map((crypto, index) => (
              <div key={index} className="crypto-card fade-in">
                <div className="crypto-icon" style={{ color: crypto.color, backgroundColor: `${crypto.color}15` }}>{crypto.icon}</div>
                <div className="crypto-info">
                  <span className="crypto-symbol">{crypto.symbol}</span>
                  <span className="crypto-name">{crypto.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="products-comparison">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Comparison</span>
            <h2 className="section-title">Bravio vs Traditional Solutions</h2>
            <p className="section-subtitle">
              See how Bravio compares to traditional payment processors and crypto gateways
            </p>
          </div>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight">Bravio</th>
                  <th>Traditional Solutions</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="feature-name">{row.feature}</td>
                    <td className="bravio-value">{row.bravio}</td>
                    <td className="traditional-value">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="products-use-cases">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Use Cases</span>
            <h2 className="section-title">Perfect for Every Business</h2>
            <p className="section-subtitle">
              From e-commerce to SaaS, Bravio adapts to your business needs
            </p>
          </div>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="use-case-card fade-in">
                <div className="use-case-image">
                  <img src={useCase.image} alt={useCase.title} />
                  <div className="use-case-icon">{useCase.icon}</div>
                </div>
                <div className="use-case-content">
                  <h3 className="use-case-title">{useCase.title}</h3>
                  <p className="use-case-description">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="products-roi">
        <div className="container">
          <div className="roi-content">
            <div className="roi-left">
              <span className="section-tag">ROI Calculator</span>
              <h2 className="section-title">Calculate Your Savings</h2>
              <p className="section-subtitle">
                See how much you can save by switching to Bravio
              </p>
              <div className="roi-example">
                <h3>Example: $50,000/month processing</h3>
                <div className="roi-comparison">
                  <div className="roi-item">
                    <span className="roi-label">Stripe (2.9%)</span>
                    <span className="roi-value">$1,465/month</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">Bravio</span>
                    <span className="roi-value">$50/month*</span>
                  </div>
                  <div className="roi-savings">
                    <span className="savings-label">Annual Savings:</span>
                    <span className="savings-value">$16,980</span>
                  </div>
                </div>
                <p className="roi-note">*Infrastructure costs only</p>
              </div>
            </div>
            <div className="roi-right">
              <img src={app7Img} alt="ROI Visualization" className="roi-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="products-getting-started">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">Deploy in Minutes</h2>
            <p className="section-subtitle">
              Three simple deployment options to get you started quickly
            </p>
          </div>
          <div className="deployment-options">
            <div className="deployment-card">
              <div className="deployment-header">
                <h3>Docker Compose</h3>
                <span className="deployment-time">5 minutes</span>
              </div>
              <p>Perfect for testing and small deployments</p>
              <div className="deployment-code">
                <code>
                  git clone https://github.com/vsys-host/Bravio.git<br/>
                  cd Bravio<br/>
                  docker compose up -d
                </code>
              </div>
            </div>
            <div className="deployment-card featured">
              <div className="deployment-header">
                <h3>Kubernetes/Helm</h3>
                <span className="deployment-time">10 minutes</span>
              </div>
              <p>Production-ready with auto-scaling</p>
              <div className="deployment-code">
                <code>
                  helm repo add vsys-host https://vsys-host.github.io/helm-charts<br/>
                  helm install bravio vsys-host/bravio
                </code>
              </div>
            </div>
            <div className="deployment-card">
              <div className="deployment-header">
                <h3>Cloud Deployment</h3>
                <span className="deployment-time">15 minutes</span>
              </div>
              <p>AWS, GCP, Azure compatible with SSL</p>
              <div className="deployment-code">
                <code>
                  One-click deployment<br/>
                  Automated SSL setup<br/>
                  Scalable architecture
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Payment Processing?</h2>
            <p className="cta-subtitle">
              Join 500+ businesses already using Bravio to accept crypto payments with zero fees
            </p>
            <div className="cta-actions">
              <a href="https://demo.bravio.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                Try Live Demo
              </a>
              <Link to="/contact" className="btn btn-outline btn-large">
                Schedule Consultation
              </Link>
            </div>
            <div className="cta-links">
              <a href="https://github.com/vsys-host/Bravio" target="_blank" rel="noopener noreferrer">
                📚 Documentation
              </a>
              <a href="https://t.me/Bravio_updates" target="_blank" rel="noopener noreferrer">
                💬 Community
              </a>
              <a href="mailto:support@v-sys.org">
                📧 Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
