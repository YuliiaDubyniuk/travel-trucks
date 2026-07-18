import { Link } from 'react-router-dom';
import css from './Button.module.css';

export default function Button({
  children,
  to,
  variant = 'small',
  className = '',
  type = 'button',
  ...props
}) {
  const combinedClassName =
    `${css.btn} ${css[variant] ?? ''} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
