import { Formik, Form, Field } from 'formik';
import css from './Sidebar.module.css';
import sprite from '../../assets/icons/sprite.svg'; // Path to your SVG sprite

const initialValues = {
  location: '',
  camperForm: '',
  engine: '',
  transmission: '',
};

const Sidebar = ({ onSubmit, onClear }) => {
  const handleReset = resetForm => {
    resetForm();
    if (onClear) {
      onClear();
    }
  };

  return (
    <aside className={css.sidebar}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onSubmit(values)}
      >
        {({ resetForm }) => (
          <Form className={css.form}>
            {/* location input section */}
            <div className={css.inputGroup}>
              <label htmlFor="location" className={css.label}>
                Location
              </label>
              <div className={css.inputWrapper}>
                <svg className={css.inputIcon} width="20" height="20">
                  <use href={`${sprite}#icon-map-pin`} />
                </svg>
                <Field
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Kyiv, Ukraine"
                  className={css.input}
                />
              </div>
            </div>

            <p className={css.filterHeader}>Filters</p>

            {/* camper form filter */}
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Camper form</legend>
              <div className={css.radioGroup}>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="camperForm"
                    value="alcove"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Alcove
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="camperForm"
                    value="panel-van"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Panel Van
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="camperForm"
                    value="integrated"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Integrated
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="camperForm"
                    value="semi-integrated"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Semi Integrated
                </label>
              </div>
            </fieldset>

            {/* engine filter */}
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Engine</legend>
              <div className={css.radioGroup}>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="engine"
                    value="diesel"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Diesel
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="engine"
                    value="petrol"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Petrol
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="engine"
                    value="hybrid"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Hybrid
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="engine"
                    value="electric"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Electric
                </label>
              </div>
            </fieldset>

            {/* transmission filter */}
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Transmission</legend>
              <div className={css.radioGroup}>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="transmission"
                    value="automatic"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Automatic
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="transmission"
                    value="manual"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Manual
                </label>
              </div>
            </fieldset>

            {/* action buttons */}
            <div className={css.btnGroup}>
              <button type="submit" className={css.searchBtn}>
                Search
              </button>
              <button
                type="button"
                onClick={() => handleReset(resetForm)}
                className={css.clearBtn}
              >
                <svg className={css.clearIcon} width="16" height="16">
                  <use href={`${sprite}#icon-clear`} />
                </svg>
                Clear filters
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </aside>
  );
};

export default Sidebar;
