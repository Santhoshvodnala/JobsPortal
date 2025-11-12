import API from "./axios";

export const registerUser = (payload) =>
  API.post("/auth/register", payload).then((r) => r.data);
export const loginUser = (payload) =>
  API.post("/auth/login", payload).then((r) => r.data); // { accessToken }
export const fetchMe = () => API.get("/auth/me").then((r) => r.data); // { id, email, role }
