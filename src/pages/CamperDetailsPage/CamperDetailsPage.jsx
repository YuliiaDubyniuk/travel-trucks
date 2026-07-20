import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCamperDetails } from '../../redux/campersOps';
import {
  selectLoading,
  selectError,
  selectSelectedCamper,
} from '../../redux/selectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import Container from '../../components/Container/Container';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import Reviews from '../../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';
import css from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperDetails(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {error && <Error />}
      {camper && (
        <Container className={css.detPageWrapper}>
          <CamperDetails camper={camper} />
          {/* top layout part */}
          <div className={css.bottomSection}>
            <Reviews reviews={camper.reviews} />
            <BookingForm />
          </div>
        </Container>
      )}
    </>
  );
};

export default CamperDetailsPage;
