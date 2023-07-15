import Login from '../pages/Login/Login';
import StartLayout from '../pages/StartLayout/StartLayout';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage';
import MainLayout from '../pages/MainLayout/MainLayout';
import DashboardPage from '../pages/MainLayout/DashboardPage/DashboardPage';
import RacePage from '../pages/MainLayout/RacePage/RacePage';
import CalendarPage from '../pages/CalendarPage/CalendarPage';

export const publicRoutes = [
  {
    path: '/',
    element: <StartLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  { path: '/register', element: <RegisterPage /> },
  { path: '/reset', element: <ResetPasswordPage /> },
];

export const userRoutes = [
  {
    path: '/dashboard/user',
    element: <MainLayout />,
    children: [
      { path: '/dashboard/user/race', element: <RacePage /> },
      { path: '/dashboard/user/calendar', element: <CalendarPage /> },
    ],
  },
];

export const adminRoutes = [
  {
    path: '/dashboard/admin',
    element: <MainLayout />,
    children: [
      { path: '/dashboard/admin/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/admin/race/', element: <RacePage /> },
      { path: '/dashboard/admin/calendar', element: <CalendarPage /> },
    ],
  },
];

export const superAdminRoutes = [
  {
    path: '/dashboard/superadmin',
    element: <MainLayout />,
    children: [
      { path: '/dashboard/superadmin/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/superadmin/race', element: <RacePage /> },
      { path: '/dashboard/superadmin/calendar', element: <CalendarPage /> },
    ],
  },
];
