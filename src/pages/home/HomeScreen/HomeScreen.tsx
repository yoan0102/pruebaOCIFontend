import { NavbarHome } from '../components';
import './styles/HomeScreen.scss';
import { useContext } from 'react';
import { useNotification } from '@/context/Notification';

export interface HomeScreenInterface {}

const HomeScreen: React.FC<HomeScreenInterface> = () => {
  return (
    <div className="main-home h-100">
      <NavbarHome />
      <main className="container-fluid p-0 m-0" style={{ minHeight: '85vh' }}>
        <div className="row ">
          <div className="col-12 col-md-7"></div>
          <div className="text-white col-12 col-md-5 p-5">
            <h1 className="display-1 text-center text-md-end text-uppercase fw-bold">OCI</h1>
            <p className="display-6 text-center text-md-end">
              La aplicación diseñada <br />
              para ayudar con el otorgamiento <br />
              de matrículas para círculos infantiles Dirección Municipal de Educación Isla de la Juventud
            </p>
          </div>
        </div>
      </main>
      <div className="divider d-block w-100" style={{ backgroundColor: '#09292E', height: '40px' }}></div>
    </div>
  );
};

export default HomeScreen;
