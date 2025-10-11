import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import CoreIcon from "../../assets/core-icon.svg"
import CoreLogoText from "../../assets/core42-text.svg"
import CoreProductsFrame from "../../assets/core-our-products.svg"
import CoreContact from "../../assets/core-contact.svg"
import CoreBack from "../../assets/core-back.svg"

const pageTitle = "Signature Fusion Cloud"
const videoTitleId = "oracleFusionVideoTitle"
const videoHeading = "Signature Fusion Cloud Overview"
const videoEmbedSrc = "https://player.castr.com/live_8005c6e07e4911f0b36595c94a84f69d?range=1757414965-2&abr=false&namedHls=true"

const resourceTiles = [
  { title: "Sales Deck", href: "https://drive.google.com/file/d/1_GB6XF-sFMIBNquwwiaoAbTRQCSQu_c0/view?usp=drive_link" },
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
    to: "/projects/core42/products",
    image: CoreBack,
  },
]

const C42OracleFusion = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const closeButtonRef = useRef(null)

  const closeVideo = () => setVideoOpen(false)

  const toggleNav = () => setNavOpen((prev) => !prev)

  useEffect(() => {
    if (videoOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [videoOpen])

  useEffect(() => {
    if (!videoOpen) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideo()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [videoOpen])


  return (
    <main className="c42-fusion min-vh-100 py-5 d-flex flex-column align-items-center">
      <header className="d-flex flex-column w-100 flex-lg-row align-items-center gap-4 text-white justify-content-between header-spacing">
        <div className="text-center text-lg-start">
          <img src={CoreLogoText} alt="Core 42" className="img-fluid mb-3" />
        </div>
        <img src={CoreIcon} alt="Core 42 icon" className="c42-info__icon" />
      </header>

      <div className="container d-flex flex-column align-items-center justify-content-between h-products-100">
        <section className="c42-compass__hero text-center">
          <h1 className="c42-compass__title">{pageTitle}</h1>
        </section>

        <section className="c42-compass__resources">
          {resourceTiles.map((resource) => {
            if (resource.type === "video") {
              return (
                <button
                  key={resource.title}
                  type="button"
                  className="c42-compass__resource c42-compass__resource--button"
                  onClick={() => setVideoOpen(true)}
                >
                  <img src={CoreProductsFrame} alt="" aria-hidden="true" />
                  <span>{resource.title}</span>
                </button>
              )
            }

            return (
              <a key={resource.title} className="c42-compass__resource" href={resource.href}>
                <img src={CoreProductsFrame} alt="" aria-hidden="true" />
                <span>{resource.title}</span>
              </a>
            )
          })}
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
          {resourceTiles.map((item) => (
            <li key={item.title} className="nav-item">
              <span className="nav-link disabled">{item.title}</span>
            </li>
          ))}
        </ul>
      </nav>

      {videoOpen && (
        <div className="c42-modal" role="dialog" aria-modal="true" aria-labelledby={videoTitleId}>
          <div className="c42-modal__backdrop" onClick={closeVideo} />
          <div className="c42-modal__content">
            <button
              type="button"
              className="c42-modal__close"
              onClick={closeVideo}
              ref={closeButtonRef}
            >
              Close
            </button>
            <div className="c42-modal__body">
              <h2 id={videoTitleId} className="c42-modal__title">{videoHeading}</h2>
              <div className="c42-modal__media">
                <iframe
                  src={videoEmbedSrc}
                  width="100%"
                  style={{ aspectRatio: "16 / 9", minHeight: "340px" }}
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay"
                  allowFullScreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  oallowfullscreen
                  msallowfullscreen
                  title={`${pageTitle} Video`}
                />
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}

export default C42OracleFusion









