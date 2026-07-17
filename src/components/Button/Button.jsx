import { Link } from 'react-router-dom';
import css from './Button.module.css';

export default function Button({
  children,
  to,
  variant = 'small',
  className = '',
  type = 'button',
}) {
  const combinedClassName =
    `${css.btn} ${css[variant] ?? ''} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName}>
      {children}
    </button>
  );
}
