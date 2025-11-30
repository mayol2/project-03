import './landing.css'
import valuesHero from '../assets/650ae932274978947a6d9010_core-values-featured.webp'

export default function Values() {
  return (
    <section className="values-page">
      <div className="values-search">
        <input
          type="text"
          placeholder="Search values..."
          className="values-search__input"
        />
      </div>

      <header className="values-header">
        <h1>Values That Build Strong, Resilient Business.</h1>
        <p>
          We believe long–term success comes from the inside out. Clear values guide every
          decision, every product, and every partnership.
        </p>
      </header>

      <div className="values-grid">
        <article className="value-card">
          <div className="value-card__icon">💡</div>
          <h2 className="value-card__title">Lead with Integrity</h2>
          <p className="value-card__body">
            We keep our word, act transparently, and do the right thing even
            when no one is watching.
          </p>
        </article>

        <article className="value-card">
          <div className="value-card__icon">⚡</div>
          <h2 className="value-card__title">Create with Innovation</h2>
          <p className="value-card__body">
            We explore bold ideas, learn quickly from feedback, and turn
            insights into better experiences.
          </p>
        </article>

        <article className="value-card">
          <div className="value-card__icon">🤝</div>
          <h2 className="value-card__title">Serve with Focus</h2>
          <p className="value-card__body">
            We listen deeply to customers, understand real challenges, and
            deliver solutions that create lasting impact.
          </p>
        </article>
      </div>

      <div className="values-illustration">
        <img src={valuesHero} alt="Illustration of core values and ideas" />
      </div>
    </section>
  )
}
