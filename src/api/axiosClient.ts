import axios from 'axios';
import { SERVER_HOST } from 'constants/common';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const axiosClient = axios.create({
  baseURL: `${SERVER_HOST}api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders: any = {};
  if (cookies.get('token')) {
    customHeaders.Authorization = `Bearer ${cookies.get('token')}`;
  }
  return {
    ...config,
    headers: {
      ...customHeaders,
      ...config.headers,
    },
  };
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {

    const { config, status, data } = error.response;
    const URLs = ['/auth/login','/auth/register'];

    if (URLs.includes(config.url) && status === 500) {
      const errorMsg = data.message || "";

      throw new Error(errorMsg);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;