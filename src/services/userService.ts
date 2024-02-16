// src/services/userService.ts
import axios from "axios";

const API_URL = "http://localhost:3000"; // Reemplaza esto con la URL de tu servidor backend

export const login = (username: string, password: string) => {
  return axios.post(`${API_URL}/login`, { username, password });
};
