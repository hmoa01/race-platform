import axiosInstance from '../helpers/axiosConfig';

class UserService {
  static loginUser = async (body) => axiosInstance.post('/auth/login', body);
  static registerUser = async (body) => axiosInstance.post('/auth/register', body);
}

export default UserService;
