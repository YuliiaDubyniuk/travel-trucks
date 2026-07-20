import sprite from '../../assets/sprite.svg';

export default function Icon({
  name,
  width = 16,
  height = 16,
  className = '',
}) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
}
