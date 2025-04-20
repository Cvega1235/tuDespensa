import axios from "./axios";
export const loginRequest = (user) => axios.post("/login", user);
export const verifyTokenRequest = () => axios.get("/verify");
export const registerRequest = (user) => axios.post("/register", user);
export const registerAdminRequest = (user) =>
  axios.post("/registerAdmin", user);

// export const verifyEmailRequest = (code) =>
//   axios.post("/verify-email", { code });
// export const registerUserRequest = (user) => axios.post("/add-user", user);
