
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6">
      <ul className="flex justify-around">
        <li><a href="#hero" className="hover:text-gray-400">Inicio</a></li>
        <li><a href="#services" className="hover:text-gray-400">Servicios</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Proyectos</a></li>
        <li><a href="#testimonials" className="hover:text-gray-400">Testimonios</a></li>
        <li><a href="#about-us" className="hover:text-gray-400">Sobre Nosotros</a></li>
        <li><a href="#contact-form" className="hover:text-gray-400">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

/*Descripción detallada:
const Navbar: React.FC:
Define el componente Navbar como un componente funcional de React.
Este componente no recibe props, por lo que solo se define como React.FC sin tipos adicionales.

<nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6">:
La etiqueta <nav> representa el contenedor principal de la barra de navegación.
Las clases de Tailwind CSS se utilizan para posicionar la barra de navegación de manera fija en la parte superior de la pantalla, asegurando que ocupe todo el ancho (w-full) y aplicando un fondo gris oscuro (bg-gray-800) con texto en color blanco (text-white).

<ul className="flex justify-around">:
Dentro de <nav>, se define una lista desordenada (<ul>) para organizar los elementos de la navegación.
La clase flex utiliza Flexbox para alinear los elementos en fila, y justify-around distribuye los elementos con espacio alrededor de ellos.

<li><a href="#section-id" className="hover:text-gray-400">Texto</a></li>:
Cada elemento de la lista (<li>) contiene un enlace (<a>) que apunta a diferentes secciones de la página mediante anclajes (href="#section-id").

La clase hover:text-gray-400 cambia el color del texto al pasar el cursor sobre el enlace, proporcionando una interacción visual.*/