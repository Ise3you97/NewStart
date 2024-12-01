import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../ui/NavLink';
import { Logo } from '../ui/Logo';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <header className="fixed w-100 bg-white bg-opacity-95 backdrop-blur-sm z-50 border-bottom border-gray-100">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Left section for desktop */}
          <div className="d-none d-md-flex align-items-center">
            <NavLink href="#mission" className="me-4">Nosotros</NavLink>
            <NavLink href="#solutions" className="me-4">Servicios</NavLink>
            <NavLink href="#features" className="me-4">Características</NavLink>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0 d-flex justify-content-center align-items-center">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
            </motion.a>
          </div>

          {/* Right section for desktop */}
          <div className="d-none d-md-flex align-items-center">
            <NavLink href="#pricing" className="me-4">Precios</NavLink>
            <NavLink href="#contact" className="me-4">Contacto</NavLink>
            <motion.a
              href="#contact" // Redirige a la sección de contacto
              className="btn btn-primary px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Empezar ahora
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="d-md-none">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-link text-dark"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="d-md-none position-absolute top-0 start-0 w-100 h-100 bg-white z-50 overflow-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-3">
            <NavLink href="#mission" mobile>
              Nosotros
            </NavLink>
            <NavLink href="#solutions" mobile>
              Servicios
            </NavLink>
            <NavLink href="#features" mobile>
              Características
            </NavLink>
            <NavLink href="#pricing" mobile>
              Precios
            </NavLink>
            <NavLink href="#contact" mobile>
              Contacto
            </NavLink>
          </div>
          <div className="pt-3 pb-3 border-top">
            <div className="px-2">
              <motion.a
                href="#contact" // Redirige a la sección de contacto
                className="w-100 btn btn-primary text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Empezar ahora
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
