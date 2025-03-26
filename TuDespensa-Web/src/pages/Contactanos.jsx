import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
function Contactanos() {
  return (
    <>
      <Header />
      <article className="bg-paleta2 pt-21">
        <div className="flex flex-col justify-center">
          <div className="relative w-full">
            <img
              src="/images/contact.svg"
              alt="contactanos"
              className="w-full"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold">
              Contactanos
            </h1>
          </div>
          <p className="my-5 text-xl text-center">
            Si tienes alguna duda o sugerencia, no dudes en contactarnos.
          </p>
          <form className="flex flex-col w-full px-2 grid-cols-1 gap-4">
            <label className="text-2xl">Nombre completo</label>
            <input
              className="border-3 px-2 rounded-lg"
              placeholder="Vega Pro"
              type="text"
            />
            <label className="text-2xl">Correo</label>
            <input
              className="border-3 px-2 rounded-lg"
              placeholder="Elvega@gmail.com"
              type="email"
            />
            <label className="text-2xl">Numero de Celular</label>
            <input
              className="border-3 px-2 rounded-lg"
              placeholder="12345678"
              type="text"
            />
            <label className="text-2xl">Mensaje</label>
            <textarea
              className="w-full p-3 border-3 rounded-lg resize-none overflow-hidden min-h-[100px]"
              rows={3}
              placeholder="Escribe tu mensaje"
            ></textarea>
            <div className="flex justify-center mt-4">
              <button className="bg-paleta1 w-3/10 h-15/10 rounded-lg text-white font-bold">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default Contactanos;
