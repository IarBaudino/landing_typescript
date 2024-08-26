"use client";

import React, { useState, useEffect } from 'react';

// Interfaz para las props del componente 'Hero'
interface HeroProps {
  id?: string;
  title: string;
  subtitle: string;
  backgroundImages: string[];
}

//Componente funcional 'Hero'
const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div 
      className="w-screen min-h-[50vh] bg-cover flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-2xl mt-4">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;

/*Descripción detallada:
interface HeroProps:
Define las propiedades que el componente Hero espera recibir.
title y subtitle son cadenas de texto que representan el título y el subtítulo de la sección.
backgroundImages es un array de cadenas de texto, donde cada cadena es una URL de una imagen de fondo.

const Hero: React.FC<HeroProps>:
Define el componente Hero como un componente funcional de React.
Se utiliza la interfaz HeroProps para asegurar que las propiedades que recibe el componente tengan los tipos correctos.

useState:
Se utiliza para gestionar el estado del índice de la imagen de fondo actual. Inicialmente, está en 0.

useEffect:
Este hook se usa para configurar un intervalo que cambia la imagen de fondo cada 2 segundos.
El intervalo se limpia cuando el componente se desmonta para evitar problemas de rendimiento.

return:
La estructura de retorno define el diseño del componente Hero.
La imagen de fondo se establece dinámicamente usando el índice de la imagen actual.
El título y el subtítulo se centran en el medio del contenedor y se muestran en color blanco.*/