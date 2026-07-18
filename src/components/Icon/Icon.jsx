import sprite from '../../assets/sprite.svg';

export default function Icon({
  name,
  width = 20,
  height = 20,
  className = '',
}) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
}
