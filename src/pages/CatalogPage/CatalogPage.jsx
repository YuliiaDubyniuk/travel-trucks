import Sidebar from '../../components/Sidebar/Sidebar';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <Container className={css.catalogContainer}>
      <Sidebar />
      <CampersList />
    </Container>
  );
};

export default CatalogPage;
