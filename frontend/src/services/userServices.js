import axios from 'axios';

class userService {
  static loginUser = async (body) => axios.post('/auth/login', body);
  static registerUser = async (body) => axios.post('/auth/register', body);
}

export default userService;
