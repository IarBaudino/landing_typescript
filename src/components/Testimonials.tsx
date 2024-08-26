import React from 'react';

// Define el tipo para los testimonios
interface TestimonialType {
  id: string;       // Identificador único del testimonio
  client: string;   // Nombre del cliente
  feedback: string; // Comentarios del cliente
  image: string;    // URL de la imagen del cliente
}

// Define los props para el componente 'Testimonials'
interface TestimonialsProps {
  id?: string;              // Identificador opcional para navegación
  testimonials: TestimonialType[]; // Arreglo de testimonios
}

// Componente 'Testimonials'
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Success Stories</h2>
      <div className="flex justify-around">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="max-w-xs">
            {/* Imagen del cliente */}
            <img 
              src={testimonial.image} 
              alt={testimonial.client} 
              className="w-20 h-20 mx-auto mb-4 rounded-full"
            />
            {/* Comentarios del cliente */}
            <p className="italic">"{testimonial.feedback}"</p>
            {/* Nombre del cliente */}
            <h3 className="mt-4 font-semibold">{testimonial.client}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;


/*Explicación Detallada del Componente Testimonials
Interfaces:
TestimonialType: Define la estructura para un testimonio individual. Incluye un id único, el nombre del client, el feedback (comentarios del cliente) y la image (URL de la imagen del cliente).

TestimonialsProps: Especifica las propiedades que el componente Testimonials recibirá. Incluye un id opcional y un arreglo de testimonials que sigue la estructura definida por TestimonialType.

Componente Testimonials:
Este componente es funcional y recibe testimonials como una propiedad. Usa React.FC<TestimonialsProps> para definir que es un componente funcional que recibe TestimonialsProps.
Renderizado de Testimonios:
Dentro del contenedor <div>, se itera sobre cada testimonial en el arreglo testimonials.

Imagen: Se muestra la imagen del cliente en un formato redondeado (rounded-full) usando img.

Comentarios: Los comentarios del cliente se muestran en cursiva (italic).

Nombre del Cliente: Se presenta debajo de los comentarios en negrita (font-semibold).

Estilos:
El contenedor general (<div>) tiene un estilo de fondo gris claro (bg-gray-100) y texto centrado (text-center).
Cada testimonio se presenta dentro de un contenedor con ancho máximo (max-w-xs) y un estilo centrado.*/