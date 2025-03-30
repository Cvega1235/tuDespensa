import React from "react";
import { Link } from "react-router-dom";

export const Menu = ({ visible, alternador }) => {
  if (!visible) return null; // Asegura que solo se renderice cuando es visible

  return (
    <article className="fixed bg-paleta2 w-full h-full left-0  z-50">
      <div>
        <ul className="flex flex-col gap-2 items-start p-4">
          <li
            className="flex border rounded-2xl p-4 hover:bg-paleta3 w-full cursor-pointer"
            onClick={alternador} // Se cierra el menú al hacer clic
          >
            <Link to="/" className="w-full block">
              Inicio
            </Link>
          </li>
          <li
            className="flex border rounded-2xl p-4 hover:bg-paleta3 w-full cursor-pointer"
            onClick={alternador}
          >
            <Link to="/sobre_nosotros" className="w-full block">
              Sobre Nosotros
            </Link>
          </li>
          <li
            className="flex border rounded-2xl p-4 hover:bg-paleta3 w-full cursor-pointer"
            onClick={alternador}
          >
            <Link to="/planes" className="w-full block">
              Planes
            </Link>
          </li>
          <li
            className="flex border rounded-2xl p-4 hover:bg-paleta3 w-full cursor-pointer"
            onClick={alternador}
          >
            <Link to="/recetas" className="w-full block">
              Recetas
            </Link>
          </li>
          <li
            className="flex border rounded-2xl p-4 hover:bg-paleta3 w-full cursor-pointer"
            onClick={alternador}
          >
            <Link to="/contactanos" className="w-full block">
              Contáctanos
            </Link>
          </li>
          <li
            className="flex border rounded-2xl p-4 hover:bg-paleta3 w-full cursor-pointer"
            onClick={alternador}
          >
            <Link to="/ingresar" className="w-full block">
              Ingresar
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};
