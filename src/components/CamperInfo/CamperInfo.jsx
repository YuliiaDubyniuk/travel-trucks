import Icon from '../Icon/Icon';
import css from './CamperInfo.module.css';

const CamperInfo = ({
  camper: { name, rating, reviews, location, price, description },
  variant = 'details',
}) => {
  const isCard = variant === 'card';

  return (
    <div className={`${css.infoCard} ${css[variant]}`}>
      {/* wrap to handle different layout in the card variant*/}
      <div className={css.titlePriceRow}>
        <h1 className={css.title}>{name}</h1>
        {isCard && (
          <p className={css.price}>€{Number(price).toLocaleString('en-US')}</p>
        )}
      </div>
      <div className={css.metaRow}>
        <Icon name="star" className={css.starIcon} />
        <span className={css.review}>
          {rating}({reviews.length} Reviews)
        </span>
        <Icon name="map" />
        <span className={css.location}> {location}</span>
      </div>

      {/* render price below meta row only on the details page variant */}
      {!isCard && (
        <p className={css.price}>€{Number(price).toLocaleString('en-US')}</p>
      )}

      <p className={`${css.description} ${isCard ? css.truncated : ''}`}>
        {description}
      </p>
    </div>
  );
};

export default CamperInfo;
