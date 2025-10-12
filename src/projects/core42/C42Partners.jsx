import { useState } from "react"
import { Link } from "react-router-dom"
import CoreIcon from "../../assets/core-icon.svg"
import CoreLogoText from "../../assets/core42-text.svg"
import CorePartnersFrame from "../../assets/core-our-partners.svg"
import CoreContact from "../../assets/core-contact.svg"
import CoreBack from "../../assets/core-back.svg"
import PartnerWWT from "../../assets/wwt.svg"
import PartnerAMD from "../../assets/AMD_Logo.svg"
import PartnerRedHat from "../../assets/redhat.svg"
import PartnerNvidia from "../../assets/nvidia.svg"
import PartnerSoftServe from "../../assets/softserve.svg"
import PartnerInveniam from "../../assets/Inveniam.svg"
import PartnerAirev from "../../assets/Airev.svg"

const partnerTiles = [
  // { title: "World Wide Technology", logo: PartnerWWT },
  { title: "AMD", logo: PartnerAMD },
  // { title: "Red Hat", logo: PartnerRedHat },
  { title: "NVIDIA", logo: PartnerNvidia },
  { title: "softserve", logo: PartnerSoftServe },
  { title: "Inveniam", logo: PartnerInveniam },
  { title: "Airev", logo: PartnerAirev },
]

const primaryActions = [
  {
    id: "contact",
    label: "Contact us",
    to: "/projects/core42/contact",
    image: CoreContact,
  },
  {
    id: "back",
    label: "Back",
    to: "/projects/core42/info",
    image: CoreBack,
  },
]

const C42Partners = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen((prev) => !prev)

  return (
    <main className="c42-info c42-partners min-vh-100 py-5 d-flex flex-column align-items-center">
            <header className="d-flex flex-column w-100 flex-lg-row align-items-center gap-4 text-white justify-content-between header-spacing">
              <div className="text-center text-lg-start">
                <img src={CoreLogoText} alt="Core 42" className="img-fluid mb-3" />
              </div>
              <img src={CoreIcon} alt="Core 42 icon" className="c42-info__icon" />
            </header>
      <div className="container d-flex flex-column align-items-center justify-content-between h-products-100">

        <section className="c42-partners__hero text-center">
          <h1 className="c42-partners__title">Our Partners</h1>
        </section>

        <section className="c42-partners__grid">
          {partnerTiles.map((partner) => (
            <div key={partner.title} className="c42-partners__tile">
              <img src={CorePartnersFrame} alt="" aria-hidden="true" />
              <img src={partner.logo} alt={partner.title} className="c42-partners__logo" />
            </div>
          ))}
        </section>

        <footer className="c42-info__actions">
          {primaryActions.map((action) => (
            <Link key={action.id} className="c42-info__action" to={action.to}>
              <img src={action.image} alt={action.label} className="c42-info__action-image" />
            </Link>
          ))}
        </footer>
      </div>

         <button
           type="button"
           className={`bg-transparent border-0 c42-info__nav-toggle${navOpen ? " is-active" : ""}`}
           aria-label="Toggle section navigation"
           aria-expanded={navOpen}
           onClick={toggleNav}
         >
           <span />
           <span />
         </button>
   
      <nav className={`c42-info__nav${navOpen ? " is-open" : ""}`}>
        <ul className="nav flex-column">
          {partnerTiles.map((section) => (
            <li key={section.id} className="nav-item">
              <a className="nav-link" href={`#${section.id}`} onClick={() => setNavOpen(false)}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

export default C42Partners




