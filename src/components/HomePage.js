import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}>
      <nav className="bg-primary shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div>
            <a href="#" className="text-primary-foreground text-lg font-semibold">Home</a>
          </div>
          <div>
            <a href="#" className="text-primary-foreground hover:text-primary/80 px-4">About</a>
            <a href="#" className="text-primary-foreground hover:text-primary/80 px-4">Services</a>
            <a href="#" className="text-primary-foreground hover:text-primary/80 px-4">Contact</a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Online Nachtwinkel</h1>
        <h2 className="text-6xl font-extrabold mb-2">Nachtwinkel Aan Huis</h2>
        <p className="text-2xl mb-4">Snel Geleverd! (25-30 min)</p>
        <span className="text-lg mb-4">0492 396 583</span>
        <a href="#" className="bg-accent text-accent-foreground py-2 px-4 rounded-lg">Bestel nu!</a>
        <div className="mt-4">
          <a href="#" className="text-muted-foreground hover:underline">Get directions</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-muted-foreground hover:underline">Business hours</a>
        </div>
      </div>
    </div>
  );
};
export default HomePage;