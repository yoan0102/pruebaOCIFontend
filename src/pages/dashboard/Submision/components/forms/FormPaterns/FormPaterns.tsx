import { ErrorMessage, Field } from 'formik';
import { IParent } from '../../../interface/parent';
import './styles/FormPaterns.scss';

type FormParetnsProps = {
  values: IParent;
};

const htmlFormPaterns: React.FC<FormParetnsProps> = ({ values }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card-body text-left">
            <div className="mb-md-5 mt-md-4">
              <div className="card-body text-black">
                <h2 className="text-dark d-flex justify-content-center align-items-center">Datos del Padre</h2>

                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-sm-5 p-3">
                    <div className="form-outline col-auto">
                      <label className="form-label" htmlFor="fullNameParent">
                        Nombre
                      </label>
                      <Field
                        type="text"
                        id="fullNameParent"
                        name="children.parents.fullNameParent"
                        className="form-control"
                        placeholder="Nombre del Padre"
                        value={values.fullNameParent}
                      />
                      <ErrorMessage name="children.parents.fullNameParent" component="p" className="text-danger" />
                    </div>
                  </div>
                  {/* Parentesco */}
                  <div className="col-sm-3 ">
                    <div className="form-outline">
                      <div>
                        <label className="form-label" htmlFor="typeParent">
                          Parentesco
                        </label>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check form-check-inline p-md-1">
                          <Field
                            className="form-check-input"
                            type="radio"
                            name="children.parents.typeParent"
                            id="madre"
                            value="madre"
                            checked
                          />
                          <label className="form-check-label" htmlFor="madre">
                            Madre{' '}
                          </label>
                        </div>

                        <div className="form-check htmlForm-check-inline p-md-1">
                          <Field
                            className="form-check-input"
                            type="radio"
                            name="children.parents.typeParent"
                            id="padre"
                            value="padre"
                          />
                          <label className="form-check-label" htmlFor="padre">
                            Padre{' '}
                          </label>
                        </div>

                        <div className="form-check form-check-inline p-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="children.parents.typeParent"
                            id="tutor"
                            value="tutor"
                          />
                          <label className="form-check-label" htmlFor="tutor">
                            Tutor{' '}
                          </label>
                        </div>
                        <ErrorMessage name="children.parents.typeParent" component="p" className="text-danger" />
                      </div>
                    </div>
                  </div>
                  {/* Ocupacion */}
                  <div className="col-sm-4">
                    <div>
                      <label className="form-label" htmlFor="occupation">
                        Ocupacion
                      </label>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="form-check htmlForm-check-inline p-md-1">
                        <Field
                          className="form-check-input"
                          type="checkbox"
                          name="children.parents.occupation"
                          id="trabajador"
                          value="trabajador"
                        />
                        <label className="form-check-label" htmlFor="trabajador">
                          Trabajador
                        </label>
                      </div>

                      <div className="form-check form-check-inline p-md-1">
                        <Field
                          className="form-check-input"
                          type="checkbox"
                          name="children.parents.occupation"
                          id="jubilado"
                          value="jubilado"
                        />
                        <label className="form-check-label" htmlFor="jubilado">
                          Jubilado
                        </label>
                      </div>

                      <div className="form-check form-check-inline p-md-1">
                        <Field
                          className="form-check-input"
                          type="checkbox"
                          name="children.parents.occupation"
                          id="asistenciado"
                          value="asistenciado"
                        />
                        <label className="form-check-label" htmlFor="asistenciado">
                          Asistenciado
                        </label>
                      </div>
                      <ErrorMessage name="children.parents.typeParent" component="p" className="text-danger" />
                    </div>
                  </div>
                </div>

                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-sm-6">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="addressParent">
                        Direccion
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="children.parents.addressParent"
                        id="addressParent"
                        placeholder="Direccion del padre"
                        value={values.convivencia ? '' : values.addressParent}
                        disabled={values.convivencia}
                      />
                    </div>
                  </div>

                  <div className="col-sm-2 p-lg-5">
                    <div className="form-check form-switch">
                      <Field
                        className="form-check-input switch-lg"
                        type="checkbox"
                        role="switch"
                        name="children.parents.convivencia"
                        id="convivencia"
                        checked={values.convivencia}
                      />
                      <label className="form-label" htmlFor="convivencia">
                        Convive
                      </label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="phoneNumberParent">
                        Telefono
                      </label>
                      <Field
                        className="form-control"
                        type="text"
                        name="children.parents.phoneNumberParent"
                        id="phoneNumberParent"
                        placeholder="Telefono del padre"
                        value={values.phoneNumberParent}
                      />
                    </div>
                    <ErrorMessage name="cbhildren.parents.phoneNumberParent" component="p" className="text-danger" />
                  </div>

                  <div className="col-sm-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="work">
                        Nombre del centro de trabajo
                      </label>
                      <Field
                        type="text"
                        name="children.parents.work"
                        id="work"
                        className="form-control"
                        value={values.work}
                      />
                    </div>
                    <ErrorMessage name="children.parents.work" component="p" className="text-danger" />
                  </div>

                  <div className="col-sm-4">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="workPosition">
                        Cargo que ocupa
                      </label>
                      <Field
                        type="text"
                        id="workPosition"
                        name="children.parents.workPosition"
                        className="form-control"
                        value={values.workPosition}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 p-lg-2">
                    <div className="d-flex flex-column  align-center">
                      <label className="form-label">Organismo</label>
                      <Field
                        as="select"
                        name="children.parents.organismo"
                        className="form-select"
                        aria-label="organismo"
                      >
                        <option>----Seleccione----</option>
                        <option value="minsap">MINSAP</option>
                        <option value="mined">MINED</option>
                        <option value="minag">MINAG</option>
                      </Field>
                    </div>
                    <ErrorMessage name="children.parents.organismo" component="p" className="text-danger" />
                  </div>

                  <div className="row g-3">
                    <div className="col-sm-5">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="workAddress">
                          Direccion del centro de trabajo
                        </label>
                        <Field
                          type="text"
                          id="workAddress"
                          name="children.parents.workAddress"
                          className="form-control"
                          value={values.workAddress}
                        />
                      </div>
                      <ErrorMessage name="children.parents.workAddress" component="p" className="text-danger" />
                    </div>

                    <div className="col-sm-3">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="workPhoneParent">
                          Telefono de trabajo
                        </label>
                        <Field
                          type="tel"
                          id="workPhoneParent"
                          name="children.parents.workPhoneParent"
                          className="form-control"
                          value={values.workPhoneParent}
                        />
                      </div>
                    </div>

                    <div className="col-sm-2 ">
                      <div className="d-flex flex-column justify-content-between align-center ">
                        <label className="form-label">Horario</label>
                        <Field
                          as="select"
                          name="children.parents.horario"
                          className="form-select"
                          aria-label="organismo"
                        >
                          <option selected>--</option>
                          <option value="07-03">07-03</option>
                          <option value="08-04">08-04</option>
                          <option value="09-05">09-05</option>
                        </Field>
                      </div>
                    </div>

                    <div className="col-sm-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="salary">
                          Salario
                        </label>
                        <Field
                          type="text"
                          id="salary"
                          name="children.parents.salary"
                          className="form-control"
                          value={values.salary}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-sm-2 ">
                      <div className="form-outline">
                        <div>
                          <label className="form-label" htmlFor="typeParent">
                            Tiene otros ninos en CI?
                          </label>
                        </div>

                        <div className="d-flex flex-column flex-md-row gap-3">
                          <div className="form-check form-check-inline p-md-2 ">
                            <Field
                              className="form-check-input"
                              type="radio"
                              name="children.parents.otherChildren"
                              id="otherChildren"
                            />
                            <label className="form-check-label" htmlFor="otherChildren">
                              Si{' '}
                            </label>
                          </div>

                          <div className="form-check htmlForm-check-inline p-md-2">
                            <Field
                              className="form-check-input"
                              type="radio"
                              name="children.parents.otherChildren"
                              id="otherChildren"
                              checked
                            />
                            <label className="form-check-label" htmlFor="otherChildren">
                              No{' '}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="cantOtherChildren">
                          Cantidad
                        </label>
                        <input
                          type="text"
                          id="cantOtherChildren"
                          name="childre.parents.cantOtherChildren"
                          className="form-control"
                          value={values.cantOtherChildren}
                        />
                      </div>
                    </div>

                    <div className="col-sm-4 p-lg-2">
                      <div className="d-flex flex-column justify-content-between align-center ">
                        <label className="form-label">Centro</label>
                        <Field
                          as="select"
                          name="children.parents.ciOtherChildren"
                          className="form-select"
                          aria-label="ciOtherChildren"
                        >
                          <option selected>----Seleccione----</option>
                          <option value="Menique">Menique</option>
                          <option value="Abel">Abel Santamaria</option>
                          <option value="mineritos">Los Mineritos</option>
                        </Field>
                      </div>
                    </div>

                    <div className="col-sm-4 p-md-5">
                      <div className="form-outline">
                        <div>
                          <label className="form-label" htmlFor="TypeParent.MADRE">
                            Madre
                          </label>
                        </div>
                        <div className="d-flex flex-column flex-md-row gap-3">
                          <div className="form-check form-check-inline p-md-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="children.parents.pregnant"
                              id="pregnant"
                              value="pregnant"
                            />
                            <label className="form-check-label" htmlFor="pregnant">
                              Embarazada
                            </label>
                          </div>

                          <div className="form-check form-check-inline p-md-1">
                            <Field
                              className="form-check-input"
                              type="checkbox"
                              name="children.parent.student"
                              id="student"
                              value="student"
                            />
                            <label className="form-check-label" htmlFor="student">
                              Estudiante
                            </label>
                          </div>

                          <div className="form-check form-check-inline p-md-1">
                            <Field
                              className="form-check-input"
                              type="checkbox"
                              name="children.parents.deaf"
                              id="deaf"
                              value="deaf"
                            />
                            <label className="form-check-label" htmlFor="deaf">
                              Hipoacusica
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default htmlFormPaterns;
