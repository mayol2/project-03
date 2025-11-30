import { Link } from 'react-router-dom'

export default function AppContent() {
  return (
    <div className="app-page">
      <div className="app-hero-content">
        <div className="hero">
          <h1>Creativity,Independent<br/>Make a Businesss</h1>
        </div>
        <h5>Solutions for the modern business.</h5>
        <div className="card">
          <Link to="/start-trial">
            <button>Start free trial</button>
          </Link>
        </div>
        <p className="read-the-docs">
          Excellence Focus Resilience Innovate Achieve Resolve Empower Thrive Commitment
          Progress Precision Optimize Vision Integrity Aspire
        </p>
      </div>
    </div>
  )
}
