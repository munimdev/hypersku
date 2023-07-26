import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
