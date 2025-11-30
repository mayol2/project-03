import './Pricing.css'

export default function Pricing() {
  return (
    <section className="landing-section">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Basic</h3>
            <p style={{fontSize: '1.75rem', fontWeight: 700, margin: '0.25rem 0'}}>Free</p>
            <ul style={{paddingLeft: '1rem', margin: '0.5rem 0 1rem'}}>
              <li>Up to 3 projects</li>
              <li>Basic scheduling</li>
              <li>Community support</li>
            </ul>
            <button className="btn">Get Started</button>
          </div>

          <div className="feature-card" style={{borderColor:'#4338ca55', boxShadow:'0 12px 32px rgba(67,56,202,0.12)'}}>
            <h3>Pro</h3>
            <p style={{fontSize: '1.75rem', fontWeight: 700, margin: '0.25rem 0'}}>$9/mo</p>
            <ul style={{paddingLeft: '1rem', margin: '0.5rem 0 1rem'}}>
              <li>Unlimited projects</li>
              <li>Focus mode</li>
              <li>Email support</li>
            </ul>
            <button className="btn view">Upgrade</button>
          </div>

          <div className="feature-card">
            <h3>Team</h3>
            <p style={{fontSize: '1.75rem', fontWeight: 700, margin: '0.25rem 0'}}>$29/mo</p>
            <ul style={{paddingLeft: '1rem', margin: '0.5rem 0 1rem'}}>
              <li>All Pro features</li>
              <li>Team sharing</li>
              <li>Priority support</li>
            </ul>
            <button className="btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
