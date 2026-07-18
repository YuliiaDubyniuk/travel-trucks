import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    gallery,
    transmission,
    engine,
    form,
  } = camper;

  const previewFeatures = [
    {
      key: 'engine',
      icon: 'pump',
      value: engine,
    },
    {
      key: 'transmission',
      icon: 'transmission',
      value: transmission,
    },
    {
      key: 'form',
      icon: 'car',
      value: form,
    },
  ];

  const MAX_CHARS = 65;

  const getTruncatedText = text => {
    if (!text || text.length <= MAX_CHARS) return text;

    const subset = text.slice(0, MAX_CHARS + 1);
    const lastSpace = subset.lastIndexOf(' ');

    if (lastSpace > 0) {
      return `${text.slice(0, lastSpace)}...`;
    }

    return `${text.slice(0, MAX_CHARS)}...`;
  };

  return (
    <li className={css.card}>
      <img className={css.image} src={gallery[0].thumb} alt={name} />

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{name}</h2>

          <p className={css.price}>€{Number(price).toLocaleString('en-US')}</p>
        </div>

        <div className={css.meta}>
          <div className={css.metaItem}>
            <Icon name="star" width={16} height={16} className={css.starIcon} />
            <span>
              {rating}({reviews.length} Reviews)
            </span>
          </div>

          <div className={css.metaItem}>
            <Icon name="map" width={16} height={16} />
            <span>{location}</span>
          </div>
        </div>

        <p className={css.description}>{getTruncatedText(description)}</p>

        <ul className={css.features}>
          {previewFeatures.map(({ key, icon, value }) => (
            <li key={key} className={css.feature}>
              <Icon name={icon} />
              <span>{value}</span>
            </li>
          ))}
        </ul>

        <Button to={`/catalog/${id}`} variant="small">
          Show more
        </Button>
      </div>
    </li>
  );
};

export default CamperCard;
