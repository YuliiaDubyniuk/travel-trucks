import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/filtersSlice';
import notFoundImg from '../../assets/images/camper.png';
import notFoundImg2x from '../../assets/images/camper@2x.png';
import notFoundImgWebp from '../../assets/images/camper.webp';
import notFoundImgWebp2x from '../../assets/images/camper@2x.webp';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={css.pageWrapper}>
      <picture className={css.image}>
        <source
          type="image/webp"
          srcSet={`${notFoundImgWebp} 1x, ${notFoundImgWebp2x} 2x`}
        />
        <source
          type="image/png"
          srcSet={`${notFoundImg} 1x, ${notFoundImg2x} 2x`}
        />
        <img src={notFoundImg} alt="No campers found" className={css.image} />
      </picture>
      <h3 className={css.title}>No campers found</h3>
      <p className={css.text}>
        We couldn`t find any campers that match your filters. Try adjusting your
        search or clearing some filters.
      </p>
      <div className={css.btnGroup}>
        <Button
          type="button"
          onClick={() => handleClear()}
          className={css.clearBtn}
        >
          <Icon name="cross" className={css.clearIcon} width={12} height={12} />
          Clear filters
        </Button>
        <Button type="button" onClick={() => handleClear()}>
          View all campers
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
