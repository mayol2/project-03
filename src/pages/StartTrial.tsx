import './StartTrial.css';

export default function StartTrial() {
  return (
    <section className="trial-page">
      <div className="trial-card">
        <header className="trial-header">
          <h1>Start Your Free Trial</h1>
          <p>Tell us a little about your business so we can tailor your experience.</p>
        </header>
        <form className="trial-form" onSubmit={(e) => e.preventDefault()}>
          <div className="trial-grid">
            <label className="trial-field">
              <span>Full name</span>
              <input type="text" placeholder="Alex Morgan" required />
            </label>
            <label className="trial-field">
              <span>Work email</span>
              <input type="email" placeholder="you@company.com" required />
            </label>
          </div>
          <label className="trial-field">
            <span>Company name</span>
            <input type="text" placeholder="Your business" required />
          </label>
          <label className="trial-field">
            <span>Team size</span>
            <select defaultValue="">
              <option value="" disabled>Select team size</option>
              <option value="1-5">1-5 people</option>
              <option value="6-20">6-20 people</option>
              <option value="21-50">21-50 people</option>
              <option value="51-200">51-200 people</option>
              <option value="200+">200+ people</option>
            </select>
          </label>
          <label className="trial-field">
            <span>What do you want to improve?</span>
            <textarea rows={3} placeholder="Share your goals: budgeting, planning, automation, reporting..." />
          </label>
          <button type="submit" className="trial-submit">Create trial workspace</button>
          <p className="trial-note">No credit card required • 14-day free trial • Cancel anytime</p>
        </form>
      </div>
    </section>
  )
}
