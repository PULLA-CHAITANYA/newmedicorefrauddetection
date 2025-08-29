import axios from "axios";

const api = axios.create({
  baseURL: "https://medicarefraudservice-fahvamaaftc5e9f2.centralindia-01.azurewebsites.net/api",
});

api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default api;
