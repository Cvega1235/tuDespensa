import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardPlan } from "../components/CardPlan";

export const Planes = () => {
  return (
    <>
      <Header />
      <article className="bg-paleta2 min-h-screen flex flex-col pt-21">
        <section className="flex flex-col px-8 py-4 gap-8 items-center grow">
          <h1 className="text-4xl font-bold">Nuestros Planes</h1>
          <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8 justify-evenly w-full">
            <CardPlan
              nombrePlan="Plan Estandar"
              caracteristicas={[
                "Organiza Tu despesa",
                "Lista de compras",
                "Recetas",
              ]}
            />
            <CardPlan
              nombrePlan="Plan Estandar"
              caracteristicas={[
                "Organiza Tu despesa",
                "Lista de compras",
                "Recetas",
              ]}
            />
            <CardPlan
              nombrePlan="Plan Estandar"
              caracteristicas={[
                "Organiza Tu despesa",
                "Lista de compras",
                "Recetas",
              ]}
            />
          </div>
        </section>
        <Footer />
      </article>
    </>
  );
};
