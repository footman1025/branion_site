import { Link } from 'react-router-dom';
import './AIRecommendations.css';
import landingService2 from '../assets/landing_service_2.png';

export default function AIRecommendations() {
  return (
    <main className="ai-recommendations-page">
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="ai-hero-right">
          <img loading="lazy" src={landingService2}
            alt="AI Recommendations"
            className="ai-hero-img"
          />
        </div>
      </section>

      {/* What We Deliver */}
      <section className="ai-deliver-section">
        <div className="ai-container">
          <div className="ai-deliver-grid">
            <div className="ai-deliver-left">
              <span className="ai-section-tag">WHAT WE DELIVER</span>
              <h2>Intelligent recommendations that drive revenue</h2>
              <p>Our AI recommendation engine learns from real customer behavior to surface the most relevant products automatically, at scale, without manual curation.</p>
            </div>
            
            <div className="ai-deliver-right">
              <div className="ai-benefit-card">
                <div className="ai-benefit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                </div>
                <div className="ai-benefit-content">
                  <h3>Higher conversions</h3>
                  <p>Show customers exactly what they want before they search for it.</p>
                </div>
                <span className="ai-benefit-num">01</span>
              </div>

              <div className="ai-benefit-card">
                <div className="ai-benefit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className="ai-benefit-content">
                  <h3>Increased order value</h3>
                  <p>Bundle suggestions and upsells that feel natural, not pushy.</p>
                </div>
                <span className="ai-benefit-num">02</span>
              </div>

              <div className="ai-benefit-card">
                <div className="ai-benefit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                </div>
                <div className="ai-benefit-content">
                  <h3>Smarter experience</h3>
                  <p>Every visit feels personal — customers come back because it just works.</p>
                </div>
                <span className="ai-benefit-num">03</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="ai-how-section">
        <div className="ai-container">
          <span className="ai-section-tag">HOW IT WORKS</span>
          <h2>Real-time personalization at scale</h2>
          
          <div className="ai-how-grid">
            <div className="ai-how-card">
              <div className="ai-how-number">01</div>
              <h3>Collect behavioral data</h3>
              <p>Track user interactions, purchase history, browsing patterns, and preferences in real-time.</p>
            </div>

            <div className="ai-how-card">
              <div className="ai-how-number">02</div>
              <h3>Train ML models</h3>
              <p>Our algorithms learn from millions of data points to identify patterns and predict preferences.</p>
            </div>

            <div className="ai-how-card">
              <div className="ai-how-number">03</div>
              <h3>Generate recommendations</h3>
              <p>Deliver personalized product suggestions across your store in milliseconds.</p>
            </div>

            <div className="ai-how-card">
              <div className="ai-how-number">04</div>
              <h3>Optimize continuously</h3>
              <p>A/B test recommendations and refine models based on real conversion data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta-section">
        <div className="ai-container">
          <h2>Ready to boost your conversion rate with AI?</h2>
          <p>Get a free consultation with our AI specialists to see how recommendations can transform your business.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </main>
  );
}
