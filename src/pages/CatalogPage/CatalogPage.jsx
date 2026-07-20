import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectLoading,
  selectError,
  selectLocation,
  selectFormFilter,
  selectEngineFilter,
  selectTransmissionFilter,
  selectPage,
} from '../../redux/selectors';
import { fetchAllCampers } from '../../redux/campersOps';
import Sidebar from '../../components/Sidebar/Sidebar';
import Loader from '../../components/Loader/Loader';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import Error from '../../components/Error/Error';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const location = useSelector(selectLocation);
  const form = useSelector(selectFormFilter);
  const engine = useSelector(selectEngineFilter);
  const transmission = useSelector(selectTransmissionFilter);
  const page = useSelector(selectPage);

  useEffect(() => {
    const filters = { location, form, engine, transmission };
    dispatch(fetchAllCampers({ page, filters }));
  }, [dispatch, page, location, form, engine, transmission]);

  const is404Error = error && error.includes('404') && page === 1;
  const isOtherError = error && !error.includes('404');

  return (
    <Container className={css.catalogContainer}>
      <Sidebar />

      {isLoading && <Loader />}
      {isOtherError && <Error />}
      {is404Error ? <NotFoundPage /> : <CampersList />}
    </Container>
  );
};

export default CatalogPage;
