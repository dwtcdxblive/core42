import { Link } from "react-router-dom"

const DDALanding = () => {
  return (
    <main className="dda-page">
      <section className="dda-card">
        <header className="dda-header">
          <p className="dda-kicker">Digital Defense Architecture</p>
          <h1>Activation Toolkit</h1>
          <p className="dda-subtext">
            Launch test journeys, validate integrations, and confirm deep links across the DDA mobile footprint.
          </p>
        </header>

        <div className="dda-actions">
          <Link className="dda-primary-btn" to="linking">
            Open Linking Test Page
          </Link>
          <a className="dda-secondary-btn" href="https://prod.shail.ae/wv/linking/" target="_blank" rel="noreferrer">
            View Production Reference
          </a>
        </div>
      </section>
    </main>
  )
}

export default DDALanding
