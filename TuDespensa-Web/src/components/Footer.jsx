import React from "react";
import { LogoEmpresa } from "./LogoEmpresa";
import { Link } from "react-router-dom";
import { FaAppStore, FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
export const Footer = () => {
  return (
    <section className=" bg-paleta1 grid grid-rows-4 md:grid-cols-4 md:grid-rows-1 justify-items-center">
      <div>
        <div className="flex items-center justify-items-center">
          <img className="md:w-14" src="/images/IconoDespensa.svg" alt="" />
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            Tu Despensa
          </h1>
        </div>
        <LogoEmpresa />
      </div>
      <div>
        <h1 className="text-descripcion text-xl underline">Plataformas</h1>
      </div>
      <div>
        <h1 className="text-descripcion text-xl underline">Ayuda</h1>
      </div>
      <div>
        <h1 className="text-descripcion text-xl underline">Redes Sociales</h1>
      </div>
    </section>
  );
};
