import axios from 'axios';
import mockData from './mockData3'

const mockService = ({
  loadEvents: () => Promise.resolve({ data: JSON.parse(mockData) })
});

export default mockService;