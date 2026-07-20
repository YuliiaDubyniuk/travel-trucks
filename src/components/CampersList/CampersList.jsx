import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../../redux/filtersSlice';
import CamperCard from '../CamperCard/CamperCard';
import Button from '../Button/Button';
import css from './CampersList.module.css';
import {
  selectCampers,
  selectLoading,
  selectMore,
} from '../../redux/selectors';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const hasMore = useSelector(selectMore);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div>
      <ul className={css.cardList}>
        {campers.map(camper => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
      {campers.length > 0 && hasMore && (
        <Button type="button" onClick={handleLoadMore} className={css.moreBtn}>
          {isLoading ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </div>
  );
};

export default CampersList;
