import React from "react";

export const SearchBarGreen = ({ placeholder = "Buscar receta" }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`w-4xl rounded-xl bg-paleta1 border flex justify-center mx-2`}
      >
        <input
          className="bg-white border-2 rounded-lg w-full m-1 px-2"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
