import CamperMedia from '../CamperMedia/CamperMedia';
import CamperInfo from '../CamperInfo/CamperInfo';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import css from './CamperDetails.module.css';

const CamperDetails = ({ camper }) => {
  return (
    <div className={css.topSection}>
      <CamperMedia camper={camper} />

      <div className={css.detailsSection}>
        <CamperInfo camper={camper} variant="details" />
        <VehicleDetails camper={camper} />
      </div>
    </div>
  );
};

export default CamperDetails;
