import React from "react";
import { Header } from "../components/Header";
import { SobreNosotros } from "../components/SobreNosotros";
import { CardEquipo } from "../components/CardEquipo";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Sobre_Nosotros = () => {
  return (
    <article>
      <Header />
      <div className="flex px-8 justify-evenly my-8">
        <img className="rounded-2xl" src="/images/yo_y_los_papus.svg" alt="" />
        <span className="flex flex-col items-center justify-center px-28 gap-8 w-auto">
          <h1 className="text-3xl">Sobre Nosotros</h1>
          <p className="text-descripcion text-[20px]">
            Detras de la aplicacion Tu Despensa se encuentra un equipo el cual
            busca que las personas transformen su vida a través de una
            alimentacion saludable.
            <p>
              En Tu despensa lo mas importante es tu salud cuidando a tu
              bolsillo.
            </p>
          </p>
        </span>
      </div>
      <section className="flex">
        <div className="flex flex-col w-1/3 gap-4 px-8 items-center">
          <img className="w-32 h-32" src="/images/objetivo.svg" alt="" />
          <p>
            Tu Despensa busca convertirse en una plataforma innovadora y
            esencial en la vida cotidiana de millones de usuarios. Como una
            solución moderna para la gestión de alimentos en los hogares, esta
            aplicación ha sido diseñada para simplificar el control del
            inventario de productos, reducir el desperdicio de alimentos y
            facilitar la planificación de comidas de manera eficiente.
          </p>
        </div>
        <div className="flex flex-col w-1/3 gap-4 px-4 items-center">
          <img className="w-32 h-32" src="/images/meta.svg" alt="" />
          <p>
            Tu Despensa busca convertirse en una plataforma innovadora y
            esencial en la vida cotidiana de millones de usuarios. Como una
            solución moderna para la gestión de alimentos en los hogares, esta
            aplicación ha sido diseñada para simplificar el control del
            inventario de productos, reducir el desperdicio de alimentos y
            facilitar la planificación de comidas de manera eficiente.
          </p>
        </div>
        <div className="flex flex-col w-1/3 gap-4 px-4 items-center">
          <img className="w-32 h-32" src="/images/dispositivos.svg" alt="" />
          <p>
            Tu Despensa busca convertirse en una plataforma innovadora y
            esencial en la vida cotidiana de millones de usuarios. Como una
            solución moderna para la gestión de alimentos en los hogares, esta
            aplicación ha sido diseñada para simplificar el control del
            inventario de productos, reducir el desperdicio de alimentos y
            facilitar la planificación de comidas de manera eficiente.
          </p>
        </div>
      </section>
      <section>
        <div className="my-4 px-8 flex flex-col items-center gap-8">
          <h1 className="text-3xl font-bold">Equipo de Tu Despensa</h1>
          <div className="grid grid-cols-5 w-full">
            <CardEquipo
              imagen="/images/Andrew.svg"
              nombre="Andrew"
              cargo="Development"
            />
            <CardEquipo
              imagen="/images/Gabriel.svg"
              nombre="Gabriel"
              cargo="Development"
            />
            <CardEquipo
              imagen="/images/Veizan.svg"
              nombre="Veichan"
              cargo="Development"
            />
            <CardEquipo
              imagen="/images/Vega.svg"
              nombre="Vega"
              cargo="Development"
            />
            <CardEquipo
              imagen="/images/ChatGPT.svg"
              nombre="ChatGPT"
              cargo="Development"
            />
          </div>
        </div>
      </section>
      <section className="my-4 px-8 flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">
          Descarga la aplicacion o inicia sesion
        </h1>
        <div className="flex items-center justify-evenly w-full">
          <button className="p-4 text-white font-bold rounded-2xl bg-zinc-800 hover:bg-paleta5">
            Descargar La Aplicacion
          </button>
          <button className="p-4 text-white font-bold rounded-2xl bg-zinc-800 hover:bg-paleta5">
            <Link to="/ingresar">Iniciar sesion</Link>
          </button>
        </div>
      </section>
      <Footer />
    </article>
  );
};
