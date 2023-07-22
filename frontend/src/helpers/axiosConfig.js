import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios;

axiosInstance.defaults.baseURL = 'http://localhost:4000/api';

axiosInstance.defaults.headers['authorization'] = localStorage.getItem('rp_token');

// errorComposer will compose a handleGlobally function
const errorComposer = (error) => {
  console.log('error.code');
  console.log(error.code);
  return () => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 404) {
      toast.error(error?.response?.data?.error?.message ?? 'Unexpected error');
    }
    if (statusCode === 401) {
      toast('Please login first');
      window.location = '/';
      // TODO: CLEAR ALL FORM LOCAL STORAGE
      localStorage.removeItem('rp_token');
      localStorage.removeItem('rp_user');
    }
    if (statusCode === 500) {
      toast('Server error');
    }
  };
};

axiosInstance.interceptors.response.use(undefined, function (error) {
  error.handleGlobally = errorComposer(error);

  return Promise.reject(error);
});

export default axiosInstance;
