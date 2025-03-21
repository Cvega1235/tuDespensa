import React from "react";

export const SobreNosotros = () => {
  return (
    <div className="flex px-8 justify-evenly">
      <img className="rounded-2xl" src="/images/yo_y_los_papus.svg" alt="" />
      <span className="flex flex-col items-center justify-center px-28 gap-8 w-auto">
        <h1 className="text-3xl">Sobre Nosotros</h1>
        <p className="text-descripcion text-[20px]">
          Detras de la aplicacion Tu Despensa se encuentra un equipo el cual
          busca que las personas transformen su vida a través de una
          alimentacion saludable.
          <p>
            En Tu despensa lo mas importante es tu salud cuidando a tu bolsillo.
          </p>
        </p>
        <button className="bg-paleta1 p-4 rounded-2xl hover:bg-paleta3">
          Mas informacion &rarr;
        </button>
      </span>
    </div>
  );
};
