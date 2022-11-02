import { Link } from 'react-router-dom';
import './styles/CardButtons.scss';
export interface CardButtonsInterface {
  title: string;
  path: string;
  icon: JSX.Element;
}

const CardButtons: React.FC<CardButtonsInterface> = ({ title, path, icon }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card-wrapper">
          <div className="card-box align-center">
            <Link to={path} className="card-button__link">
              {icon}
            </Link>
            <h4 className="card-title align-center mbr-black mbr-fonts-style display-7">
              <strong>{title}</strong>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardButtons;
