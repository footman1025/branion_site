import { Link } from 'react-router-dom';
import './CookiePolicy.css';

export default function CookiePolicy() {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <h1>Cookie Policy</h1>
          <p className="last-updated">Last updated: May 2026</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small files of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Authentication:</strong> To keep you logged in to your account</li>
              <li><strong>Preferences:</strong> To remember your preferences and settings</li>
              <li><strong>Analytics:</strong> To understand how you use our website and improve our services</li>
              <li><strong>Security:</strong> To protect against fraud and enhance security</li>
              <li><strong>Performance:</strong> To optimize website performance and load times</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Types of Cookies We Use</h2>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functional Cookies:</strong> Remember your choices and preferences</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver relevant content and advertisements</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Third-Party Cookies</h2>
            <p>
              Some cookies may be placed by third-party service providers who perform services on our behalf, such as analytics providers and advertising partners. These third parties may use cookies to track your online activities across different websites.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can choose to accept or reject cookies, or be notified when a cookie is being sent. If you choose to reject cookies, you may not be able to use all the features of our website.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> support@Bravion.com<br />
              <strong>Address:</strong> Bravion LLC, Cryptocurrency Payment Solutions
            </p>
          </section>
        </div>

        <div className="policy-footer">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
