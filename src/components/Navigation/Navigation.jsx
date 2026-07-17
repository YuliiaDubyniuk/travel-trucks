import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const addClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink className={addClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={addClass} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
