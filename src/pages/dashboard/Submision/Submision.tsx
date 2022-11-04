import { FormChildren } from './components/forms/FormChildren';
import './styles/Submision.scss';
export interface SubmisionInterface {}

const Submision: React.FC<SubmisionInterface> = () => {
  return (
    <div className="submision container">
      <h2 className="text-center mb-5">Solicitud de Matricula de Circulo Infantil</h2>
      <FormChildren />
    </div>
  );
};

export default Submision;
