import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://161.35.101.229:3001/api/',
  headers: {
    'Content-Type': 'application/json',
    timeout: 1000,
  },
});

export default instance;
