import React from "react";

export const SearchBarGreen = ({ placeholder = "Buscar receta" }) => {
  return (
    <div className={`rounded-xl bg-paleta1 border pb-3 content-between`}>
      <h3 className="text-center text-white">Tu Despensa</h3>
      <div className="mx-2 border rounded-lg bg-white">
        <input
          className="w-full px-5 outline-none"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
