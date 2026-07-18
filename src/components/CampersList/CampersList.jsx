import { useSelector } from 'react-redux';
import { selectFilteredCampers } from '../../redux/selectors';
import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

const CampersList = () => {
  const campers = useSelector(selectFilteredCampers);

  return (
    <ul className={css.cardList}>
      {campers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;
