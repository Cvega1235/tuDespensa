import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardPlan } from "../components/CardPlan";

export const Planes = () => {
  return (
    <article className="bg-paleta2">
      <Header />
      <section className="flex flex-col px-8 py-4 gap-8 items-center">
        <h1 className="text-4xl font-bold">Nuestros Planes</h1>
        <div className="flex justify-evenly w-full">
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
  );
};
