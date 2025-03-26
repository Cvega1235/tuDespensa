import axios from "axios";
const instance = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://backend-production-e141.up.railway.app/",
  withCredentials: true,
});
export default instance;
