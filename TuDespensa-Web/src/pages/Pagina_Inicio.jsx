import React from "react";
import { Header } from "../components/Header";
function Pagina_Inicio() {
  return (
    <>
      <article>
        <Header />
        <div className="bg-[url('/images/Portada.svg')] bg-cover bg-no-repeat w-full h-96 flex items-center justify-center flex-col my-8">
          <h1 className="text-6xl">Tu Despensa</h1>
          <h2 className="text-3xl">Planifica mejor, come mejor</h2>
        </div>
      </article>
    </>
  );
}

export default Pagina_Inicio;
