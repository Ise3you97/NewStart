import React from 'react';
import { Zap, Shield, Rocket, BarChart } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

const features = [
  {
    name: 'Velocidad Relámpago',
    description: 'Optimizamos cada aspecto de tu negocio para ofrecer un rendimiento rápido y eficiente.',
    icon: Zap,
  },
  {
    name: 'Seguridad Mejorada',
    description: 'Implementamos medidas de seguridad sólidas para proteger tu empresa y los datos de tus clientes.',
    icon: Shield,
  },
  {
    name: 'Infraestructura Escalable',
    description: 'Te ayudamos a crecer de manera flexible, adaptándonos a las necesidades de tu negocio a medida que escala.',
    icon: Rocket,
  },
  {
    name: 'Análisis Inteligente',
    description: 'Utiliza datos precisos para tomar decisiones estratégicas que impulsen el crecimiento de tu empresa.',
    icon: BarChart,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Características Principales
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.name}
              animation="slide"
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <div className="group p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
