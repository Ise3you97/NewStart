import React from 'react';
import { Code2, Smartphone, Layers, Server, ShoppingCart, Wrench } from 'lucide-react';
import { PricingCard } from '../ui/PricingCard';

const services = [
  {
    title: 'Desarrollo de Sitios Web',
    description: 'Crea sitios web modernos y optimizados, desde portafolios hasta e-commerce.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    minPrice: 499, // Precio mínimo del servicio
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollo de apps nativas o multiplataforma para iOS y Android.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1538338947140-9d5c48f3e6c9?auto=format&fit=crop&q=80&w=800',
    minPrice: 799, // Precio mínimo del servicio
  },
  {
    title: 'Aplicaciones Full-Stack',
    description: 'Construcción de aplicaciones completas con backend y frontend integrados.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    minPrice: 999, // Precio mínimo del servicio
  },
  {
    title: 'APIs y Automatización',
    description: 'Desarrollo de APIs personalizadas y automatización de procesos empresariales.',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800',
    minPrice: 399, // Precio mínimo del servicio
  },
  {
    title: 'Tiendas Online',
    description: 'Configuración e integración de plataformas de comercio electrónico.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800',
    minPrice: 799, // Precio mínimo del servicio
  },
  {
    title: 'Soporte Técnico y Mantenimiento',
    description: 'Optimización, resolución de errores y actualizaciones para tus sistemas.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800',
    minPrice: 199, // Precio mínimo del servicio
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Elige el Servicio Perfecto
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Precios mínimos para cada servicio, cotiza de acuerdo a tus necesidades
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                <p className="mt-4 text-xl font-bold text-gray-900">
                  Desde ${service.minPrice} USD
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Cotiza ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
