// src/App.tsx
import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { MissionVision } from './components/sections/MissionVision';
import { Solutions } from './components/sections/Solutions';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { Footer } from './components/layout/Footer';  // Importar el Footer

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <Solutions />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer /> {/* Agregar Footer al final */}
    </div>
  );
}

export default App;
