import React from 'react';
import { Target, Lightbulb, Heart } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

export function MissionVision() {
  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          Sobre Nosotros
        </h1>
        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal animation="slide" direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Misión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                En <span className="text-blue-600 font-semibold">newStar</span>, impulsamos a visionarios y emprendedores a dar el primer paso en la realización de sus ideas a través de soluciones tecnológicas personalizadas, convirtiendo sus proyectos en realidades tangibles que marcan un nuevo comienzo.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Trabajamos con pasión para ofrecer innovación y calidad, adaptándonos a las necesidades únicas de cada cliente. Nuestra misión se basa en construir un futuro donde la tecnología sirva como puente para el crecimiento personal y profesional.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide" direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Visión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser la puerta de entrada para quienes desean dar un nuevo inicio con sus proyectos más ambiciosos, posicionándonos como el socio tecnológico de confianza que facilita el desarrollo de soluciones innovadoras y sostenibles, inspirando a un mundo lleno de nuevas posibilidades.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nos visualizamos como un socio estratégico para emprendedores y empresas, inspirando confianza y facilitando el desarrollo de proyectos que impulsen el cambio y el progreso en sus respectivas industrias.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* New Section: Our Values */}
        <div className="mt-16">
          <ScrollReveal animation="fade" direction="up">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Nuestros Valores</h2>
              </div>
              <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
                <li>
                  <span className="font-semibold text-blue-600">Innovación:</span> Constantemente buscamos nuevas formas de resolver problemas y superar expectativas.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Compromiso:</span> Estamos dedicados a ofrecer un servicio excepcional y a construir relaciones duraderas basadas en la confianza.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Colaboración:</span> Creemos en la fuerza del trabajo en equipo para lograr metas comunes.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Responsabilidad:</span> Nos preocupamos por el impacto de nuestras acciones en las personas y el medio ambiente.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
