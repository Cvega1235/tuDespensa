import React from "react";

export const CardEquipo = ({ imagen, nombre, cargo }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="border rounded-full" src={imagen} alt="" />
      <h1 className="font-bold text-2xl">{nombre}</h1>
      <p className="text-descripcion">{cargo}</p>
    </div>
  );
};
