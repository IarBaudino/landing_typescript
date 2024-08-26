//IMPORTANTE: debajo del codigo esta toda la explicacion detallada.

// Importamos los componentes que vamos a utilizar en la página.
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';

// Define el tipo para los testimonios
interface TestimonialType {
  id: string; // ID único para cada testimonio
  client: string; // Nombre del cliente que da el testimonio
  feedback: string; // Opinión del cliente
  image: string; // Ruta de la imagen del cliente
}

// Define los props para el componente Testimonials
interface TestimonialsProps {
  testimonials: TestimonialType[]; // Array de testimonios
}

// Define el tipo para los servicios
interface Service {
  id: string; // ID único para cada servicio
  title: string; // Título del servicio
  details: string[]; // Array de detalles sobre el servicio
}

// Define los props para el componente Services
interface ServicesProps {
  services: Service[]; // Array de servicios
}

// Define el tipo para los proyectos
interface Project {
  id: string; // ID único para cada proyecto
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  image: string; // Ruta de la imagen del proyecto
}

// Define los props para el componente Projects
interface ProjectsProps {
  projects: Project[]; // Array de proyectos
}

// Función principal que renderiza la página Home
export default function Home() {
  // Definir los servicios
  const services: Service[] = [
    {
      id: 'service1', // ID único para el servicio 1
      title: 'Estrategia y consultoría', // Título del servicio
      details: [ // Detalles sobre el servicio
        'Análisis Corporativo integral',
        'Inteligencia de Negocio (Business Intelligence - BI)',
        'Vinculación Tecnológica, acuerdos estratégicos con instituciones de C&T...',
        'Gestión de propiedad intelectual',
        'Innovación abierta...',
        'Optimización de Recursos...',
        'Estudios de mercado e informes estratégicos...',
        'Gestión gubernamental',
        'Capacitaciones a medida'
      ],
    },
    {
      id: 'service2', // ID único para el servicio 2
      title: 'Proyectos y líneas de financiamiento', // Título del servicio
      details: [ // Detalles sobre el servicio
        'Planes de negocios y Análisis de competitividad',
        'Asistencia en formulación de proyectos...',
        'Estudios de viabilidad técnica',
        'Estudios de factibilidad económica',
        'Proyectos para Presentación a líneas de financiamiento',
        'Gestión de proyectos (agile, scrum, PMI, waterfall...)',
      ],
    },
    // Añadir los demás servicios de manera similar
  ];

  // Definir los proyectos
  const projects: Project[] = [
    {
      id: 'project1', // ID único para el proyecto 1
      title: 'Proyecto 1', // Título del proyecto
      description: 'Descripción del proyecto 1', // Descripción del proyecto
      image: '/images/project1.jpg', // Ruta de la imagen del proyecto
    },
    {
      id: 'project2', // ID único para el proyecto 2
      title: 'Proyecto 2', // Título del proyecto
      description: 'Descripción del proyecto 2', // Descripción del proyecto
      image: '/images/project2.jpg', // Ruta de la imagen del proyecto
    },
    {
      id: 'project3', // ID único para el proyecto 3
      title: 'Proyecto 3', // Título del proyecto
      description: 'Descripción del proyecto 3', // Descripción del proyecto
      image: '/images/project3.jpg', // Ruta de la imagen del proyecto
    },
  ];

  // Definir los testimonios
  const testimonials: TestimonialType[] = [
    {
      id: 'testimonial1', // ID único para el testimonio 1
      client: 'Cliente 1', // Nombre del cliente
      feedback: 'El mejor servicio que hemos recibido, muy recomendable.', // Opinión del cliente
      image: '/images/client1.jpg', // Ruta de la imagen del cliente
    },
    {
      id: 'testimonial2', // ID único para el testimonio 2
      client: 'Cliente 2', // Nombre del cliente
      feedback: 'Profesionales y atentos, resultados excepcionales.', // Opinión del cliente
      image: '/images/client2.jpg', // Ruta de la imagen del cliente
    },
    // Añadir más testimonios aquí
  ];

  // Definir el equipo
  const team = [
    {
      id: 'team1', // ID único para el miembro del equipo 1
      name: 'Juan Pérez', // Nombre del miembro del equipo
      role: 'CEO', // Rol del miembro del equipo
      image: '/images/team1.jpg', // Ruta de la imagen del miembro del equipo
      description: 'Experto en liderazgo y estrategia empresarial.', // Breve descripción del miembro
    },
    {
      id: 'team2', // ID único para el miembro del equipo 2
      name: 'María Gómez', // Nombre del miembro del equipo
      role: 'CTO', // Rol del miembro del equipo
      image: '/images/team2.jpg', // Ruta de la imagen del miembro del equipo
      description: 'Especialista en tecnologías emergentes y desarrollo de software.', // Breve descripción del miembro
    },
    // Añadir más miembros del equipo aquí
  ];

  // Array de imágenes de fondo para el componente Hero
  const backgroundImages = [
    'https://img.freepik.com/vector-gratis/fondo-futurista-tecnologia-degradada_23-2149122416.jpg', // URL de la primera imagen de fondo
    'https://img.freepik.com/vector-gratis/fondo-realista-estilo-futurista_23-2149129125.jpg', // URL de la segunda imagen de fondo
    'https://img.freepik.com/vector-gratis/fondo-futurista-tecnologia-degradada_23-2149122421.jpg', // URL de la tercera imagen de fondo
  ];

  // Renderizar la página
  return (
    <>
      {/* Renderizar la barra de navegación */}
      <Navbar />
      {/* Definir el layout principal */}
      <main className="flex min-h-screen flex-col items-center justify-start pt-16">
        {/* Renderizar el componente Hero con su título, subtítulo e imágenes de fondo */}
        <Hero
          id="hero"
          title="Bienvenidos a Quasar"
          subtitle="Ofrecemos las mejores soluciones para tu empresa"
          backgroundImages={backgroundImages}
        />
        {/* Renderizar la sección de servicios, pasándole los servicios definidos */}
        <Services id="services" services={services} />
        {/* Renderizar la sección de proyectos, pasándole los proyectos definidos */}
        <Projects id="projects" projects={projects} />
        {/* Renderizar la sección de testimonios, pasándole los testimonios definidos */}
        <Testimonials id="testimonials" testimonials={testimonials} /> 
        {/* Renderizar la sección About Us, pasándole la descripción y el equipo definidos */}
        <AboutUs
          id="about-us"
          description="Somos un equipo de profesionales dedicados a ofrecer servicios de alta calidad."
          team={team}
        />
        {/* Renderizar el formulario de contacto */}
        <ContactForm id="contact-us" />
      </main>
    </>
  );
}


