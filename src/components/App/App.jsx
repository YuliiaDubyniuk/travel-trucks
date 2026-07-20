import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { ToastContainer } from 'react-toastify';

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
            <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-center"
        autoClose={3500}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
