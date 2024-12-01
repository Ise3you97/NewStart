import React from 'react';
import { motion } from 'framer-motion';
import './Logo.css'; // Archivo CSS para los estilos

export function Logo() {
  return (
    <motion.div
      className="logo-container"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
        <motion.img
          src="src/images/Logo.png"
          alt="Logo"
          className="logo-image"
          whileHover={{ rotate: 10 }}
          whileTap={{ rotate: -10 }}
        />
    </motion.div>
  );
}
