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
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left section (hidden in mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#mission">Nosotros</NavLink>
            <NavLink href="#solutions">Servicios</NavLink>
            <NavLink href="#features">Características</NavLink>
          </div>

          {/* Center logo (hidden in mobile) */}
          <div className="flex-shrink-0 hidden md:block">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
            </motion.a>
          </div>

          {/* Right section (hidden in mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#pricing">Precios</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <motion.a
              href="#contact" // Redirige a la sección de contacto
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Empezar ahora
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (align to left and no logo) */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
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
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <motion.a
                href="#contact" // Redirige a la sección de contacto
                className="w-full text-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
