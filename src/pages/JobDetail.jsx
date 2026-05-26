import { useParams, Link, Navigate } from 'react-router-dom';
import { openRoles } from './Careers';
import './JobDetail.css';

export default function JobDetail() {
  const { slug } = useParams();
  const role = openRoles.find(r => r.slug === slug);

  if (!role) return <Navigate to="/careers" replace />;

  return (
    <main className="jd-page">

      {/* Back */}
      <div className="jd-back-bar">
        <div className="jd-container">
          <Link to="/careers" className="jd-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Careers
          </Link>
        </div>
      </div>

      <div className="jd-container jd-layout">

        {/* Main content */}
        <div className="jd-main">
          <span className="jd-dept">{role.dept}</span>
          <h1 className="jd-title">{role.title}</h1>
          <div className="jd-badges">
            <span className="jd-badge">{role.type}</span>
            <span className="jd-badge">{role.location}</span>
          </div>

          <p className="jd-summary">{role.summary}</p>

          <div className="jd-section">
            <h2>Responsibilities</h2>
            <ul className="jd-list">
              {role.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="jd-section">
            <h2>Requirements</h2>
            <ul className="jd-list">
              {role.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {role.niceToHave?.length > 0 && (
            <div className="jd-section">
              <h2>Nice to Have</h2>
              <ul className="jd-list jd-list--nice">
                {role.niceToHave.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="jd-sidebar">
          <div className="jd-apply-card">
            <h3>Interested in this role?</h3>
            <p>Send us your CV and a short note about why you'd be a great fit.</p>
            <Link to={`/careers/${role.slug}/apply`} className="jd-apply-btn">Apply Now</Link>
          </div>

          <div className="jd-info-card">
            <div className="jd-info-row">
              <span className="jd-info-label">Department</span>
              <span className="jd-info-value">{role.dept}</span>
            </div>
            <div className="jd-info-row">
              <span className="jd-info-label">Type</span>
              <span className="jd-info-value">{role.type}</span>
            </div>
            <div className="jd-info-row">
              <span className="jd-info-label">Location</span>
              <span className="jd-info-value">{role.location}</span>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
