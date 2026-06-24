import axios from "axios";

const BASE_URL = "http://localhost:8080/auth";

export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register`, data);
};

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/login`, data);
};

export const getUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};