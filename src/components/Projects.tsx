import { BriefcaseIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Interfaz para representar un proyecto
interface Project {
  id: string;        // Identificador único del proyecto
  title: string;     // Título del proyecto
  description: string; // Descripción del proyecto
  image: string;     // URL de la imagen del proyecto
}

// Interfaz para las propiedades del componente 'Projects'
interface ProjectsProps {
  id?: string;       // Identificador opcional para navegación
  projects: Project[]; // Arreglo de proyectos
}

// Componente funcional que renderiza la sección de proyectos
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#69BC9B]">Our Projects</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 shadow-lg rounded-lg border border-[#27367E] p-6 flex flex-col items-center">
              {/* Renderiza un icono según el título del proyecto */}
              {project.title === 'Proyecto 1' && <BriefcaseIcon className="w-12 h-12 text-[#69BC9B] mb-4" />}
              {project.title === 'Proyecto 2' && <GlobeAltIcon className="w-12 h-12 text-[#69BC9B] mb-4" />}
              {project.title === 'Proyecto 3' && <SparklesIcon className="w-12 h-12 text-[#69BC9B] mb-4" />}
              <h3 className="text-xl font-semibold mb-4 text-[#69BC9B]">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

/*Explicación Detallada del Componente Projects
Interfaces:

Project: Define la estructura de un proyecto individual, con campos para el id, title, description, e image.

ProjectsProps: Especifica las propiedades que el componente Projects recibirá. Incluye un id opcional para la navegación y un arreglo de projects.

Componente Projects:
Este componente es funcional y recibe projects como una propiedad. Usa React.FC<ProjectsProps> para definir que es un componente funcional que recibe ProjectsProps.

Renderizado de proyectos: Dentro de la sección <section>, se itera sobre cada project en el arreglo projects.

Iconos Condicionales: Dependiendo del title del proyecto, se muestra un icono específico. Esto se logra mediante condiciones simples que comparan el title con cadenas de texto predeterminadas.

Estilos: Se aplican estilos CSS utilizando clases de Tailwind, como bg-gray-900, shadow-lg, y text-[#69BC9B] para darle un diseño moderno.*/