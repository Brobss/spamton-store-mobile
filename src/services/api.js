import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: "https://spamton-store-backend-dev-qzhk.1.us-1.fl0.io/",
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
