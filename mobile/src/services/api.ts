import axios from 'axios';

const API = axios.create({
   baseURL: 'http://192.168.15.28:3333', 
});

export default API;