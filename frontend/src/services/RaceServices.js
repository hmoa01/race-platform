import axiosInstance from '../helpers/axiosConfig';

class RaceServices {
  static createRace = (body) => axiosInstance.post('/race/add', body);
}

export default RaceServices;
