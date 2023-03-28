import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const GamePage = lazy(() => import('../pages/game'));
const HomePage = lazy(() => import('../pages/home'));
const NotFoundPage = lazy(() => import('../pages/notFound'));

import { ROUTE } from './constants';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.GAME} element={<GamePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRoutes;
