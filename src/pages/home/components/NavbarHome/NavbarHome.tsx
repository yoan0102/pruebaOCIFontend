import { router } from '@/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavbarHome.scss';
export interface NavbarHomeInterface {}

const NavbarHome: React.FC<NavbarHomeInterface> = () => {
  return (
    <nav className="shadow">
      <ul className="nav justify-content-end px-5">
        <li className="nav-item">
          <Link to={router.DASHBOARD} className="nav-link active" aria-current="page">
            <i className="bi bi-person-circle text-white" style={{ fontSize: '2rem' }}></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHome;
