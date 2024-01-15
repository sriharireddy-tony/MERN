import axios from 'axios';

const accessToken = sessionStorage.getItem('accessToken');

const axiosHttpHandler = axios.create({

  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${accessToken}`
    // Add any other default headers here
  },
});

// Interceptors for request and response
axiosHttpHandler.interceptors.request.use(
  (config) => {
    // Modify request config (if needed) before sending the request
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

axiosHttpHandler.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response.data;
  },
  (error) => {
  

    // Handle error responses
    return Promise.reject(error);
  }
);

export default axiosHttpHandler;