import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import StartLayout from './pages/StartLayout/StartLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import MainLayout from './pages/MainLayout/MainLayout';
import DashboardPage from './pages/MainLayout/DashboardPage/DashboardPage';
import RacePage from './pages/MainLayout/RacePage/RacePage';
import InboxPage from './pages/MainLayout/InboxPage/InboxPage';
import CustomersPage from './pages/MainLayout/CustomersPage/CustomersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'reset', element: <ResetPasswordPage /> },
      {
        path: 'main',
        element: <MainLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'race', element: <RacePage /> },
          { path: 'inbox', element: <InboxPage /> },
          { path: 'customers', element: <CustomersPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
