import Icon from '../Icon/Icon';
import css from './CamperInfo.module.css';

const CamperInfo = ({
  camper: { name, rating, reviews, location, price, description },
}) => {
  return (
    <div className={css.infoCard}>
      <h1 className={css.title}>{name}</h1>

      <div className={css.metaRow}>
        <Icon name="star" width={16} height={16} className={css.starIcon} />
        <span className={css.review}>
          {rating}({reviews.length} Reviews)
        </span>
        <Icon name="map" width={16} height={16} />
        <span className={css.location}> {location}</span>
      </div>

      <p className={css.price}>€{Number(price).toLocaleString('en-US')}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CamperInfo;
