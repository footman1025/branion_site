import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';
import SEO from '../components/SEO';
import pricingBg from '../assets/pricing.jpg';

const pricingPlans = [
  {
    name: 'Starter',
    monthlyPrice: '$0',
    annualPrice: '$0',
    period: 'Forever',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to $10K monthly volume',
      '5 cryptocurrencies',
      'Basic dashboard',
      'Email support',
      'Standard API access',
      'Basic webhooks'
    ],
    highlighted: true,
    buttonText: 'Get Started Free',
    buttonClass: 'btn-primary'
  },
  {
    name: 'Professional',
    monthlyPrice: '$99',
    annualPrice: '$82',
    period: 'per month',
    annualPeriod: 'per month, billed annually',
    description: 'Ideal for growing businesses',
    features: [
      'Up to $100K monthly volume',
      '15+ cryptocurrencies',
      'Advanced dashboard',
      'Priority support',
      'Full API access',
      'Advanced webhooks',
      'Custom integrations',
      'Multi-user access'
    ],
    highlighted: false,
    buttonText: 'Start Free Trial',
    buttonClass: 'btn-outline'
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    period: 'Contact us',
    description: 'For large-scale operations',
    features: [
      'Unlimited volume',
      'All cryptocurrencies',
      'White-label solution',
      'Dedicated support',
      'Custom development',
      'SLA guarantee',
      'On-premise deployment',
      'Advanced security'
    ],
    highlighted: false,
    buttonText: 'Contact Sales',
    buttonClass: 'btn-outline'
  }
];

const faqs = [
  {
    question: 'Is DefiGate really free?',
    answer: 'Yes! DefiGate is completely free and open-source. You only pay for your infrastructure costs (server hosting). There are no transaction fees, monthly fees, or hidden costs.'
  },
  {
    question: 'What cryptocurrencies are supported?',
    answer: 'DefiGate supports 20+ cryptocurrencies including Bitcoin, Ethereum, USDT, USDC, Litecoin, Dogecoin, Monero, Solana, Polygon, and many more across multiple networks.'
  },
  {
    question: 'Do I need technical knowledge to set up DefiGate?',
    answer: 'Basic technical knowledge is helpful, but we provide comprehensive documentation and Docker setup that can get you running in 5-10 minutes. Our community is also very helpful for support.'
  },
  {
    question: 'Can I customize DefiGate for my needs?',
    answer: 'Absolutely! DefiGate is open-source, so you can modify and customize it however you need. We also offer professional services for custom development.'
  },
  {
    question: 'What about security and compliance?',
    answer: 'DefiGate is non-custodial, meaning you control your private keys and funds. The code is open-source and auditable. You can implement your own compliance measures as needed.'
  },
  {
    question: 'How does support work?',
    answer: 'We offer community support through GitHub, Telegram, and Reddit. Professional and Enterprise plans include priority support with faster response times.'
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="pricing-main">
      <SEO
        title="Pricing"
        description="Simple, transparent pricing for blockchain and Web3 development. Choose the plan that fits your business needs with no hidden fees."
        path="/pricing"
      />
      {/* Hero Section */}
      <section className="pricing-hero" style={{backgroundImage: `url(${pricingBg})`}}>
        <div className="pricing-hero-overlay">
          <div className="container">
            <div className="pricing-hero-content">
              <span className="section-tag">Pricing</span>
              <h1 className="pricing-hero-title">
                Simple, Transparent Pricing
              </h1>
              <p className="pricing-hero-subtitle">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards-section">
        <div className="container">
          {/* Billing Toggle */}
          <div className="billing-toggle-wrapper">
            <div className="billing-toggle">
              <span className={`billing-option ${billingCycle === 'monthly' ? 'active' : ''}`}>
                Monthly
              </span>
              <button 
                className="toggle-switch"
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                aria-label="Toggle billing cycle"
              >
                <div className={`toggle-slider ${billingCycle === 'annual' ? 'annual' : ''}`} />
              </button>
              <span className={`billing-option ${billingCycle === 'annual' ? 'active' : ''}`}>
                Annually
              </span>
              {billingCycle === 'annual' && (
                <span className="save-badge">Save 17%</span>
              )}
            </div>
          </div>

          <div className="pricing-cards-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                {plan.highlighted && (
                  <div className="pricing-badge">Most Popular</div>
                )}
                <div className="pricing-card-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="period">
                      /{billingCycle === 'monthly' ? plan.period : (plan.annualPeriod || plan.period)}
                    </span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>
                <div className="pricing-card-body">
                  <ul className="features-list">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <svg className="feature-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-card-footer">
                  <Link 
                    to="/contact" 
                    className={`btn ${plan.buttonClass} btn-full-width`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="cost-comparison">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Cost Comparison</span>
            <h2 className="section-title">See How Much You Can Save</h2>
            <p className="section-subtitle">
              Compare DefiGate with traditional payment processors and see your potential savings
            </p>
          </div>
          
          <div className="comparison-calculator">
            <div className="calculator-input">
              <label>Monthly Transaction Volume</label>
              <select className="volume-select">
                <option value="10000">$10,000</option>
                <option value="50000">$50,000</option>
                <option value="100000">$100,000</option>
                <option value="500000">$500,000</option>
                <option value="1000000">$1,000,000</option>
              </select>
            </div>
            
            <div className="savings-grid">
              <div className="savings-card">
                <h4>Traditional Processors</h4>
                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span>Transaction Fees (2.9%)</span>
                    <span>$2,900</span>
                  </div>
                  <div className="cost-item">
                    <span>Monthly Fees</span>
                    <span>$30</span>
                  </div>
                  <div className="cost-total">
                    <span>Total Monthly Cost</span>
                    <span>$2,930</span>
                  </div>
                </div>
              </div>
              
              <div className="savings-card highlighted">
                <h4>DefiGate</h4>
                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span>Transaction Fees</span>
                    <span>$0</span>
                  </div>
                  <div className="cost-item">
                    <span>Infrastructure</span>
                    <span>$50</span>
                  </div>
                  <div className="cost-total">
                    <span>Total Monthly Cost</span>
                    <span>$50</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="savings-summary">
              <div className="savings-amount">
                <span className="savings-label">Monthly Savings</span>
                <span className="savings-value">$2,880</span>
              </div>
              <div className="savings-amount">
                <span className="savings-label">Annual Savings</span>
                <span className="savings-value">$34,560</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about DefiGate pricing and features
            </p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <svg className="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Join thousands of businesses already using DefiGate to accept crypto payments with zero fees
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Free Trial
              </Link>
              <a href="https://demo.DefiGate.org" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-large">
                Try Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
