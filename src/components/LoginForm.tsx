import React, { useState , ChangeEvent , FormEvent} from 'react';
import { loginUser } from '../services/api';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      console.log('User logged in:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-primary">
      <div className="bg-card dark:bg-card-foreground rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-foreground mb-4">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-secondary-foreground">Email</label>
            <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Enter your email" className="w-full mt-1 p-2 rounded border border-input focus:outline-none focus:ring focus:ring-ring" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-secondary dark:text-secondary-foreground">Password</label>
            <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Enter your password" className="w-full mt-1 p-2 rounded border border-input focus:outline-none focus:ring focus:ring-ring" required />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground p-2 rounded hover:bg-primary/80 focus:outline-none focus:ring focus:ring-ring">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;