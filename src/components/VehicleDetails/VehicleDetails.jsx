import css from './VehicleDetails.module.css';

const VehicleDetails = ({
  camper: {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) => {
  const features = [];

  if (transmission)
    features.push(transmission === 'automatic' ? 'Automatic' : 'Manual');
  if (engine) features.push(engine.charAt(0).toUpperCase() + engine.slice(1));
  if (AC) features.push('AC');
  if (bathroom) features.push('Bathroom');
  if (kitchen) features.push('Kitchen');
  if (TV) features.push('TV');
  if (radio) features.push('Radio');
  if (refrigerator) features.push('Refrigerator');
  if (microwave) features.push('Microwave');
  if (gas) features.push('Gas');
  if (water) features.push('Water');
  if (form)
    features.push(
      form === 'panel-van'
        ? 'Panel Van'
        : form.charAt(0).toUpperCase() + form.slice(1)
    );

  return (
    <div className={css.techCard}>
      <h2 className={css.sectionHeading}>Vehicle details</h2>

      <ul className={css.badgeList}>
        {features.map((feature, idx) => (
          <li key={idx} className={css.badgeItem}>
            {feature}
          </li>
        ))}
      </ul>

      <ul className={css.specList}>
        <li className={css.specRow}>
          <span>Form</span>
          <span>{form}</span>
        </li>
        <li className={css.specRow}>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li className={css.specRow}>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li className={css.specRow}>
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li className={css.specRow}>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li className={css.specRow}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
