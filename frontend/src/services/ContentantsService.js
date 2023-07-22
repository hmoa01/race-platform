import axiosInstance from '../helpers/axiosConfig';

class ContestantsService {
  static getAllContestants = async () => axiosInstance.get('/contestant/all');
}

export default ContestantsService;
