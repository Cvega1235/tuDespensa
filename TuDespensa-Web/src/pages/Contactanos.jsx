import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
function Contactanos() {
  return (
    <>
      <Header />
      <article>
        <div>
          <div className="relative w-full">
            {/* Imagen de fondo */}
            <img
              src="/images/contact.svg"
              alt="contactanos"
              className="w-full h-40 object-cover"
            />

            {/* Overlay para oscurecer la imagen */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Texto centrado */}
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Contáctanos
            </h1>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-center mt-5">
              ¿Tienes alguna duda o sugerencia?
            </h2>
            <p className="text-center mt-5">
              ¡Estamos para ayudarte! Puedes contactarnos a través de nuestro
              correo electrónico o nuestras redes sociales.
            </p>
            <div className="md:w-lg w-70 mx-auto my-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold">Nombre</h2>
              <input
                placeholder="Cristian Vega"
                className="px-2 w-full h-10 bg-white border rounded-lg"
                type="text"
              />
              <h2 className="text-xl font-bold">Correo Electronico</h2>
              <input
                placeholder="ejemplo@gmail.com"
                className="px-2 w-full h-10 bg-white border rounded-lg"
                type="text"
              />
              <h2 className="text-xl font-bold">
                Numero de telefono (Opcional)
              </h2>
              <input
                placeholder="7846316"
                className="px-2 w-full h-10 bg-white border rounded-lg"
                type="text"
              />
              <h2 className="text-xl font-bold">Mensaje</h2>
              <textarea
                className="px-2 w-full bg-white border rounded-lg"
                rows={3}
                placeholder="Escribe tu mensaje"
              ></textarea>
              <div className="flex justify-center">
                <button className="bg-paleta1 w-full rounded-lg text-white font-bold">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default Contactanos;
