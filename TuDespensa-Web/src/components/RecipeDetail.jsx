import React from "react";

export const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return <p>No se ha seleccionado ninguna receta.</p>; // O un estado de "cargando..."
  }

  return (
    <div className="flex flex-col w-7/10 border-3 p-3 m-2 rounded-2xl">
      <img
        className="mx-3 rounded-3xl h-96 object-cover" // Ajusté la altura
        src={recipe.image}
        alt={recipe.label}
      />
      <div className="flex">
        <div className="px-5">
          <h2 className="text-2xl font-bold text-green-800 mt-3">
            Ingredientes
          </h2>
          <ul className="list-none pl-5">
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800 mt-3">
            Preparación
          </h2>
          {/* La API de Edamam no directamente la preparación en este nivel */}
          {/* Podrías intentar buscar la receta original si la API lo proporciona */}
          <p className="px-5">
            {/* Aquí podrías mostrar una descripción más larga o un enlace a la receta */}
            {recipe.url ? (
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver receta completa
              </a>
            ) : (
              "No hay instrucciones de preparación disponibles en este resumen."
            )}
          </p>
        </div>
      </div>
      {/* Opcional: Botón para volver a la lista */}
      {/* <button onClick={onCloseDetail} className="...">Volver</button> */}
    </div>
  );
};
