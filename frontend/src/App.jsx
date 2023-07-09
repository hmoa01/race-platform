import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import StartLayout from './pages/StartLayout/StartLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import MainLayout from './pages/MainLayout/MainLayout';
import DashboardPage from './pages/MainLayout/DashboardPage/DashboardPage';
import RacePage from './pages/MainLayout/RacePage/RacePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';

axios.defaults.baseURL = 'http://localhost:4000/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/reset', element: <ResetPasswordPage /> },
    ],
  },
  {
    path: '/main',
    element: <MainLayout />,
    children: [
      { path: '/main/dashboard', element: <DashboardPage /> },
      { path: '/main/race', element: <RacePage /> },
      { path: '/main/calendar', element: <CalendarPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
