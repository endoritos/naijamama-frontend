import React from 'react';
import '../styles/App.css';

const HomePage = () => {
  return (
    <div className="homepage" style={{ backgroundImage: 'url(/opening.jpg)' }}>
      {/* here the orginea pic form https://unsplash.com/photos/woman-standing-in-the-middle-of-wheat-field-GSh_PwsZsPQ */}

      <div className="flex flex-col items-center justify-center h-screen text-center text-white">
        <h1 className="homepage-title">Native </h1>
        <h2 className="homepage-subtitle">Tradition brouth to you</h2>
        <p className="homepage-text">Naijamama</p>
        <span className="homepage-contact">0492 396 583</span>
        <a href="#" className="homepage-button">Bestel nu!</a>
        <div className="mt-4">
          <a href="#" className="homepage-link">Get directions</a>
          <span className="homepage-divider">|</span>
          <a href="#" className="homepage-link">Business hours</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;