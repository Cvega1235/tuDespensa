import React, { useState, useEffect } from "react";

export const EditarIngrediente = ({ ingrediente, onClose, onGuardar }) => {
  const [formulario, setFormulario] = useState(ingrediente);
  const [imagen, setImagen] = useState(null); // archivo nuevo
  const [hoverImagen, setHoverImagen] = useState(false);

  useEffect(() => {
    setFormulario(ingrediente);
    setImagen(null);
  }, [ingrediente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(formulario).forEach((key) => {
      if (key !== "imagen" && key !== "_id" && formulario[key] !== null) {
        formData.append(key, formulario[key]);
      }
    });

    if (imagen) {
      formData.append("imagen", imagen);
    }

    try {
      const respuesta = await fetch(
        `http://localhost:3000/api/ingredientes/${ingrediente._id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!respuesta.ok) throw new Error("Error al actualizar");

      const actualizado = await respuesta.json();
      onGuardar(actualizado);
      onClose();
    } catch (error) {
      console.error("Error actualizando ingrediente:", error);
    }
  };

  const camposNumericos = Object.keys(formulario).filter(
    (campo) =>
      ![
        "_id",
        "nombre",
        "tipo",
        "imagen",
        "__v",
        "createdAt",
        "updatedAt",
      ].includes(campo)
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Editar Ingrediente
        </h2>

        {/* Imagen actual */}
        <div
          className="mb-4 relative group w-40 h-40 mx-auto"
          onMouseEnter={() => setHoverImagen(true)}
          onMouseLeave={() => setHoverImagen(false)}
        >
          <img
            src={`http://localhost:3000/uploads/${ingrediente.imagen}`}
            alt="Imagen del ingrediente"
            className="w-full h-full object-cover rounded-lg border border-gray-300"
          />
          {hoverImagen && (
            <label className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer text-white text-sm font-medium rounded-lg">
              Cambiar imagen
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-h-[50vh] overflow-y-auto pr-2"
        >
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              name="nombre"
              value={formulario.nombre || ""}
              onChange={handleChange}
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Ej. Manzana, arroz, carne..."
            />
          </div>

          {/* Tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select
              name="tipo"
              value={formulario.tipo || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Selecciona un tipo</option>
              <option value="Carnes">Carnes</option>
              <option value="Cereales">Cereales</option>
              <option value="Frutas">Frutas</option>
              <option value="Aceites">Aceites</option>
              <option value="Huevos">Huevos</option>
              <option value="Lácteos">Lácteos</option>
              <option value="Pescados">Pescados</option>
              <option value="Vegetales">Vegetales</option>
            </select>
          </div>

          {/* Campos numéricos */}
          {camposNumericos.map((campo) => (
            <div key={campo}>
              <label className="block capitalize text-sm text-gray-600 font-medium mb-1">
                {campo.replace(/([A-Z])/g, " $1")}
              </label>
              <div className="relative">
                <input
                  name={campo}
                  value={formulario[campo] ?? ""}
                  onChange={handleChange}
                  type="number"
                  step="any"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-500">
                  g
                </span>
              </div>
            </div>
          ))}

          {/* Botones */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};