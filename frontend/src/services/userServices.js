import axiosInstance from '../helpers/axiosConfig';

class UserService {
  static loginUser = async (body) => axiosInstance.post('/auth/login', body);
  static registerUser = async (body) => axiosInstance.post('/auth/register', body);

  static getRemember = () => JSON.parse(localStorage.getItem('remember'));
  static setRemember = () => localStorage.setItem('remember', true);
}

export default UserService;
