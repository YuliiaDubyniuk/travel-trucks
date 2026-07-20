import { Link, Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.appHeader}>
        <Container className={css.headerContainer}>
          <Link to="/" className={css.logoLink}>
            Travel<span>Tracks</span>
          </Link>
          <Navigation />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
