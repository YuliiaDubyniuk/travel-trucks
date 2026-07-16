import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.appHeader}>
        <Navigation />
      </header>
      <main className={css.mainLayout}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
