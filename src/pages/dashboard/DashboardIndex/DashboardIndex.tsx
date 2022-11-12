import { Link } from 'react-router-dom';
import './styles/Dashboard.scss';
export interface DashBoardIndexInterface {}

const DashBoardIndex: React.FC<DashBoardIndexInterface> = () => {
  return (
    <section className="admin-index bg-primary">
      <div className="admin-container">
        <div className="container">
          <div className="row row-cols-1 text-center row-cols-md-4 justify-content-md-around text-white fs-5 text-light">
            <Link to="/" className="col d-flex flex-column gap-4">
              <i className="bi bi-plus-lg" style={{ fontSize: '5rem' }}></i>
              <span>Nuava Solicitud</span>
            </Link>
            <Link to="#" className="col d-flex flex-column gap-4">
              <i className="bi bi-graph-up" style={{ fontSize: '5rem' }}></i>
              <span>Estadisticas</span>
            </Link>
            <Link to="#" className="col d-flex flex-column gap-4">
              <i className="bi bi-geo-alt" style={{ fontSize: '5rem' }}></i>
              <span>Maps</span>
            </Link>
            <Link to="#" className="col d-flex flex-column gap-4">
              <i className="bi bi-people" style={{ fontSize: '5rem' }}></i>
              <span>Matricula</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoardIndex;
