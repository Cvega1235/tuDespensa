import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
export const Header = () => {
  const [menuVisible, setmenuVisble] = useState(false);
  const AlternarMenu = () => {
    setmenuVisble(!menuVisible);
  };
  return (
    <header className="p-4 w-full h-22 bg-paleta2">
      <div className="flex flex-row">
        <img
          src="/images/IconoDespensa.svg"
          alt="logo Tu Despensa"
          className="w-12 h-12"
        />
        <span>
          <p className="text-[20px]">Tu</p>
          <p className="text-[20px]">Despensa</p>
        </span>
        <nav className="flex align-middle justify-end w-full ">
          <ul className="hidden flex-row gap-5 items-center sm:flex">
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
          </ul>
          <ul className="flex items-center">
            <li className="p-1.5 rounded-2xl bg-paleta5 hover:bg-paleta3">
              <Link to="/registrar">Registrase</Link>
            </li>
            <button className="text-3xl md:hidden" onClick={AlternarMenu}>
              {menuVisible ? <p>&#10005;</p> : <p>&#9776;</p>}
            </button>
          </ul>
        </nav>
      </div>
      <Menu visible={menuVisible} alternador={AlternarMenu} />
    </header>
  );
};
