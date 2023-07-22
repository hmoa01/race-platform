import axiosInstance from '../helpers/axiosConfig';

class RaceServices {
  static getAllRaces = () => axiosInstance.get('/race/all');
  static getSingleRace = (id) => axiosInstance.get(`/race/${id}`);
  static createRace = (body) => axiosInstance.post('/race/add', body);
  static editRace = (id, body) => axiosInstance.put(`/race/${id}`, body);
  static deleteRace = (id) => axiosInstance.delete(`/race/${id}`);
}

export default RaceServices;
