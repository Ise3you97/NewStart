// src/components/layout/Footer.tsx
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Política de privacidad</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Términos de servicio</a>
        </div>
      </div>
    </footer>
  );
}
