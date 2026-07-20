import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, setFilters } from '../../redux/filtersSlice';
import { selectFilters } from '../../redux/selectors';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './Sidebar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  const handleSubmit = values => {
    dispatch(setFilters(values));
  };

  const handleClear = resetForm => {
    resetForm();
    dispatch(resetFilters());
  };

  return (
    <aside className={css.sidebar}>
      <Formik
        initialValues={filters}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form className={css.form}>
            {/* location input section */}
            <div className={css.inputGroup}>
              <label htmlFor="location" className={css.label}>
                Location
              </label>
              <div className={css.inputWrapper}>
                <Icon name="map" className={css.inputIcon} />
                <Field
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City"
                  className={css.input}
                />
              </div>
            </div>

            <h3 className={css.filterHeader}>Filters</h3>

            {/* camper form filter */}
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Camper form</legend>
              <div className={css.radioGroup}>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="form"
                    value="alcove"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Alcove
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="form"
                    value="panelTruck"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Panel Truck
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="form"
                    value="integrated"
                    className={css.radioInput}
                  />
                  <span className={css.customRadio}></span>
                  Integrated
                </label>
                <label className={css.radioLabel}>
                  <Field
                    type="radio"
                    name="form"
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
              <Button type="submit" variant="big" className={css.searchBtn}>
                Search
              </Button>

              <Button
                type="button"
                variant="big"
                onClick={() => handleClear(resetForm)}
                className={css.clearBtn}
              >
                <Icon
                  name="cross"
                  className={css.clearIcon}
                  width={12}
                  height={12}
                />
                Clear filters
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </aside>
  );
};

export default Sidebar;
