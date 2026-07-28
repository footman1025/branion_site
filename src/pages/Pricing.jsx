import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import './Pricing.css';
import SEO from '../components/SEO';
import pricingBg from '../assets/pricing.jpg';

const VOLUME_OPTIONS = [
  { value: 10000, label: '$10K' },
  { value: 50000, label: '$50K' },
  { value: 100000, label: '$100K' },
  { value: 500000, label: '$500K' },
  { value: 1000000, label: '$1M' },
];

const formatUsd = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function Pricing() {
  const { t } = useLang();
  const p = t.pricing;

  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);
  const [volume, setVolume] = useState(10000);

  const traditionalFees = Math.round(volume * 0.029);
  const traditionalMonthly = 30;
  const traditionalTotal = traditionalFees + traditionalMonthly;
  const defigateInfra = 50;
  const defigateTotal = defigateInfra;
  const monthlySavings = traditionalTotal - defigateTotal;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / traditionalTotal) * 100);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="pricing-main">
      <SEO
        title={p.seoTitle}
        description={p.seoDescription}
        path="/pricing"
      />
      {/* Hero Section */}
      <section className="pricing-hero" style={{backgroundImage: `url(${pricingBg})`}}>
        <div className="pricing-hero-overlay">
          <div className="container">
            <div className="pricing-hero-content">
              <span className="section-tag">{p.heroTag}</span>
              <h1 className="pricing-hero-title">
                {p.heroTitle}
              </h1>
              <p className="pricing-hero-subtitle">
                {p.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards-section">
        <div className="pricing-atmosphere" aria-hidden="true" />
        <div className="container">
          <div className="pricing-section-header">
            <span className="pricing-section-tag">{p.plansTag}</span>
            <h2 className="pricing-section-title">{p.plansTitle}</h2>
            <p className="pricing-section-sub">
              {p.plansSubtitle}
            </p>
          </div>

          <div className="billing-toggle-wrapper">
            <div className="billing-toggle" role="group" aria-label="Billing cycle">
              <button
                type="button"
                className={`billing-option ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                {p.billingMonthly}
              </button>
              <button
                type="button"
                className={`billing-option ${billingCycle === 'annual' ? 'active' : ''}`}
                onClick={() => setBillingCycle('annual')}
              >
                {p.billingAnnual}
                <span className="save-badge">{p.saveBadge}</span>
              </button>
            </div>
          </div>

          <div className="pricing-cards-grid">
            {p.plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                style={{ '--plan-delay': `${index * 80}ms` }}
              >
                {plan.highlighted && (
                  <div className="pricing-badge">{p.mostPopular}</div>
                )}
                <div className="pricing-card-header">
                  <div className="plan-topline">
                    <h3 className="plan-name">{plan.name}</h3>
                    <span className="plan-index">0{index + 1}</span>
                  </div>
                  <div className="plan-price">
                    <span className="price" key={`${plan.name}-${billingCycle}`}>
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
                    {plan.features.map((feature) => (
                      <li key={feature} className="feature-item">
                        <span className="feature-check" aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-card-footer">
                  <Link
                    to="/contact"
                    className={`pricing-plan-cta ${plan.highlighted ? 'is-primary' : 'is-outline'}`}
                  >
                    {plan.buttonText}
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="cost-comparison">
        <div className="cost-atmosphere" aria-hidden="true" />
        <div className="container">
          <div className="cost-header">
            <span className="cost-tag">{p.costTag}</span>
            <h2 className="cost-title">{p.costTitle}</h2>
            <p className="cost-subtitle">
              {p.costSubtitle}
            </p>
          </div>

          <div className="comparison-calculator">
            <div className="calculator-input">
              <div className="volume-label-row">
                <label htmlFor="volume-slider">{p.volumeLabel}</label>
                <span className="volume-current" key={volume}>{formatUsd(volume)}</span>
              </div>
              <div className="volume-chips" role="group" aria-label="Select monthly volume">
                {VOLUME_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`volume-chip ${volume === opt.value ? 'is-active' : ''}`}
                    onClick={() => setVolume(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <input
                id="volume-slider"
                type="range"
                className="volume-slider"
                min={0}
                max={VOLUME_OPTIONS.length - 1}
                step={1}
                value={VOLUME_OPTIONS.findIndex((o) => o.value === volume)}
                onChange={(e) => setVolume(VOLUME_OPTIONS[Number(e.target.value)].value)}
                aria-valuetext={formatUsd(volume)}
              />
            </div>

            <div className="savings-grid">
              <div className="savings-card">
                <div className="savings-card-top">
                  <span className="savings-card-label">{p.legacyLabel}</span>
                  <h4>{p.legacyTitle}</h4>
                </div>
                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span>{p.transactionFeesLabel}</span>
                    <span key={`tf-${volume}`}>{formatUsd(traditionalFees)}</span>
                  </div>
                  <div className="cost-item">
                    <span>{p.monthlyFeesLabel}</span>
                    <span>{formatUsd(traditionalMonthly)}</span>
                  </div>
                  <div className="cost-total">
                    <span>{p.totalMonthlyLabel}</span>
                    <span key={`tt-${volume}`}>{formatUsd(traditionalTotal)}</span>
                  </div>
                </div>
              </div>

              <div className="savings-vs" aria-hidden="true">VS</div>

              <div className="savings-card highlighted">
                <div className="savings-card-top">
                  <span className="savings-card-label is-accent">{p.recommendedLabel}</span>
                  <h4>{p.defigateTitle}</h4>
                </div>
                <div className="cost-breakdown">
                  <div className="cost-item">
                    <span>{p.zeroFeesLabel}</span>
                    <span className="is-zero">$0</span>
                  </div>
                  <div className="cost-item">
                    <span>{p.infrastructureLabel}</span>
                    <span>{formatUsd(defigateInfra)}</span>
                  </div>
                  <div className="cost-total">
                    <span>{p.totalMonthlyLabel}</span>
                    <span>{formatUsd(defigateTotal)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="savings-summary">
              <div className="savings-amount">
                <span className="savings-label">{p.monthlySavingsLabel}</span>
                <span className="savings-value" key={`ms-${volume}`}>{formatUsd(monthlySavings)}</span>
              </div>
              <div className="savings-divider" aria-hidden="true" />
              <div className="savings-amount">
                <span className="savings-label">{p.annualSavingsLabel}</span>
                <span className="savings-value" key={`as-${volume}`}>{formatUsd(annualSavings)}</span>
              </div>
              <div className="savings-pct" key={`pct-${volume}`}>
                {p.savePercent.replace('{percent}', savingsPercent)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{p.faqTag}</span>
            <h2 className="section-title">{p.faqTitle}</h2>
            <p className="section-subtitle">
              {p.faqSubtitle}
            </p>
          </div>
          
          <div className="faq-list">
            {p.faqs.map((faq, index) => (
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
        <div className="pricing-cta-glow" aria-hidden="true" />
        <div className="container pricing-cta-inner">
          <p className="pricing-cta-brand">DefiGate</p>
          <h2 className="pricing-cta-title">{p.ctaTitle}</h2>
          <p className="pricing-cta-sub">{p.ctaSubtitle}</p>
          <div className="pricing-cta-actions">
            <Link to="/contact" className="pricing-cta-btn pricing-cta-btn-primary">
              {p.ctaPrimary}
            </Link>
            <a
              href="https://demo.DefiGate.org"
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-cta-btn pricing-cta-btn-ghost"
            >
              {p.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
