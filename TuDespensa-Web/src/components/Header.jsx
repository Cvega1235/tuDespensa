import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="p-4 w-full h-22">
      <div className="flex flex-row">
        <img src="/images/IconoDespensa.svg" alt="" className="w-12 h-12" />
        <nav className="flex align-middle justify-end w-full">
          <ul className="flex flex-row gap-5 items-center">
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">
              <Link to="/">Inicio</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">
              <Link to="/sobre_nosotros"> Sobre Nosotos</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">
              <Link to="/planes">Planes</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">
              <Link to="/recetas">Recetas</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">
              <Link to="/contactanos">Contactanos</Link>
            </li>
            <li className="p-1.5 rounded-2xl bg-paleta4 hover:bg-paleta3">
              <Link to="/ingresar">Ingresar</Link>
            </li>
            <li className="p-1.5 rounded-2xl bg-paleta5 hover:bg-paleta3">
              <Link to="/registrar">Registrase</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
