import './App.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RacePage from './pages/RacePage/RacePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import Login from './pages/Login/Login';
import Register from './pages/RegisterPage/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import MainLayout from './components/MainLayout/MainLayout';
import { isAuth } from './helpers/Auth';
import AuthGuarding from './helpers/AuthGuardian';

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard/"
          element={
            <AuthGuarding>
              <MainLayout />
            </AuthGuarding>
          }
        >
          <Route path="/dashboard/" element={<DashboardPage />} />
          <Route path="/dashboard/race" element={<RacePage />} />
          <Route path="/dashboard/calendar" element={<CalendarPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route
          path="/"
          element={
            !isAuth ? <Navigate to="/login" /> : <Navigate to="/dashboard" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
