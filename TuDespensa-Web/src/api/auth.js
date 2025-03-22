import axios from "./axios";
export const loginRequest = (user) => axios.post("/login", user);
export const verifyTokenRequest = () => axios.get("/verify");
export const registerRequest = (user) => axios.post("/register", user);
// export const registerUserRequest = (user) => axios.post("/add-user", user);
