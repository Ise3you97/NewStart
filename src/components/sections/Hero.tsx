import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import image from '../../Images/Logo.png';

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-8 pb-16 min-h-screen flex items-center filter drop-shadow-lg">
      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="text-center">
          <FadeIn>
            {/* Logo de la empresa */}
            <div className="mb-4">
              <img 
                src="https://www.dropbox.com/scl/fi/9i2e3kgaha0ebc87khyav/Logo.png?rlkey=6jsyet9sujpw8itxax1o0wqwj&st=arp8afvs&raw=1" 
                alt="Logo" 
                className="mx-auto" 
                style={{ height: '450px', marginBottom: '10px', filter: 'drop-shadow(0 4px 1px rgba(0, 0, 0, 1))' }} 
              />
              {/* Título NewStarting, con un margin-top reducido */}
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 md:text-7xl mt-2">
                <span style={{ marginTop: '-80px', filter: 'drop-shadow(0 4px 2px rgba(0, 0, 0, 1))' }} className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  NewStarting
                </span>
              </h1>
            </div>

            <h1 style={{ marginTop: '50px' }} className="text-5xl tracking-tight font-extrabold text-gray-900 md:text-7xl" >
              <span className="block">Transforma tu visión en realidad</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-500 md:text-xl md:max-w-2xl">
              Impulsamos a emprendedores a dar el primer paso hacia el éxito, creando soluciones tecnológicas personalizadas para que tu proyecto sea más que una idea, sea una realidad que inspire y transforme.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8 flex justify-center gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Empieza ahora
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </motion.div>
      
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-10 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-multiply blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-400 mix-blend-multiply blur-3xl" />
      </motion.div>
    </div>
  );
}
