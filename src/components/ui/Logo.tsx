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
        src="https://www.dropbox.com/scl/fi/9i2e3kgaha0ebc87khyav/Logo.png?rlkey=6jsyet9sujpw8itxax1o0wqwj&st=arp8afvs&raw=1"
        alt="Logo"
        className="logo-image"
        whileHover={{ rotate: 10 }}
        whileTap={{ rotate: -10 }}
      />
    </motion.div>
  );
}
