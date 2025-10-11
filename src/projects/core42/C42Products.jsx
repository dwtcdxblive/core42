import { useState } from "react"
import { Link } from "react-router-dom"
import CoreIcon from "../../assets/core-icon.svg"
import CoreLogoText from "../../assets/core42-text.svg"
import CoreProductsFrame from "../../assets/core-our-products.svg"
import CoreContact from "../../assets/core-contact.svg"
import CoreBack from "../../assets/core-back.svg"

const productTiles = [
  { title: "Compass", route: "/projects/core42/products/compass" },
  { title: "AI Cloud", route: "/projects/core42/products/ai-cloud" },
  { title: "Sovereign Public Cloud", route: "/projects/core42/products/sovereign-cloud" },
  { title: "Signature Private Cloud", route: "/projects/core42/products/signature-cloud" },
  { title: "Co-location", route: "/projects/core42/products/co-location" },
  { title: "Signature Fusion Cloud", route: "/projects/core42/products/oracle-fusion" },
  { title: "Cloud & AI Delivery Services", route: "/projects/core42/products/delivery-services" },
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

const C42Products = () => {
  const [navOpen, setNavOpen] = useState(false)

  const topRowTiles = productTiles.slice(0, 3)
  const bottomRowTiles = productTiles.slice(3)

  const renderTile = (tile) => {
    const tileContent = (
      <>
        <img src={CoreProductsFrame} alt="" aria-hidden="true" />
        <span>{tile.title}</span>
      </>
    )

    if (tile.route) {
      return (
        <Link key={tile.title} to={tile.route} className="c42-products__tile c42-products__tile--link">
          {tileContent}
        </Link>
      )
    }

    return (
      <div key={tile.title} className="c42-products__tile">
        {tileContent}
      </div>
    )
  }

  const toggleNav = () => setNavOpen((prev) => !prev)

  return (
    <main className="c42-info c42-products min-vh-100 py-5 d-flex flex-column align-items-center">
      <header className="d-flex flex-column w-100 flex-lg-row align-items-center gap-4 text-white justify-content-between header-spacing">
        <div className="text-center text-lg-start">
          <img src={CoreLogoText} alt="Core 42" className="img-fluid mb-3" />
        </div>
        <img src={CoreIcon} alt="Core 42 icon" className="c42-info__icon" />
      </header>

      <div className="container d-flex flex-column justify-content-between align-items-center h-products-100">
        <section className="c42-products__hero text-center">
          <h1 className="c42-page-title">Our Products</h1>
        </section>

        <section className="c42-products__grid">
          <div className="c42-products__row c42-products__row--top">
            {topRowTiles.map(renderTile)}
          </div>
          <div className="c42-products__row c42-products__row--bottom">
            {bottomRowTiles.map(renderTile)}
          </div>
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
          {productTiles.map((tile) => (
            <li key={tile.title} className="nav-item">
              <span className="nav-link disabled">{tile.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

export default C42Products
