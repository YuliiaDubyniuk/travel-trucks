import CamperMedia from '../CamperMedia/CamperMedia';
import CamperInfo from './CamperInfo';
import VehicleDetails from './VehicleDetails';
import css from './CamperDetails.module.css';

const CamperDetails = ({ camper }) => {
  return (
    <div className={css.topSection}>
      <div className={css.topSection}>
        <CamperMedia gallery={camper.gallery} />

        <div className={css.detailsSection}>
          <CamperInfo camper={camper} />
          <VehicleDetails camper={camper} />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
