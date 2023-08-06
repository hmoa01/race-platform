import axiosInstance from '../helpers/axiosConfig';

class UserService {
  static loginUser = async (body) => axiosInstance.post('/auth/login', body);
  static loginWithGoogle = async (body) => axiosInstance.post('/auth/google', body);
  static registerUser = async (body) => axiosInstance.post('/auth/register', body);
  static forgetPassword = async (body) => axiosInstance.post('forget-password', body);
  static resetPassword = async (body) => axiosInstance.post('/reset-password', body);
}

export default UserService;
