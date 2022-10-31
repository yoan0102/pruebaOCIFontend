import { router } from '@/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavbarHome.scss';
export interface NavbarHomeInterface {}

const NavbarHome: React.FC<NavbarHomeInterface> = () => {
  return (
    <section className="menu menu3 cid-tkyWfTTgff" id="menu3-l" style={{ backgroundColor: 'transparent' }}>
      <nav className="navbar navbar-fixed-top w-100">
        <div className="container">
          <div className="row w-100 justify-content-end">
            <div className="navbar-brand d-none col-1 col-md-11"></div>
            <div className="icons-menu col-11 col-md-1">
              <Link className="iconfont-wrapper" to={router.DASHBOARD}>
                <span
                  className="p-2 mbr-iconfont mbri-user"
                  style={{
                    color: 'rgb(255, 255, 255)',
                    fill: ' rgb(255, 255, 255)',
                    fontSize: '35px',
                  }}
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavbarHome;
