import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import UsersPage from './components/UsersPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/register" element={<RegisterForm/>} component={RegisterForm} />
        <Route path="/login" element={<LoginForm />} component={LoginForm} />

      </Routes>
    </Router>
  );
};

export default App;