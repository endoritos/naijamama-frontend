import React from 'react';
import '../styles/App.css';

const HomePage = () => {
  return (
    <div>
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

      <section>
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">New in</h2>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4">
              <div className="min-w-[200px] bg-card rounded-lg shadow-lg">
                <img src="https://placehold.co/200x300" alt="COLLUSION long sleeve t-shirt in burnt orange" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">COLLUSION long sleeve t-shirt in burnt orange</h3>
                  <p className="text-muted-foreground">€27.99</p>
                </div>
              </div>
              <div className="min-w-[200px] bg-card rounded-lg shadow-lg">
                <img src="https://placehold.co/200x300" alt="ASOS DESIGN unisex oversized license t-shirt with Muse D'Art prints in white" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">ASOS DESIGN unisex oversized license t-shirt with Muse D'Art prints in white</h3>
                  <p className="text-muted-foreground">€24.99</p>
                </div>
              </div>
              <div className="min-w-[200px] bg-card rounded-lg shadow-lg">
                <img src="https://placehold.co/200x300" alt="ASOS DESIGN oversized boxy polo jumper with embroidered pocket in latte" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">ASOS DESIGN oversized boxy polo jumper with embroidered pocket in latte</h3>
                  <p className="text-muted-foreground">€39.99</p>
                </div>
              </div>
              <div className="min-w-[200px] bg-card rounded-lg shadow-lg">
                <img src="https://placehold.co/200x300" alt="ASOS DESIGN oversized boxy shirt with summer knit in burgundy" className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">ASOS DESIGN oversized boxy shirt with summer knit in burgundy</h3>
                  <p className="text-muted-foreground">€34.99</p>
                </div>
              </div>
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-full">❮</button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-full">❯</button>
          </div>
          <button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg">SHOP NOW</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;