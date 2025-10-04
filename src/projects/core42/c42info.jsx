import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import CoreIcon from "../../assets/core-icon.svg"
import CoreLogoText from "../../assets/core42-text.svg"
import CoreProducts from "../../assets/core-our-products.svg"
import CorePartners from "../../assets/core-our-partners.svg"
import CoreBrand from "../../assets/core-our-brand.svg"
import CoreContact from "../../assets/core-contact.svg"
import CoreBack from "../../assets/core-back.svg"

const infoSections = [
  {
    id: "brand",
    title: "Our Brand",
    frame: CoreBrand,
    route: "/projects/core42/brand",
  },
  {
    id: "products",
    title: "Our Products",
    frame: CoreProducts,
    route: "/projects/core42/products",
  },
  {
    id: "partners",
    title: "Our Partners",
    frame: CorePartners,
    route: "/projects/core42/partners",
  },
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
    label: "Back to Core 42 home",
    to: "/projects/core42",
    image: CoreBack,
  },
]

const C42Info = () => {
  const [navOpen, setNavOpen] = useState(false)
  const navigate = useNavigate()

  const toggleNav = () => setNavOpen((prev) => !prev)

  const handleTileKeyDown = (event, route) => {
    if (!route) return
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      navigate(route)
    }
  }

  return (
    <main className="c42-info min-vh-100 py-5 d-flex flex-column justify-content-space-between align-items-center">
      <header className="d-flex flex-column w-100 flex-lg-row align-items-center gap-4 text-white justify-content-between header-spacing">
        <div className="text-center text-lg-start">
          <img src={CoreLogoText} alt="Core 42" className="img-fluid mb-3" />
        </div>
        <img src={CoreIcon} alt="Core 42 icon" className="c42-info__icon" />
      </header>

      <div className="container d-flex flex-column justify-content-end align-items-center h-info-100">
        <div className="d-flex flex-column gap-5">
          <section className="c42-info__tiles d-flex">
            {infoSections.map((section) => {
              const isInteractive = Boolean(section.route)

              return (
                <article
                  key={section.id}
                  id={section.id}
                  className={`c42-info__tile${isInteractive ? " c42-info__tile--link" : ""}`}
                  onClick={isInteractive ? () => navigate(section.route) : undefined}
                  onKeyDown={isInteractive ? (event) => handleTileKeyDown(event, section.route) : undefined}
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                >
                  <div className="c42-info__tile-frame" aria-hidden="true">
                    <img src={section.frame} alt="" className="c42-info__tile-image" />
              <h2 className="c42-info__tile-title">{section.title}</h2>
                  </div>
                </article>
              )
            })}
          </section>
        </div>

        <footer className="c42-info__actions">
          {primaryActions.map((action) => (
            <Link key={action.id} className="c42-info__action" to={action.to} onClick={() => setNavOpen(false)}>
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
          {infoSections.map((section) => (
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

export default C42Info






