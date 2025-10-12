import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/dgov-logo.svg';

const Navbar = () => {
  const handleLogoClick = (e) => {
    // Prevent the router from intercepting
    e.preventDefault();
    // Optional: scroll to top before reload
    // window.scrollTo(0, 0);
    window.location.reload(); // hard refresh
  };

  const handleLogoKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid justify-content-center">
          {/* Logo: reload page on click */}
          <Link
            className="navbar-brand"
            to="."
            onClick={handleLogoClick}
            onKeyDown={handleLogoKey}
            role="button"
            title="Refresh"
            style={{ cursor: 'pointer' }}
          >
            <img src={Logo} alt="TDRA" />
          </Link>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

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
  );
};

export default Navbar;
