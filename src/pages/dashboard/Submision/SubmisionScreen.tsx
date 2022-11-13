import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormPaterns } from './components';
import { FormChildren } from './components/forms/FormChildren';
import { ISubmision, SexChildren, TypeParent, TypeSubmision } from './interface';
import './styles/Submision.scss';
import { useSubmision } from '../context/submision.context';

export interface SubmisionInterface {}

const REQUIRED = 'Este campo es requerido';

const SignupSchema = Yup.object().shape({
  noEntry: Yup.number().required(REQUIRED),
  type: Yup.string().required(REQUIRED),
  social_case: Yup.boolean(),
  motive: Yup.string(),
  children: Yup.object().shape({
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
  }),
});

const initialValues: ISubmision = {
  noEntry: 0,
  type: TypeSubmision.NEW,
  social_case: false,
  motive: '',
  children: {
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
  },
};

const Submision: React.FC<SubmisionInterface> = () => {
  const submisionContext = useSubmision();
  return (
    <div className="submision container">
      <h2 className="text-center mb-5">Solicitud de Matricula de Circulo Infantil</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          submisionContext?.createSubmision({
            noEntry: values.noEntry,
            type: values.type,
            social_case: values.social_case,
            motive: values.motive,
            children: values.children,
            parents: values.children.parents,
          });
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
                <div className="row justify-content-between">
                  <div className="col-sm-2 mb-3">
                    <label htmlFor="noEntry" className="form-label">
                      No De entrada de la Planilla
                    </label>
                    <Field type="email" className="form-control" name="noEntry" id="noEntry" />
                  </div>
                  <div className="col-sm-2">
                    <div className="col-sm-2 p-md-2">
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

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Nueva Solicitud
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Traslado
                      </label>
                    </div>
                  </div>

                  <div className="mb-3 col-md-6 mt-2">
                    <label htmlFor="motive" className="form-label">
                      Motivo de la solicitud
                    </label>
                    <Field type="textarea" name="motive" className="form-control" id="motive" rows={3}></Field>
                  </div>
                </div>
              </div>
            </section>

            <FormChildren values={values.children} />
            <FormPaterns values={values.children.parents} />

            <div className="d-flex d-flex justify-content-center  gap-2 pb-3">
              <button type="button" className="btn btn-warning  ms-2 text-white">
                <i className="bi bi-arrow-clockwise"></i>
              </button>

              <button type="button" className="btn btn-danger text-white">
                <i className="bi bi-x-lg"></i>
              </button>

              <button type="submit" className="btn btn-success text-white">
                <i className="bi bi-check"></i>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Submision;
