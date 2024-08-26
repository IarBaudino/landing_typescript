// Interfaz para un miembro del equipo.
interface TeamMember {
    id?: string;
    name: string;
    role: string;
    image: string;
}

// Interfaz para las props del componente 'AboutUs'.
interface AboutUsProps {
    id: string;
    description: string;
    team: TeamMember[];
}

// Componente funcional 'AboutUs' que recibe props de tipo 'AboutUsProps'.
const AboutUs: React.FC<AboutUsProps> = ({ id, description, team }) => {
    return (
        <div id={id} className="py-16 text-center">
            {/* Encabezado principal */}
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            {/* Descripción */}
            <p className="max-w-3xl mx-auto text-lg mb-8">{description}</p>
            {/* Contenedor de miembros del equipo */}
            <div className="flex justify-around">
                {/* Renderización de cada miembro */}
                {team.map((member, index) => (
                    <div key={index} className="max-w-xs text-center">
                        <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full"/>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Exporta el componente 'AboutUs'.
export default AboutUs;

/*Descripción Detallada del Componente:
Interfaz TeamMember:
Define las propiedades que un miembro del equipo debe tener: id (opcional), name, role, e image.

Interfaz AboutUsProps:
Especifica las propiedades necesarias para el componente AboutUs, incluyendo un id para la sección, una description de la empresa, y un array de team que sigue la interfaz TeamMember.

Componente AboutUs:
Recibe propiedades de tipo AboutUsProps y renderiza una sección con el título "About Us", una descripción, y una lista de miembros del equipo.
Cada miembro del equipo se muestra con su imagen, nombre, y rol.*/