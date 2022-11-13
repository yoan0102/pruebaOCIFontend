import './styles/NavbarDashboard.scss';
import { Link, NavLink } from 'react-router-dom';
import { router } from '@/constants';
import logo from '../../../../assets/images/logo-107x103.png';
import { useState } from 'react';
export interface NavbarDashboardInterface {}

const NavbarDashboard: React.FC<NavbarDashboardInterface> = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleClickToggle = () => {
    setToggle((state) => !state);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <h1 className="d-inline-block ">
            <Link to={router.HOME} className="text-secondary">
              OCI
            </Link>
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-center gap-5">
            <li className="nav-item">
              <NavLink className="nav-link link text-success text-primary display-4" to={router.NEW_SUBMISSION}>
                <i className="bi bi-plus-lg"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link text-success text-primary display-4" to="/">
                <i className="bi bi-graph-up"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link text-success text-primary display-4" to="/">
                <i className="bi bi-geo-alt"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link text-success text-primary display-4" to="/">
                <i className="bi bi-people"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link link text-success text-primary display-4" to="/">
                <i className="bi bi-search"></i>
              </NavLink>
            </li>
            <div className="dashboard-navbar__dropdown">
              <i
                className="dropdown-toggle mt-3 text-secondary pointer"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleClickToggle}
              ></i>
              <ul
                className={`p-3 ${toggle ? 'd-none' : 'd-block'}`}
                style={{ position: 'absolute', background: 'white' }}
              >
                <li>
                  <NavLink className="text-dark" to="#">
                    <i className="bi bi-gear fs-5"></i>
                    Configuracion
                  </NavLink>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <i className="bi bi-box-arrow-right"></i>Logout
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
