import axios from 'axios';
import { SERVER_HOST } from 'constants/common';
const axiosClient = axios.create({
  baseURL: `${SERVER_HOST}api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosClient.interceptors.request.use(async (config) => {
  const customHeaders: any = {};
  const accessToken = decodeURIComponent(document.cookie.split('=')[1]);
  if (accessToken) {
    customHeaders.Authorization = `Bearer ${accessToken}`;
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