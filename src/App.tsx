// src/App.tsx
import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { MissionVision } from './components/sections/MissionVision';
import { Solutions } from './components/sections/Solutions';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';  // Importar el Footer
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <Solutions />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer /> {/* Agregar Footer al final */}
    </div>
  );
}

export default App;
