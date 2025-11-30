import './landing.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/574114808_122142601094899099_9201790541201249079_n.jpg'
import proImg from '../assets/190903111552-01-lamborghini-sian.jpg'
import basicImg from '../assets/images.jpg'
import teamImg from '../assets/gettyimages-2161747835-1.jpg'

export default function Landing3() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState<{ title: string; desc: string } | null>(null)
  return (
    <>
      
      <section id="features" className="landing-section features">
        <div className="container">
          <div className="with-avatar-grid">
            <aside className="avatar-card">
              <img src={hero} alt="Avatar" className="avatar-card__img" />
              <h3 className="avatar-card__name">EFRAIM V. MAYOL</h3>
              <button className="btn follow">Follow</button>
              <div className="avatar-bio">
                <p><strong>EFRAIM V. MAYOL</strong></p>
                <p>LEARNING SKILLS IN</p>
                <ul>
                  <li>WEB DEVELOPER</li>
                  <li>INVESTING MONEY</li>
                </ul>
                <p>TEACHER</p>
                <p>Adriane B. Loquinte</p>
                <p>multiple AI</p>
              </div>
            </aside>
            <div className="section-content">
              <div className="section-head">
                <h2 className="section-title">Features</h2>
                <nav className="landing-menu">
                  <a href="#" className="landing-menu__link">Overview</a>
                  <a href="#features" className="landing-menu__link">Solutions</a>
                  <a href="#pricing" className="landing-menu__link">Investment</a>
                  <a href="#contact" className="landing-menu__link">Reach Us</a>
                </nav>
              </div>
              <div className="features-grid">
                <div className="feature-card">
                  <h3>Smart Scheduling</h3>
                  <p>Auto-prioritize tasks and balance your day with intelligent suggestions.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Smart Scheduling', desc: 'Auto-prioritize tasks and balance your day with intelligent suggestions.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Focus Mode</h3>
                  <p>Block distractions and track deep work sessions effortlessly.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Focus Mode', desc: 'Block distractions and track deep work sessions effortlessly.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Team Sharing</h3>
                  <p>Share plans, assign tasks, and collaborate in real time.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Team Sharing', desc: 'Share plans, assign tasks, and collaborate in real time.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Analytics</h3>
                  <p>Visualize your productivity trends with charts and insights.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Analytics', desc: 'Visualize your productivity trends with charts and insights.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Cloud Sync</h3>
                  <p>Sync your data securely across devices in real time.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Cloud Sync', desc: 'Sync your data securely across devices in real time.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Offline Mode</h3>
                  <p>Keep working without internet and auto-sync later.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Offline Mode', desc: 'Keep working without internet and auto-sync later.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Dark Mode</h3>
                  <p>Reduce eye strain with a beautiful dark theme.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Dark Mode', desc: 'Reduce eye strain with a beautiful dark theme.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Smart Reminders</h3>
                  <p>Get reminded at the right time and place.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Smart Reminders', desc: 'Get reminded at the right time and place.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
                <div className="feature-card">
                  <h3>Integrations</h3>
                  <p>Connect with Google, Slack, and more.</p>
                  <button
                    className="btn view"
                    onClick={() => {
                      setSelected({ title: 'Integrations', desc: 'Connect with Google, Slack, and more.' })
                      setModalOpen(true)
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="landing-section pricing">
        <div className="container">
          <div className="section-content">
              <h2 className="section-title">Model Car</h2>
              
              <div className="features-grid">
                <div className="feature-card">
                  <h3>Basic</h3>
                  <img src={basicImg} alt="Basic plan" className="pricing-img" />
                  <button className="btn">Choose Basic</button>
                </div>
                <div className="feature-card">
                  <h3>Pro</h3>
                  <img src={proImg} alt="Pro plan" className="pricing-img" />
                  <button className="btn view">Choose Pro</button>
                </div>
                <div className="feature-card">
                  <h3>Team</h3>
                  <img src={teamImg} alt="Team plan" className="pricing-img" />
                  <button className="btn">Choose Team</button>
                </div>
              </div>
              <div style={{textAlign:'center', marginTop:'1rem'}}>
                <Link to="/pricing" className="btn view">Open full pricing page</Link>
              </div>
          </div>
        </div>
      </section>
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selected?.title}</h3>
            <p>{selected?.desc}</p>
            <button className="btn close" onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

