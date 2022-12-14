import { ErrorMessage, Field, Formik } from 'formik';
import { IChildren } from '../../../interface';
import { SexChildren } from '../../../interface/children.d';
import * as Yup from 'yup';
import './styles/FormChildren.scss';
export interface FormChildrenInterface {}

const REQUIRED = 'Este campo es requerido';

const SignupSchema = Yup.object().shape({
  nameChildren: Yup.string().required(REQUIRED),
  lastNameChildren: Yup.string().required(REQUIRED),
  lastNameChildren2: Yup.string(),
  noIdentity: Yup.number()
    .min(11, 'EL carnet de identidad necesita 11 digitos')
    .max(11, 'EL carnet de identidad necesita 11 digitos')
    .required(REQUIRED),
  age: Yup.number(),
  year_of_life: Yup.number().required(REQUIRED),
  sex: Yup.string(),
  street: Yup.string().required(REQUIRED),
  between: Yup.string(),
  house: Yup.string().required(REQUIRED),
  stair: Yup.string(),
  locality: Yup.string().required(REQUIRED),
  cPopular: Yup.string().required(REQUIRED),
  municipality: Yup.string().required(REQUIRED),
  province: Yup.string().required(REQUIRED),
});

const FormChildren: React.FC<FormChildrenInterface> = () => {
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
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values, actions);
      }}
      validationSchema={SignupSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="container">
            {/* primera seccion */}
            <section className="row shadow-sm mb-4">
              <div className="col-12 col-md-4 d-flex flex-column">
                <label className="form-label">
                  Nombre del Menor:
                  <Field
                    className="form-control"
                    type="text"
                    name="nameChildren"
                    id="nameChildren"
                    placeholder="Nombre del Menor"
                  />
                  <ErrorMessage name="nameChildren" component="p" className="text-danger" />
                </label>
                <label className="form-label">
                  No Carnet Identidad:
                  <Field
                    className="form-control"
                    type="number"
                    name="noIdentity"
                    id="noIdentity"
                    placeholder="Numero de CI"
                  />
                  <ErrorMessage name="noIdentity" component="p" className="text-danger" />
                </label>
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label w-100">
                  Apellido1:
                  <Field
                    className="form-control"
                    type="text"
                    name="lastNameChildren"
                    id="lastNameChildren"
                    placeholder="Primer Apellido"
                  />
                  <ErrorMessage name="lastNameChildren" component="p" className="text-danger" />
                </label>
                <div className="d-flex justify-content-between align-center">
                  <label className="form-label">
                    Edad:
                    <Field className="form-control" type="number" name="age" id="age" placeholder="Edad" />
                    <ErrorMessage name="age" component="p" className="text-danger" />
                  </label>
                  <label className="form-label">
                    Ano vida:
                    <Field
                      className="form-control"
                      type="number"
                      name="year_of_life"
                      id="year_of_life"
                      placeholder="Ano de vida"
                    />
                    <ErrorMessage name="year_of_life" component="p" className="text-danger" />
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label w-100">
                  Apellido2:
                  <Field
                    className="form-control"
                    type="number"
                    name="lastNameChildren2"
                    id="lastNameChildren2"
                    placeholder="Segundo Apellido"
                  />
                  <ErrorMessage name="lastNameChildren2" component="p" className="text-danger" />
                </label>
                <div>
                  <div className="form-check">
                    <Field className="form-check-input" type="radio" name="sex" id="sex" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Femenino
                    </label>
                  </div>
                  <div className="form-check">
                    <Field className="form-check-input" type="radio" name="sex" id="sex" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Masculino
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* segunda section */}
            <section className="row mb-4 shadow-sm">
              <div className="col-12 col-md-6 d-flex flex-column flex-md-row">
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-center">
                  <label className="form-label">
                    Calle:
                    <Field
                      className="form-control"
                      type="text"
                      name="street"
                      id="street"
                      placeholder="Calle donde vive el menor"
                    />
                    <ErrorMessage name="street" component="p" className="text-danger" />
                  </label>
                  <label className="form-label">
                    Entre:
                    <Field className="form-control" type="text" name="between" id="between" placeholder="Entre..." />
                  </label>
                  <label className="form-label">
                    Numero:
                    <Field className="form-control" type="text" name="house" id="house" placeholder="Casa..." />
                    <ErrorMessage name="house" component="p" className="text-danger" />
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column">
                <div className="d-flex flex-column flex-md-row gap-3">
                  <label className="form-label">
                    Escalera:
                    <Field
                      className="form-control"
                      type="text"
                      name="stair"
                      id="stair"
                      placeholder="Calle donde vive el menor"
                    />
                  </label>
                  <label className="form-label w-100">
                    Localidad:
                    <Field className="form-control" type="text" name="locality" id="locality" placeholder="Localidad" />
                    <ErrorMessage name="locality" component="p" className="text-danger" />
                  </label>
                </div>
              </div>
            </section>
            {/* tercera section */}
            <section className="row mb-4 shadow-sm">
              <div className="d-flex flex-column flex-md-row justify-content-between align-center gap-3">
                <label className="form-label w-100">
                  Consejo Popular:
                  <Field as="select" defaultValue={values.cPopular} className="form-select" name="cPopular">
                    <option>---Seleccione---</option>
                    <option value="micro70">Micro 70</option>
                    <option value="sierracaballo">Sierra Caballo</option>
                    <option value="abelsantamaria">Abel Santamaria</option>
                  </Field>
                  <ErrorMessage name="cPopular" component="p" className="text-danger" />
                </label>
                <label className="form-label w-100">
                  Municipio:
                  <Field as="select" defaultValue={values.municipality} className="form-select" name="municipality">
                    <option>---Seleccione---</option>
                    <option value="isladelajuventud">Isla de la Juventud</option>
                  </Field>
                  <ErrorMessage name="municipality" component="p" className="text-danger" />
                </label>
                <label className="form-label w-100">
                  Provincia:
                  <Field as="select" defaultValue={values.province} className="form-select" name="province">
                    <option>---Seleccione---</option>
                  </Field>
                  <ErrorMessage name="province" component="p" className="fill-error text-danger" />
                </label>
              </div>
            </section>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormChildren;
