import { Navigate, createBrowserRouter } from 'react-router-dom';

import AuthGuarding from './helpers/AuthGuardian';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import ContestantsPage from './pages/ContestantsPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Login from './pages/Login/Login';
import MainLayout from './components/MainLayout/MainLayout';
import RacePage from './pages/RacePage/RacePage';
import Register from './pages/RegisterPage/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import { isAuth } from './helpers/Auth';

const AppRouter = () => {
  const reactRouter = createBrowserRouter([
    { path: '/', element: !isAuth() ? <Navigate to="/login" /> : <Navigate to="/dashboard" /> },
    {
      path: '/dashboard',
      element: (
        <AuthGuarding>
          <MainLayout />
        </AuthGuarding>
      ),
      children: [
        { path: '/dashboard', element: <DashboardPage />, index: 0 },
        { path: '/dashboard/race', element: <RacePage /> },
        { path: '/dashboard/contestants', element: <ContestantsPage /> },
        { path: '/dashboard/calendar', element: <CalendarPage /> },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/reset',
      element: <ResetPasswordPage />,
    },
  ]);
  return reactRouter;
};

export default AppRouter;
