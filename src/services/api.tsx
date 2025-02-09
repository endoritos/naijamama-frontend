import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5053/api', // Replace with your C# API base URL
});


interface User {
  name: string;
  password: string;
}

interface UserData {
  name: string;
  password: string;
  email: string;
}

interface Credentials {
  name: string;
  password: string;
}

export const fetchUsers = () => API.get('/users');
export const addUser = (user: User) => API.post('/users', user);
export const registerUser = (userData: UserData) => API.post('/users', userData);
export const loginUser = (credentials: Credentials) => API.post('/login', credentials);

export default API;

