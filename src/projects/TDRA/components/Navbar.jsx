import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/TDRA-final-logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to=".">
            <img src={Logo} alt="TDRA" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                TDRA
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to=".">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="screensaver">
                    Screensaver
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
