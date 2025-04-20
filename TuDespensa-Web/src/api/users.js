import axios from "./axios";
export const getUsersRequest = () => axios.get("/users");
export const updateUserRequest = (id, userData) =>
  axios.put(`/user/${id}`, userData);
export const deleteUserRequest = (id) => axios.delete(`/user/${id}`);
