import css from './Error.module.css';

const Error = () => {
  return (
    <div className={css.errorPage}>
      <p className={css.title}>
        Oops... Something went wrong. Please try reloading the page.
      </p>
    </div>
  );
};

export default Error;
