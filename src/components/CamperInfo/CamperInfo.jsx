import Icon from '../Icon/Icon';
import css from './CamperInfo.module.css';

const CamperInfo = ({
  camper: { name, rating, reviews, location, price, description },
}) => {
  return (
    <div className={css.infoCard}>
      <h1 className={css.title}>{name}</h1>

      <div className={css.metaRow}>
        <Icon name="star" />
        <span>
          {rating}({reviews.length} Reviews)
        </span>
        <span>{location}</span>
      </div>

      <p className={css.price}>€{Number(price).toLocaleString('en-US')}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CamperInfo;
