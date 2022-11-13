import { FormPaterns } from './components';
import { FormChildren } from './components/forms/FormChildren';
import { IChildren, SexChildren, TypeParent } from './interface';
import './styles/Submision.scss';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
export interface SubmisionInterface {}

const REQUIRED = 'Este campo es requerido';

const SignupSchema = Yup.object().shape({
  nameChildren: Yup.string().required(REQUIRED),
  lastNameChildren: Yup.string().required(REQUIRED),
  lastNameChildren2: Yup.string(),
  noIdentity: Yup.number()
    .test('len', 'EL carnet de identidad necesita 11 digitos', (val) => val?.toString().length === 11)
    .required(REQUIRED),
  age: Yup.number(),
  year_of_life: Yup.number().required(REQUIRED),
  sex: Yup.string(),
  street: Yup.string().required(REQUIRED),
  between: Yup.string(),
  house: Yup.string(),
  stair: Yup.string(),
  locality: Yup.string().required(REQUIRED),
  cPopular: Yup.string().required(REQUIRED),
  municipality: Yup.string().required(REQUIRED),
  province: Yup.string(),
  parents: Yup.object().shape({
    fullNameParent: Yup.string().required(REQUIRED),
    uniqueParent: Yup.boolean(),
    addressParent: Yup.string(),
    phoneNumberParent: Yup.string().required(REQUIRED),
    typeParent: Yup.string().required(REQUIRED),
    occupation: Yup.array().required(REQUIRED),
    convivencia: Yup.boolean(),
    work: Yup.string().required(REQUIRED),
    workAddress: Yup.string().required(REQUIRED),
    workPosition: Yup.string(),
    organismo: Yup.string().required(REQUIRED),
    workPhoneParent: Yup.string(),
    horario: Yup.string(),
    salary: Yup.number(),
    otherChildren: Yup.boolean(),
    cantOtherChildren: Yup.number(),
    ciOtherChildren: Yup.string(),
    pregnant: Yup.boolean(),
    student: Yup.boolean(),
    deaf: Yup.boolean(),
  }),
});

const initialValues: IChildren = {
  nameChildren: '',
  lastNameChildren: '',
  lastNameChildren2: '',
  noIdentity: 0,
  age: 0,
  year_of_life: 0,
  sex: SexChildren.FEMENINO,
  street: '',
  between: '',
  house: '',
  stair: '',
  locality: '',
  cPopular: '',
  municipality: '',
  province: '',
  parents: {
    fullNameParent: '',
    uniqueParent: false,
    addressParent: '',
    phoneNumberParent: '',
    typeParent: TypeParent.MADRE,
    occupation: [],
    convivencia: true,
    work: '',
    workAddress: '',
    workPosition: '',
    organismo: '',
    workPhoneParent: '',
    horario: '',
    salary: 0,
    otherChildren: false,
    cantOtherChildren: 0,
    ciOtherChildren: '',
    pregnant: false,
    student: false,
    deaf: false,
  },
};

const Submision: React.FC<SubmisionInterface> = () => {
  return (
    <div className="submision container">
      <h2 className="text-center mb-5">Solicitud de Matricula de Circulo Infantil</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
        validationSchema={SignupSchema}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <section className="container">
              <div className="card-header">
                <h2 className="text-center">Datos de la Planilla</h2>
              </div>
              <div className="card-body">
                <div className="row justify-content-around">
                  <div className="col-sm-2 mb-3">
                    <label htmlFor="noEntry" className="form-label">
                      No De entrada de la Planilla
                    </label>
                    <Field type="email" className="form-control" name="noEntry" id="noEntry" />
                  </div>
                  <div className="col-sm-2 p-lg-5">
                    <div className="form-check form-switch">
                      <Field
                        className="form-check-input switch-lg"
                        type="checkbox"
                        role="switch"
                        name="social_case"
                        id="social_case"
                      />
                      <label className="form-label" htmlFor="social_case">
                        Caso Social
                      </label>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Default radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Default checked radio
                      </label>
                    </div>
                  </div>

                  <div className="mb-3 col-md-7">
                    <label htmlFor="motive" className="form-label">
                      Motivo de la solicitud
                    </label>
                    <Field type="textarea" name="motive" className="form-control" id="motive" rows={3}></Field>
                  </div>
                </div>
              </div>
            </section>

            <FormChildren values={values} />
            <FormPaterns values={values} />

            <div className="d-flex d-flex justify-content-center pt-3 gap-2 pb-3">
              <button type="button" className="btn btn-info btn-sm ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
              </button>

              <button type="button" className="btn btn-secondary btn-sm ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </button>

              <button type="submit" className="btn btn-primary btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Submision;
