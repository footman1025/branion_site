import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only form submission
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setPassword('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1>Login to Bravion</h1>
          <p className="auth-subtitle">Access your payment dashboard</p>

          {submitted && <div className="auth-success">Login successful! Redirecting...</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-btn" disabled={submitted}>
              {submitted ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
