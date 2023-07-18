import axiosInstance from '../helpers/axiosConfig';

class RaceServices {
  static getAllRaces = () => axiosInstance.get('/race/all');
  static createRace = (body) => axiosInstance.post('/race/add', body);
}

export default RaceServices;
