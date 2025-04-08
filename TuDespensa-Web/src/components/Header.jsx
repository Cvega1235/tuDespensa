import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  const [menuVisible, setmenuVisble] = useState(false);
  const AlternarMenu = () => {
    setmenuVisble(!menuVisible);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <header className="p-4 w-full h-20 fixed bg-paleta4 z-2 text-white">
      <div className="flex flex-row">
        <img
          src="/images/IconoDespensa.svg"
          alt="logo Tu Despensa"
          className="w-12 h-12"
        />
        <span>
          <p className="text-[16px]">Tu</p>
          <p className="text-[16px]">Despensa</p>
        </span>
        <nav className="flex align-middle justify-end w-full ">
          <ul className="hidden flex-row gap-5 items-center sm:flex">
            <li className="p-1.5 rounded-2xl hover:bg-paleta3 hover:text-black">
              <Link to="/">Inicio</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3 hover:text-black">
              <Link to="/sobre_nosotros"> Sobre Nosotos</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3 hover:text-black">
              <Link to="/planes">Planes</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3 hover:text-black">
              <Link to="/recetas">Recetas</Link>
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3 hover:text-black">
              <Link to="/contactanos">Contactanos</Link>
            </li>
            <ul className="hidden items-center gap-1">
              <li className="p-1.5 rounded-2xl border border-paleta3 hover:bg-paleta3 hover:text-black">
                <Link to="/ingresar">Ingresar</Link>
              </li>
              <li className="p-1.5 rounded-2xl border border-paleta3 hover:bg-paleta3 hover:text-black">
                <Link to="/registrar">Registrase</Link>
              </li>
            </ul>
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
