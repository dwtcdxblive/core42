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
          <Link className="dda-secondary-btn" to="smartemployee">
            View SmartEmployee Journey
          </Link>
          <Link className="dda-secondary-btn" to="agents-suite">
            Explore Agents Suite
          </Link>
          <Link className="dda-secondary-btn" to="trade">
            View Trade Showcase
          </Link>
           <Link className="dda-secondary-btn" to="build">
            View build Showcase
          </Link>
             <Link className="dda-secondary-btn" to="justice">
            View justice Showcase
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
