// src/services/memeService.ts
import axios from "axios";
import { Meme } from "../models/Meme";

const API_URL = "http://localhost:3000"; // Reemplaza esto con la URL de tu servidor backend

export const getMemes = () => {
  return axios.get(`${API_URL}/memes`);
};

export const getMemeById = (id: number) => {
  return axios.get(`${API_URL}/memes/${id}`);
};

export const createMeme = (newMeme: Meme) => {
  return axios.post(`${API_URL}/memes`, newMeme);
};
