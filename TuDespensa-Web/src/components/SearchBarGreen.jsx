import React from "react";

export const SearchBarGreen = ({ placeholder = "Buscar receta" }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`w-4xl mx-2 rounded-xl bg-paleta1 border flex flex-col h-18 justify-between `}
      >
        <h3 className="text-xl text-center font-bold text-white">Recetas</h3>
        <input
          className="bg-white border-2 rounded-xl mx-3 mb-1 px-3 py-1"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
