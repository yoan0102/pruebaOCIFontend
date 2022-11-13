import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
