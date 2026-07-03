import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: May 2026</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              DefiGate ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our cryptocurrency payment gateway services.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide voluntarily</li>
              <li><strong>Payment Information:</strong> Cryptocurrency wallet addresses and transaction data</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data</li>
              <li><strong>Cookies:</strong> Information stored through cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
              <li>Process your transactions and send related information</li>
              <li>Email you regarding your account or order</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to our services</li>
              <li>Generate a personal profile about you so that future visits to the Site will be personalized</li>
              <li>Increase the efficiency and operation of the Site</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If required by law or if we believe in good faith that disclosure is necessary</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
              <li><strong>Business Transfers:</strong> If DefiGate is involved in a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> support@DefiGate.com<br />
              <strong>Address:</strong> DefiGate LLC, Cryptocurrency Payment Solutions
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
