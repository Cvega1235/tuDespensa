import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Detectar el tamaño de la pantalla al cargar el componente
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // Si la pantalla es pequeña, la sidebar estará cerrada
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Despensa de Enrique", icon: "🛒" },
    { name: "Lista de Compras", icon: "📝" },
    { name: "Recetas", icon: "🍽️" },
    { name: "Perfil de usuario", icon: "👤" },
    { name: "Recetas con IA", icon: "🤖" },
    { name: "Reportes", icon: "📊" },
    { name: "Planificación Nutricional", icon: "🥗" },
  ];

  return (
    <div
      className={`bg-paleta1 min-h-screen p-5 transition-all duration-300 ${
        isOpen ? "w-64" : "w-12"
      }`}
    >
      {/* Botón de Menú */}
      <button onClick={toggleSidebar} className="text-white text-lg mb-4">
        {isOpen ? "<" : " >"}
      </button>

      {/* Logo y Título */}
      {isOpen && (
        <div>
          <img src="TuDespensa-Web/public/images/IconoDespensa.svg" alt="" />
          <h2 className="text-white text-xl font-bold">Tu Despensa</h2>
        </div>
      )}

      {/* Menú de Opciones */}
      <nav className="mt-5">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center w-full py-2 text-left text-white hover:bg-green-700 rounded-lg transition duration-300"
          >
            <span>{item.icon}</span>
            {isOpen && <span className="ml-2">{item.name}</span>}
          </button>
        ))}
      </nav>

      {/* Botón de Cerrar Sesión */}
      <button className="absolute bottom-5 left-5 text-white flex items-center">
        🔌 {isOpen && <span className="ml-2">Desconectarse</span>}
      </button>
    </div>
  );
};

export default Sidebar;
