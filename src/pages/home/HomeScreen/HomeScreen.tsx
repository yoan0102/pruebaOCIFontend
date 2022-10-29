import React from "react";
import { Link } from "react-router-dom";

import "./styles/HomeScreen.scss";
import { router } from "../../../constants/router";

export interface HomeScreenInterface {}

const HomeScreen: React.FC<HomeScreenInterface> = () => {
  return (
    <>
      <section
        data-bs-version="5.1"
        className="menu menu3 cid-tkyWfTTgff"
        id="menu3-l"
      >
        <nav className="navbar navbar-fixed-top w-100">
          <div className="container w-100">
            <div className="row  w-100">
              <div className="navbar-brand col-11"></div>

              <div className="icons-menu col-1">
                <Link className="iconfont-wrapper mt-3" to={router.DASHBOARD}>
                  <span
                    className="p-2 mbr-iconfont mbri-user"
                    style={{
                      color: "rgb(255, 255, 255)",
                      fill: " rgb(255, 255, 255)",
                      fontSize: "35px",
                    }}
                  ></span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
      {/* asdasd */}
      <section
        data-bs-version="5.1"
        className="header7 cid-tkyWhJNTII mbr-parallax-background w-100 h-100 "
        id="header7-m"
      >
        <div className="text-right container">
          <div className="row justify-content-end">
            <div className="col-12 col-lg-4">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1">
                <strong>OCI</strong>
              </h1>

              <p className="mbr-text mbr-fonts-style display-7">
                La aplicación diseñada <br />
                para ayudar con el otorgamiento <br />
                de matrículas para círculos infantiles
                <br />
                <br />
                <br />
                Dirección Municipal de Educación <br />
                Isla de la Juventud
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="content5 cid-tkyX7FBUBH"
        id="content5-n"
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <p className="mbr-text mbr-fonts-style display-7">
                &nbsp;
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="display-7"
        style={{
          padding: 0,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "center",
          display: "flex",
          position: "relative",
          height: "4rem",
        }}
      >
        <a
          href="#"
          style={{
            flex: "1 1",
            height: "4rem",
            position: "absolute",
            width: "100%",
            zIndex: 1,
          }}
        >
          <img
            alt=""
            style={{ height: "4rem" }}
            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </a>
        <p style={{ margin: 0, textAlign: "center" }} className="display-7">
          Built with &#8204;
        </p>
        <a style={{ zIndex: 1 }} href="#">
          Mobirise{" "}
        </a>
      </section>{" "}
    </>
  );
};

export default HomeScreen;
