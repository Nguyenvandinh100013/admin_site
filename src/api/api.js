import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-api-url.com",
});

// Thêm token vào Header nếu có
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (data) => API.post("/api/login", data);
export const signup = (data) => API.post("/api/signup", data);


export const getUsers = () => API.get("/api/users");
export const createUser = (data) => API.post("/api/users", data);
export const updateUser = (id, data) => API.put(`/api/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/api/users/${id}`);

export const getTrips = () => API.get("/api/trips");
export const createTrip = (data) => API.post("/api/trips", data);
export const updateTrip = (id, data) => API.put(`/api/trips/${id}`, data);
export const deleteTrip = (id) => API.delete(`/api/trips/${id}`);
