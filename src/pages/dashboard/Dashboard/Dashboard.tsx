import { BarraBottom } from '../components/BarraBottom';
import './styles/Dashboard.scss';
export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  return (
    <>
      <section data-bs-version="5.1" className="header19 cid-tkzhQruteP" id="header19-p">
        <div className="mbr-overlay" style={{ opacity: 0.7, backgroundColor: 'rgb(9, 41, 46)' }}></div>

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
                            fontSize: '120px',
                            color: 'rgb(255, 255, 255)',
                            fill: 'rgb(255, 255, 255)',
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
                            fontSize: '120px',
                            color: 'rgb(255, 255, 255)',
                            fill: 'rgb(255, 255, 255)',
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
                            fontSize: '120px',
                            color: 'rgb(255, 255, 255)',
                            fill: 'rgb(255, 255, 255)',
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
                            fontSize: '120px',
                            color: 'rgb(255, 255, 255)',
                            fill: 'rgb(255, 255, 255)',
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
      <BarraBottom />
    </>
  );
};

export default Dashboard;
