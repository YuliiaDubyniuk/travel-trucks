import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './BookingForm.module.css';

//validation schema for the Booking form
const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Please enter a valid name.')
    .min(2, 'Name should contain at least 2 characters.')
    .required('Please enter your name.'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please enter your email.'),
});

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Data Submitted:', values);
    toast.success(`Thank you, ${values.name}! We'll reach out to you shortly.`);

    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <Field
                type="text"
                name="name"
                placeholder=" "
                className={`${css.input} ${errors.name && touched.name ? css.inputError : ''}`}
              />
              <label className={css.label}>Name*</label>

              {/* render icon only when wrong/missing name value */}
              {errors.name && touched.name && (
                <Icon
                  name="warning"
                  width={24}
                  height={24}
                  className={css.warningIcon}
                />
              )}
              <ErrorMessage
                name="name"
                component="span"
                className={css.errorText}
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                type="email"
                name="email"
                placeholder=" "
                className={`${css.input} ${errors.email && touched.email ? css.inputError : ''}`}
              />
              <label className={css.label}>Email*</label>

              {/* render icon only when wrong/missing email value */}
              {errors.email && touched.email && (
                <Icon
                  name="warning"
                  width={24}
                  height={24}
                  className={css.warningIcon}
                />
              )}
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorText}
              />
            </div>

            <Button type="submit" variant="big" className={css.submitBtn}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
