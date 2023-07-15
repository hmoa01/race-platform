import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import {
  publicRoutes,
  adminRoutes,
  superAdminRoutes,
  userRoutes,
} from './routes/routes';
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

function App() {
  let user = JSON.parse(localStorage.getItem('rp_user'));

  const getRoutesByUserRole = () => {
    if (!user) {
      return [...publicRoutes];
    }
    if (user.role === 'superadmin') {
      return [...superAdminRoutes];
    } else if (user.role === 'admin') {
      return [...adminRoutes];
    } else {
      return userRoutes;
    }
  };

  let router;
  if (!user) {
    router = createBrowserRouter([...publicRoutes]);
  } else {
    router = createBrowserRouter([...publicRoutes, ...getRoutesByUserRole()]);
  }

  return <RouterProvider router={router} />;
}

export default App;
