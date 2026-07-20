import CamperInfo from '../CamperInfo/CamperInfo';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const { id, gallery, transmission, engine, form } = camper;

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

  return (
    <li className={css.card}>
      <img className={css.image} src={gallery[0].thumb} alt={name} />

      <div className={css.content}>
        <CamperInfo camper={camper} variant="card" />

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
