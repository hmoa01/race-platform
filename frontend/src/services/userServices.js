import axiosInstance from '../helpers/axiosConfig';

class UserService {
  static loginUser = async (body) => axiosInstance.post('/auth/login', body);
  static loginWithGoogle = async (body) => axiosInstance.post('/auth/google', body);
  static registerUser = async (body) => axiosInstance.post('/auth/register', body);
}

export default UserService;
