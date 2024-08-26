import React from 'react';

// Interfaz para representar un servicio
interface Service {
  id?: string;        // Identificador único opcional del servicio
  title: string;      // Título del servicio
  details: string[];  // Lista de detalles sobre el servicio
}

// Interfaz para las propiedades del componente 'Services'
interface ServicesProps {
  id?: string;        // Identificador opcional para navegación
  services: Service[]; // Arreglo de servicios
}

// Componente funcional que renderiza la sección de servicios
const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#69BC9B]">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="p-6 bg-gray-900 shadow-md rounded-lg border border-[#27367E]">
            <h3 className="text-xl font-semibold mb-4 text-[#69BC9B]">{service.title}</h3>
            <ul className="list-disc pl-5 text-gray-300">
              {service.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

/*Explicación Detallada del Componente Services
Interfaces:
Service: Define la estructura de un servicio individual, que incluye un id opcional, un title para el nombre del servicio, y un arreglo de details que contiene descripciones o puntos clave del servicio.

ServicesProps: Especifica las propiedades que el componente Services recibirá. Incluye un id opcional y un arreglo de services que sigue la estructura de la interfaz Service.

Componente Services:
Este componente es funcional y recibe services como una propiedad. Usa React.FC<ServicesProps> para definir que es un componente funcional que recibe ServicesProps.

Renderizado de servicios: Dentro de la sección <section>, se itera sobre cada service en el arreglo services.

Estilos y Diseño:
Cada servicio se renderiza en una tarjeta (div) que tiene un estilo moderno con clases de Tailwind como bg-gray-900, shadow-md, y text-[#69BC9B].
El título del servicio se muestra con un tamaño de texto más grande y en negrita, mientras que los detalles se listan debajo de él en un formato de lista (ul y li) con viñetas (list-disc).

Identificadores Únicos: Cada servicio y cada detalle dentro del servicio tiene un identificador único (key) que asegura una renderización eficiente y sin errores en React.*/