import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
export const Ingresar = () => {
  return (
    <article>
      <Header />
      <section className="flex h-130 justify-evenly">
        <img className="rounded-2xl" src="/images/imageIngresar.svg" alt="" />
        <div className="flex flex-col w-xl px-8 gap-4 justify-center ">
          <h1 className="text-3xl text-center">Ingresar</h1>
          <p>Correo Electronico</p>
          <input
            className="bg-white border rounded-[3px]"
            type="email"
            name=""
            id=""
          />
          <p>Contraseña</p>
          <input
            className="bg-white border rounded-[3px]"
            type="email"
            name=""
            id=""
          />
          <button className="bg-paleta1 p-2 rounded-2xl">Ingresar</button>
          <p className="text-center">o continua con...</p>
          <div className="flex">
            <button>g</button>
            <button>f</button>
            <button>w</button>
            <button>i</button>
          </div>
          <span className="flex gap-5 justify-center">
            <p>¿No tienes Cuenta?</p>
            <Link to="/registrar">Registrarse</Link>
          </span>
        </div>
      </section>
      <Footer />
    </article>
  );
};
