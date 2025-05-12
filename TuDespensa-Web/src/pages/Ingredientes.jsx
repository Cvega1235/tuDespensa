import React, { useEffect, useState } from "react";
import { EditarIngrediente } from "../components/EditarIngrediente";
export const Ingredientes = () => {
  const [ingredientes, setIngredientes] = useState([]);
  const [tipoActivo, setTipoActivo] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [ingredienteEditando, setIngredienteEditando] = useState(null);

  useEffect(() => {
    const obtenerIngredientes = async () => {
      try {
        const respuesta = await fetch("http://localhost:3000/api/ingredientes");
        const datos = await respuesta.json();
        setIngredientes(datos);

        // Al iniciar, activar la primera categoría
        const tiposUnicos = [...new Set(datos.map((i) => i.tipo))];
        if (tiposUnicos.length > 0) setTipoActivo(tiposUnicos[0]);
      } catch (error) {
        console.error("Error al obtener los ingredientes:", error);
      }
    };

    obtenerIngredientes();
  }, []);

  const tipos = [...new Set(ingredientes.map((i) => i.tipo))];

  const ingredientesFiltrados = ingredientes.filter(
    (i) =>
      i.tipo === tipoActivo &&
      i.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  const actualizarIngredienteEnLista = (actualizado) => {
    setIngredientes((prev) =>
      prev.map((i) => (i._id === actualizado._id ? actualizado : i))
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Ingredientes</h1>

      {/* Filtro de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        className="border p-2 rounded w-full mb-4"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Pestañas por tipo */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tipos.map((tipo) => (
          <button
            key={tipo}
            onClick={() => setTipoActivo(tipo)}
            className={`px-4 py-2 rounded-full ${
              tipo === tipoActivo
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      {/* Lista de ingredientes filtrados */}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ingredientesFiltrados.map((ingrediente) => (
          <li key={ingrediente._id} className="border p-4 rounded shadow">
            {ingrediente.imagen ? (
              <img
                src={`http://localhost:3000/uploads/${encodeURIComponent(
                  ingrediente.imagen
                )}`}
                alt={ingrediente.nombre}
                className="w-full h-40 object-cover rounded mb-2"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded mb-2 text-gray-500 text-sm">
                Sin imagen
              </div>
            )}
            <strong className="block text-center">{ingrediente.nombre}</strong>
            <button
              onClick={() => setIngredienteEditando(ingrediente)}
              className="mt-2 px-3 py-1 bg-yellow-400 rounded text-white w-full"
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
      {ingredienteEditando && (
        <EditarIngrediente
          ingrediente={ingredienteEditando}
          onClose={() => setIngredienteEditando(null)}
          onGuardar={actualizarIngredienteEnLista}
        />
      )}
    </div>
  );
};
