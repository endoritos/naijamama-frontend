import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5053/api', // Replace with your C# API base URL
});

export const fetchUsers = () => API.get('/users');
export const addUser = (user) => API.post('/users', user);

export const registerUser = (userData) => API.post('/users', userData);
export const loginUser = (credentials) => API.post('/login', credentials);

export default API;

