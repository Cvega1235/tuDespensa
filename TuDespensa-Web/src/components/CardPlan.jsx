import React from "react";

export const CardPlan = ({ nombrePlan, caracteristicas = [] }) => {
  return (
    <div className="border border-descripcion px-8 py-4 rounded-2xl gap-8 hover:bg-paleta5 hover:text-white group">
      <h1 className="text-4xl">{nombrePlan}</h1>
      <ul className="m-3">
        {caracteristicas.map((item, index) => (
          <li
            key={index}
            className="list-disc text-descripcion group-hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="bg-paleta1 w-full rounded-2xl p-2">Button</button>
    </div>
  );
};
