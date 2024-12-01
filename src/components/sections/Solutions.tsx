import React from 'react';
import { SolutionCard } from '../ui/SolutionCard';
import { Code2, Smartphone, Layers, Server, ShoppingCart, Wrench } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

const solutions = [
  {
    title: 'Desarrollo de Sitios Web',
    description: 'Crea sitios web modernos y optimizados, desde portafolios hasta e-commerce.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollo de apps nativas o multiplataforma para iOS y Android.',
    icon: Smartphone,
    // Nueva URL de la imagen (reemplázala con la que desees)
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Nueva imagen de Pexels
  },
  {
    title: 'Aplicaciones Full-Stack',
    description: 'Construcción de aplicaciones completas con backend y frontend integrados.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'APIs y Automatización',
    description: 'Desarrollo de APIs personalizadas y automatización de procesos empresariales.',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Tiendas Online',
    description: 'Configuración e integración de plataformas de comercio electrónico.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Soporte Técnico y Mantenimiento',
    description: 'Optimización, resolución de errores y actualizaciones para tus sistemas.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade">
          <div className="text-center mt-12"> {/* Margin top agregado al contenedor del título */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Servicios Profesionales de Desarrollo
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ofrecemos soluciones personalizadas para impulsar tu negocio.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal
              key={solution.title}
              animation="scale"
              delay={index * 0.1}
            >
              <div className="flex justify-center mt-6"> {/* Margin top agregado aquí también */}
                <SolutionCard 
                  {...solution}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
