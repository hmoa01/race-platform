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
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000/api';

// errorComposer will compose a handleGlobally function
const errorComposer = (error) => {
  return () => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 404) {
      toast.error(error?.response?.data?.error?.message ?? 'Unexpected error');
    }
    if (statusCode === 401) {
      toast('Please login first');
      window.location = '/';
      // TODO: CLEAR ALL FORM LOCAL STORAGE
    }
    if (statusCode === 500) {
      toast('Server error');
    }
  };
};

axios.interceptors.response.use(undefined, function (error) {
  error.handleGlobally = errorComposer(error);

  return Promise.reject(error);
});

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
