import Container from '../../components/Container/Container';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import Reviews from '../../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';
import css from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
  return (
    <Container>
      <CamperDetails />
      {/* top layout part */}
      <div className={css.bottomSection}>
        <Reviews />
        <BookingForm />
      </div>
    </Container>
  );
};

export default CamperDetailsPage;
