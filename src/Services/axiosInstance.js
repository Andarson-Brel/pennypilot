import axios from "axios";

const axiosInstance = axios.create({

  baseURL: "https://c2v386fr-8080.euw.devtunnels.ms",

  // withCredentials: true,
});

// Request interceptor to handle headers dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.data && config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
