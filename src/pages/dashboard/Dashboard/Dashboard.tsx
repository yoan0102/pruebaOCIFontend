import "./styles/Dashboard.scss";
export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  return (
    <>
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
                  <img
                    src="assets/images/logo-107x103.png"
                    alt="Mobirise Website Builder"
                    style={{ height: "3rem" }}
                  />
                </a>
              </span>
              <span className="navbar-caption-wrap">
                <a
                  className="navbar-caption text-success text-primary display-2"
                  href="home.html"
                >
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown nav-right"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <a
                    className="nav-link link text-success text-primary display-4"
                    href="newsol.html"
                  >
                    <span
                      className="mbri-plus mbr-iconfont mbr-iconfont-btn"
                      style={{ color: "rgb(34, 153, 170)" }}
                    ></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-success text-primary display-4"
                    href="estadistics.html"
                  >
                    <span
                      className="mbri-growing-chart mbr-iconfont mbr-iconfont-btn"
                      style={{ color: "rgb(34, 153, 170)" }}
                    ></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-success text-primary display-4"
                    href="map.html"
                  >
                    <span
                      className="mbri-map-pin mbr-iconfont mbr-iconfont-btn"
                      style={{ color: "rgb(34, 153, 170)" }}
                    ></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-success text-primary display-4"
                    href="matriculas.html"
                  >
                    <span
                      className="mbri-pages mbr-iconfont mbr-iconfont-btn"
                      style={{ color: "rgb(34, 153, 170)" }}
                    ></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-success show text-primary display-4"
                    href="search.html"
                  >
                    <span
                      className="mbri-search mbr-iconfont mbr-iconfont-btn"
                      style={{ color: "rgb(34, 153, 170)" }}
                    ></span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link link dropdown-toggle text-success show display-4"
                    href="index.html#contacts2-1r"
                    data-toggle="dropdown-submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <span
                      className="mobi-mbri mobi-mbri-more-vertical mbr-iconfont mbr-iconfont-btn"
                      style={{ color: "rgb(34, 153, 170)" }}
                    ></span>
                  </a>
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdown-543"
                    data-bs-popper="none"
                  >
                    <a
                      className="dropdown-item text-success text-primary display-4"
                      href="config.html"
                    >
                      <span
                        className="mbri-setting3 mbr-iconfont mbr-iconfont-btn"
                        style={{ color: "rgb(34, 153, 170)" }}
                      ></span>
                      Configuración
                    </a>
                    <a
                      className="dropdown-item text-success text-primary display-4"
                      href="index.html"
                    >
                      <span
                        className="mbri-login mbr-iconfont mbr-iconfont-btn"
                        style={{ color: "rgb(34, 153, 170)" }}
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

      <section
        data-bs-version="5.1"
        className="header19 cid-tkzhQruteP"
        id="header19-p"
      >
        <div
          className="mbr-overlay"
          style={{ opacity: 0.7, backgroundColor: "rgb(9, 41, 46)" }}
        ></div>

        <div className="container">
          <div className="media-container">
            <div className="col-md-12 align-center">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card-wrapper">
                    <div className="card-box align-center">
                      <a href="newsol.html">
                        <span
                          className="mbr-iconfont mbri-plus"
                          style={{
                            fontSize: "120px",
                            color: "rgb(255, 255, 255)",
                            fill: "rgb(255, 255, 255)",
                          }}
                        ></span>
                      </a>
                      <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                        <strong>Nueva Solicitud</strong>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card-wrapper">
                    <div className="card-box align-center">
                      <a href="estadistics.html">
                        <span
                          className="mbr-iconfont mbri-growing-chart"
                          style={{
                            fontSize: "120px",
                            color: "rgb(255, 255, 255)",
                            fill: "rgb(255, 255, 255)",
                          }}
                        ></span>
                      </a>
                      <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                        <strong>Estadísticas</strong>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card-wrapper">
                    <div className="card-box align-center">
                      <a href="map.html">
                        <span
                          className="mbr-iconfont mbri-map-pin"
                          style={{
                            fontSize: "120px",
                            color: "rgb(255, 255, 255)",
                            fill: "rgb(255, 255, 255)",
                          }}
                        ></span>
                      </a>
                      <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                        <strong>Mapa</strong>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="card-wrapper">
                    <div className="card-box align-center">
                      <a href="matriculas.html">
                        <span
                          className="mbr-iconfont mbri-pages"
                          style={{
                            fontSize: "120px",
                            color: "rgb(255, 255, 255)",
                            fill: "rgb(255, 255, 255)",
                          }}
                        ></span>
                      </a>
                      <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
                        <strong>Matrículas</strong>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-bs-version="5.1"
        className="footer3 cid-sFCygHrmNf mbr-reveal"
        // once="footers"
        id="footer3-24"
      >
        <div className="container">
          <div className="row align-center mbr-white">
            <div className="row row-copirayt">
              <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
