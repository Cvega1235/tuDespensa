import axios from "axios";
console.log("BACKEND URL:", import.meta.env.VITE_IP_LOCAL_BACKEND);
const instance = axios.create({
  baseURL: import.meta.env.VITE_IP_LOCAL_BACKEND,
  //baseURL: "https://backend-production-e141.up.railway.app/api",
  withCredentials: true,
});
export default instance;
