import React from "react";

export const Header = () => {
  return (
    <header className="p-4 w-full h-22">
      <div className="flex flex-row">
        <img src="/images/IconoDespensa.svg" alt="" className="w-12 h-12" />
        <nav className="flex align-middle justify-end w-full">
          <ul className="hidden flex-row gap-5 items-center">
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">Inicio</li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">
              Sobre Nosotos
            </li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">Planes</li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">Rectas</li>
            <li className="p-1.5 rounded-2xl hover:bg-paleta3">Contactanos</li>
            <li className="p-1.5 rounded-2xl bg-paleta4 hover:bg-paleta3">
              Ingresar
            </li>
            <li className="p-1.5 rounded-2xl bg-paleta5 hover:bg-paleta3">
              Registrase
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
