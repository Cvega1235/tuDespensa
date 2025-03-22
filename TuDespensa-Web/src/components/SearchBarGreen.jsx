import React from "react";

export const SearchBarGreen = ({ placeholder = "Buscar receta" }) => {
  return (
    <div className={`rounded-xl pb-3 bg-paleta1 mx-auto px-5 py-5`}>
      <h3 className="text-center text-white">Tu Despensa</h3>
      <div className="border-3 rounded-lg bg-white">
        <input
          className="w-full px-5 py-2 outline-none"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
