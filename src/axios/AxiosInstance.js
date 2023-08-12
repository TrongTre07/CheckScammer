import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://linux.huyta.codes/api/',
  headers: {
    'Content-Type': 'application/json',
    timeout: 1000,
  },
});

export default instance;
