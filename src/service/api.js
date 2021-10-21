import axios from 'axios';


const api = axios.create({
  //baseURL: 'http://192.168.43.120:3333/',
  baseURL: 'http://localhost:3333/',
});

api.interceptors.request.use( (config) => {
  try {

    return config;
  } catch (err) {
    //alert(err);
  }
});

export default api;