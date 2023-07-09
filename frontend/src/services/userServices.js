import axios from 'axios';

class userService {
  static loginUser = async (body) => axios.post('/auth/login', body);
}

export default userService;
