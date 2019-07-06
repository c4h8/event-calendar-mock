import axios from 'axios';
import mockData from './mockData3'

const API_URL = 'http://localhost:4000/data';

const mockService = ({
  loadData: () => axios.get(API_URL)
});

const mockServiceHeroku = ({
  loadData: () => {
    return new Promise((resolve) => {
      resolve(mockData)
    })
  },
})

export default (process.env.NODE_ENV === 'production') ? mockServiceHeroku : mockService;