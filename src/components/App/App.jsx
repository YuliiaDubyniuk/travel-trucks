import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../../Layout/Layout';
import Loader from '../Loader/Loader';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
// import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(
  () => import('../../pages/CamperDetailsPage/CamperDetailsPage')
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:camperId" element={<CamperDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
