import { Route, Routes } from 'react-router-dom';
import GamePage from '../pages/game';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notFound';
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
