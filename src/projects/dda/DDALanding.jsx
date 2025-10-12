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
          <Link className="dda-secondary-btn" to="sourcinagent">
            View Sourcing Agents
          </Link>
     
       <Link className="dda-secondary-btn" to="productcopilot">
            View PRODUCT COPILOT & AI COMMITTEE
          </Link>
           <Link className="dda-secondary-btn" to="recruitment">
            View RECRUITMENT AGENTS
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
          <Link className="dda-secondary-btn" to="codai">
            Open CODAI Experience
          </Link>
          <Link className="dda-secondary-btn" to="ai-sampling">
            Open AI Sampling Experience
          </Link>
          <Link className="dda-secondary-btn" to="dubai-population">
            Open Dubai Population Experience
          </Link>
          <Link className="dda-secondary-btn" to="data-statistics">
            Open Data Statistics Experience
          </Link>
          <Link className="dda-secondary-btn" to="data-marketplace">
            Open Data Marketplace Experience
          </Link>
          <a className="dda-secondary-btn" href="https://prod.shail.ae/wv/linking/" target="_blank" rel="noreferrer">
            View Production Reference
          </a>
          <Link className="dda-secondary-btn" to="dubai-now">
            View Dubai Now
          </Link>
          <Link className="dda-secondary-btn" to="dubai-transport">
            View Dubai Transport
          </Link>
             <Link className="dda-secondary-btn" to="investDubai">
            View Dubai Invest
          </Link>
             <Link className="dda-secondary-btn" to="dubai-Infostructure">
            View Dubai Infrastructure
          </Link>
          
             <Link className="dda-secondary-btn" to="tourismDubai">
            View  Tourism Dubai
          </Link>
             <Link className="dda-secondary-btn" to="justiceDubai">
            View  justice Dubai
          </Link>
             <Link className="dda-secondary-btn" to="buildDubai">
            View  build in  Dubai
          </Link>
               <Link className="dda-secondary-btn" to="UAEPass">
            View  UAEPass
          </Link>
      

          <Link className="dda-secondary-btn" to="TourismDubaiBG">
            View  TourismDubaiBG
          </Link>
              <Link className="dda-secondary-btn" to="AicomiteeBg">
            View  AicomiteeBg
          </Link>
              <Link className="dda-secondary-btn" to="CoPilotBg">
            View  CoPilotBg
          </Link>
              <Link className="dda-secondary-btn" to="InfrostructureBg">
            View  InfrostructureBg
          </Link>
                  <Link className="dda-secondary-btn" to="AiAgentBg">
            View  AiAgentBg
          </Link>
        </div>
      </section>
    </main>
  )
}

export default DDALanding
