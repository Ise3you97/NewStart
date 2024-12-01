import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Mail, Phone } from 'lucide-react';

// Define el tipo adecuado para el número de teléfono
type E164Number = string | undefined;

const services = [
  {
    title: 'Desarrollo de Sitios Web',
    description: 'Crea sitios web modernos y optimizados, desde portafolios hasta e-commerce.',
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollo de apps nativas o multiplataforma para iOS y Android.',
  },
  {
    title: 'Aplicaciones Full-Stack',
    description: 'Construcción de aplicaciones completas con backend y frontend integrados.',
  },
  {
    title: 'APIs y Automatización',
    description: 'Desarrollo de APIs personalizadas y automatización de procesos empresariales.',
  },
  {
    title: 'Tiendas Online',
    description: 'Configuración e integración de plataformas de comercio electrónico.',
  },
  {
    title: 'Soporte Técnico y Mantenimiento',
    description: 'Optimización, resolución de errores y actualizaciones para tus sistemas.',
  },
];

export function Contact() {
  const [service, setService] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<E164Number>(undefined);
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setService(event.target.value);
  };

  // Ajustamos la función para aceptar el tipo correcto de teléfono
  const handlePhoneNumberChange = (value: E164Number) => {
    setPhoneNumber(value);
  };

  const handlePolicyChange = () => {
    setAcceptPolicy(!acceptPolicy);
  };

  return (
    <div id="contact" className="bg-white py-24 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex w-full">
        {/* Información de contacto a la izquierda */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start pr-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contáctanos
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Tanto si deseas hacernos un encargo, como si quieres saber cómo trabajamos o simplemente necesitas más información sobre lo que hacemos, puedes ponerte en contacto con nosotros usando nuestra dirección de correo o llamando al siguiente número de teléfono:
            </p>
            <div className="mt-8">
              {/* Aquí se reemplaza el correo y teléfono con imágenes */}
              <div className="flex items-center space-x-4">
                <img src="/src/Images/Info.png" alt="Información de contacto" className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Formulario a la derecha */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Número de Teléfono
              </label>
              <div className="mt-1">
                <PhoneInput
                  international
                  defaultCountry="EC"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Número de teléfono"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Tipo de Servicio
              </label>
              <div className="mt-1">
                <select
                  name="service"
                  id="service"
                  value={service}
                  onChange={handleServiceChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Seleccione un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2 flex items-center">
              <input
                type="checkbox"
                id="acceptPolicy"
                name="acceptPolicy"
                checked={acceptPolicy}
                onChange={handlePolicyChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="acceptPolicy" className="ml-2 text-sm text-gray-700">
                Acepto la <a href="#" className="text-blue-600 hover:underline">política de privacidad</a>.
              </label>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!acceptPolicy} // Deshabilita el botón si no se acepta la política
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
