import axios from 'axios';

const API_URL = 'http://localhost:4000/data';

const mockService = ({
  loadData: () => axios.get(API_URL)
});

export default mockService;