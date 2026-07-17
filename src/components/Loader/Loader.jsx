import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.spinnerWrapper}>
          <RotatingLines
            visible={true}
            height="72"
            width="72"
            color="#829B91"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
        <h3 className={css.title}>Loading tracks...</h3>
        <p className={css.text}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
};

export default Loader;
