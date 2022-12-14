import React from 'react';
import './styles/NavbarDashboard.scss';
export interface NavbarDashboardInterface {}

const NavbarDashboard: React.FC<NavbarDashboardInterface> = () => {
  return (
    <section
      data-bs-version="5.1"
      className="menu menu2 cid-sFCw1qGFAI"
      // once="menu"
      id="menu2-23"
    >
      <nav className="navbar navbar-dropdown navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="https://mobiri.se">
                <img src="assets/images/logo-107x103.png" alt="Mobirise Website Builder" style={{ height: '3rem' }} />
              </a>
            </span>
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-success text-primary display-2" href="home.html">
                OCI
              </a>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>``
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
              <li className="nav-item">
                <a className="nav-link link text-success text-primary display-4" href="newsol.html">
                  <span
                    className="mbri-plus mbr-iconfont mbr-iconfont-btn"
                    style={{ color: 'rgb(34, 153, 170)' }}
                  ></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-success text-primary display-4" href="estadistics.html">
                  <span
                    className="mbri-growing-chart mbr-iconfont mbr-iconfont-btn"
                    style={{ color: 'rgb(34, 153, 170)' }}
                  ></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-success text-primary display-4" href="map.html">
                  <span
                    className="mbri-map-pin mbr-iconfont mbr-iconfont-btn"
                    style={{ color: 'rgb(34, 153, 170)' }}
                  ></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-success text-primary display-4" href="matriculas.html">
                  <span
                    className="mbri-pages mbr-iconfont mbr-iconfont-btn"
                    style={{ color: 'rgb(34, 153, 170)' }}
                  ></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link text-success show text-primary display-4" href="search.html">
                  <span
                    className="mbri-search mbr-iconfont mbr-iconfont-btn"
                    style={{ color: 'rgb(34, 153, 170)' }}
                  ></span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link link dropdown-toggle text-success show display-4"
                  data-toggle="dropdown-submenu"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                  style={{ cursor: 'pointer' }}
                >
                  <span
                    className="mobi-mbri mobi-mbri-more-vertical mbr-iconfont mbr-iconfont-btn"
                    style={{ color: 'rgb(34, 153, 170)' }}
                  ></span>
                </div>
                <div
                  style={{ display: 'none' }}
                  className="dropdown-menu show"
                  aria-labelledby="dropdown-543"
                  data-bs-popper="none"
                >
                  <a className="dropdown-item text-success text-primary display-4" href="config.html">
                    <span
                      className="mbri-setting3 mbr-iconfont mbr-iconfont-btn"
                      style={{ color: 'rgb(34, 153, 170)' }}
                    ></span>
                    Configuraci??n
                  </a>
                  <a className="dropdown-item text-success text-primary display-4" href="index.html">
                    <span
                      className="mbri-login mbr-iconfont mbr-iconfont-btn"
                      style={{ color: 'rgb(34, 153, 170)' }}
                    ></span>
                    Salir
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavbarDashboard;
