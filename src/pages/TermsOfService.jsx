import { Link } from 'react-router-dom';
import './TermsOfService.css';

export default function TermsOfService() {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: May 2026</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using this website and our cryptocurrency payment gateway services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Bravion's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Bravion's website are provided on an 'as is' basis. Bravion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Limitations</h2>
            <p>
              In no event shall Bravion or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Bravion's website, even if Bravion or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Bravion's website could include technical, typographical, or photographic errors. Bravion does not warrant that any of the materials on its website are accurate, complete, or current. Bravion may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Links</h2>
            <p>
              Bravion has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Bravion of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Modifications</h2>
            <p>
              Bravion may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Bravion operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
