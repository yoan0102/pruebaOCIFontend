import { NavbarHome } from '../components';
import './styles/HomeScreen.scss';

export interface HomeScreenInterface {}

const HomeScreen: React.FC<HomeScreenInterface> = () => {
  return (
    <>
      <NavbarHome />
      <section className="header7 cid-tkyWhJNTII mbr-parallax-background w-100" id="header7-m">
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
      <section data-bs-version="5.1" className="content5 cid-tkyX7FBUBH" id="content5-n">
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
    </>
  );
};

export default HomeScreen;
