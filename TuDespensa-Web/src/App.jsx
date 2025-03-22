import React from "react";
import Pagina_Inicio from "./pages/Pagina_Inicio";
import { Sobre_Nosotros } from "./pages/Sobre_Nosotros";
import { Planes } from "./pages/Planes";
import { Ingresar } from "./pages/Ingresar";
import { Registrar } from "./pages/Registrar";

function App() {
  return (
    <div className="bg-paleta2 w-full">
      {/* <Pagina_Inicio /> */}
      {/* <Sobre_Nosotros /> */}
      {/* <Planes /> */}
      {/* <Ingresar/> */}
      <Registrar />
      <div className="bg-paleta1">App</div>
      <div className="bg-paleta2">App</div>
      <div className="bg-paleta3">App</div>
      <div className="bg-paleta4">App</div>
      <div className="bg-paleta5">App</div>
    </div>
  );
}

export default App;
