import React from "react";
import { Header } from "../components/Header";
import { SobreNosotros } from "../components/SobreNosotros";
import { Footer } from "../components/Footer";
function Pagina_Inicio() {
  return (
    <>
      <article>
        <Header />
        <section>
          <div className="bg-[url('/images/Portada.svg')] bg-cover bg-no-repeat w-full h-96 flex items-center justify-center flex-col my-8">
            <h1 className="text-6xl">Tu Despensa</h1>
            <h2 className="text-3xl">Planifica mejor, come mejor.</h2>
          </div>
          <div className="flex justify-evenly mb-8">
            <div>
              <img
                className="flex rounded-3xl"
                src="/images/cel_supermer.svg"
                alt=""
              />
            </div>
            <div>
              <img
                className="flex rounded-3xl"
                src="/images/compras_realizadas.svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col px-8">
            <h1 className="text-3xl px-3py-4">Descubre Tu Despensa</h1>
          <div>
            <div className="my-4 p-5 border rounded-2xl border-gray-400 flex hover:shadow-2xl hover:shadow-paleta5">
              <img
                className="w-32 h-32"
                src="/images/libro-de-recetas.png"
                alt=""
              />
              <span className="flex flex-col justify-start px-3">
                <h2 className="text-2xl font-bold">Recetas</h2>
                <p className="text-descripcion">
                  Nuestro sistema inteligente analiza tus preferencias y te
                  sugiere recetas saludables, rápidas y fáciles de preparar.
                </p>
              </span>
            </div>
            <div className="my-4 p-5 border rounded-2xl border-gray-400 flex hover:shadow-2xl hover:shadow-paleta5">
              <img
                className="w-32 h-32"
                src="/images/lista-de-la-compra.png"
                alt=""
              />
              <span className="flex flex-col justify-start px-3">
                <h2 className="text-2xl font-bold">Lista de compras</h2>
                <p className="text-descripcion">
                  Consulta y edita tu lista de compras desde tu celular mientras
                  haces tus compras en el supermercado.
                </p>
              </span>
            </div>
            <div className="my-4 p-5 border rounded-2xl border-gray-400 flex hover:shadow-2xl hover:shadow-paleta5">
              <img className="w-32 h-32" src="/images/humanos.png" alt="" />
              <span className="flex flex-col justify-start px-3">
                <h2 className="text-2xl font-bold">
                  Experiencia perzonalizada
                </h2>
                <p className="text-descripcion">
                  Permite configurar preferencias dieteticas, alergias y
                  objetivos de salud.
                </p>
              </span>
            </div>
          </div>
        </section>
        <SobreNosotros />
        <Footer />
      </article>
    </>
  );
}

export default Pagina_Inicio;