/*
En TypeScript, una INTERFACE es una estructura que define una forma que los objetos deben seguir. Es una manera de describir cómo debe ser un objeto, qué propiedades y métodos debe tener, y los tipos de esas propiedades y métodos.
Cuando defines una interfaz, estás estableciendo una plantilla que los objetos deben cumplir. Los objetos que creas deben seguir esa plantilla.

-------------Descripciones Detalladas-------------
Importaciones: Se importan todos los componentes necesarios para construir la página de inicio (Home). Estos componentes se encuentran en la carpeta components y representan diferentes secciones de la página, como la barra de navegación, la sección principal, los servicios, proyectos, testimonios, información sobre la empresa, y el formulario de contacto.

Definición de tipos (TestimonialType, Service, Project):

TestimonialType: Describe la estructura de un testimonio, incluyendo un id, el nombre del client, su feedback, y una image.
Service: Define la estructura de un servicio, incluyendo un id, un title, y un array de details.
Project: Describe la estructura de un proyecto, incluyendo un id, un title, una description, y una image.
Props para los componentes (TestimonialsProps, ServicesProps, ProjectsProps):

TestimonialsProps: Define que el componente Testimonials debe recibir un array de TestimonialType.
ServicesProps: Define que el componente Services debe recibir un array de Service.
ProjectsProps: Define que el componente Projects debe recibir un array de Project.
Función Home:

Definición de datos (services, projects, testimonials, team, backgroundImages):

services: Array de objetos que siguen la estructura de Service, representando los servicios ofrecidos.
projects: Array de objetos que siguen la estructura de Project, representando los proyectos realizados.
testimonials: Array de objetos que siguen la estructura de TestimonialType, representando los testimonios de clientes.
team: Array de objetos que representan a los miembros del equipo, cada uno con su id, name, role, image, y description.
backgroundImages: Array de URLs de imágenes que serán utilizadas como fondo en la sección Hero.
Renderizado:

Se renderizan todos los componentes en la función Home, cada uno con sus respectivos datos y configuraciones. La página se estructura con una barra de navegación, una sección principal con imágenes de fondo (Hero), secciones para servicios, proyectos, testimonios, información sobre la empresa, y un formulario de contacto.*/