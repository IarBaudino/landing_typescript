// Componente funcional 'ContactForm' que recibe un 'id' como prop.
const ContactForm: React.FC<{ id: string }> = ({ id }) => {
    return (
        <div id={id} className="py-16 bg-gray-100">
            {/* Encabezado principal */}
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
            {/* Formulario de contacto */}
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-left font-semibold">Name</label>
                    <input id="name" type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-left font-semibold">Email</label>
                    <input id="email" type="email" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-left font-semibold">Message</label>
                    <textarea id="message" className="w-full border border-gray-300 p-2 rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
            </form>
        </div>
    );
};

// Exporta el componente 'ContactForm'.
export default ContactForm;

/*Descripción Detallada del Componente:
Componente ContactForm:
Es un componente funcional que recibe un id como prop para asignar un identificador único al contenedor del formulario de contacto.
Renderiza una sección con el título "Contact Us" y un formulario de contacto que incluye campos para el nombre, correo electrónico y mensaje.
Cada campo de entrada (input y textarea) está envuelto en un div con clases de estilo para la presentación.
Un botón de envío (submit) se proporciona al final del formulario.*/