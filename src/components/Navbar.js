import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div>
          <Link to="/" className="text-primary-foreground text-lg font-semibold">Home</Link>
        </div>
        <div>
          <Link to="/about" className="text-primary-foreground hover:text-primary/80 px-4">About</Link>
          <Link to="/services" className="text-primary-foreground hover:text-primary/80 px-4">Services</Link>
          <Link to="/contact" className="text-primary-foreground hover:text-primary/80 px-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;