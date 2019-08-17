import axios from "axios";

const axiosInstance = axios.create({
  timeout: 3000
  // headers: {
  //   authorization: `Bearer ${localStorage.getItem("vue-meetup-jwt") || ""}`
  // }
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("vue-meetup-jwt") || "";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
