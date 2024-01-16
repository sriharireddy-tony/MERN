import axios from 'axios';
import { refreshToken1 } from '../utils/apiService';

const API_URL = 'http://localhost:3000/';

const axiosHttpHandler = axios.create({

  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
    // Add any other default headers here
  },
});

// Interceptors for request and response
axiosHttpHandler.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
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
  async (error) => {
    // const navigate = useNavigate();
    const request = error.config;
    if (error.response.status === 401 && !request._retry) {
      console.log('access Token expired');
      request._retry = true;
      try {
        const refreshToken = sessionStorage.getItem('accessToken');
        let payload = {
          'token' :refreshToken
        }
        // const res = await axios.post(refreshToken, { refreshTok })

        const res1 = await fetch(API_URL + refreshToken1, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify(payload),
        });
        const res = await res1.json();
console.log(res);

        sessionStorage.setItem('accessToken', res.data.accessToken);
        request.Authorization = `Bearer ${res.data.accessToken}`
        console.log('Refresh Token generated');
        // eslint-disable-next-line no-undef
        return instance(request)

      } catch (err) {
        console.log('Refresh Token expired');
        alert('session expired!');
      // window.location.href = '/';
      }
    }
    // Handle error responses
    return Promise.reject(error);
  }
);

export default axiosHttpHandler;