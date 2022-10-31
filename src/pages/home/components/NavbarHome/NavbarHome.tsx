import { router } from '@/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavbarHome.scss';
export interface NavbarHomeInterface {}

const NavbarHome: React.FC<NavbarHomeInterface> = () => {
  return (
    <section className="menu menu3 cid-tkyWfTTgff" id="menu3-l" style={{ backgroundColor: 'transparent' }}>
      <nav className="navbar navbar-fixed-top w-100">
        <div className="container w-100">
          <div className="row  w-100">
            <div className="navbar-brand col-11"></div>
            <div className="icons-menu col-1">
              <Link className="iconfont-wrapper mt-3" to={router.DASHBOARD}>
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
