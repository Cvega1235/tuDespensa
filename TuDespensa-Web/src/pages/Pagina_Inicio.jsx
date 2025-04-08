import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
function Pagina_Inicio() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["seccion-1", "seccion-2", "seccion-3"];
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === " ") {
        event.preventDefault();
        setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    document
      .getElementById(sections[currentSection])
      .scrollIntoView({ behavior: "smooth" });
  }, [currentSection]);
  return (
    <>
      <Header />
      <article className="bg-paleta2 flex flex-col">
        <motion.section
          className="h-screen pt-20"
          id="seccion-1"
          initial={{ opacity: 0, y: 0 }}
          animate={
            currentSection === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
          }
          transition={{ duration: 0.8 }}
        >
          <div className="h-50 fil bg-[url('/images/Portada3.svg')] bg-cover bg-no-repeat w-full md:h-screen flex items-center justify-center flex-col">
            <img className="md:w-36" src="/images/IconoDespensa.svg" alt="" />
            <h1 className="text-white font-bold text-5xl md:text-8xl">
              Tu Despensa
            </h1>
            <h2 className="text-white font-bold text-3xl md:text-6xl">
              Planifica mejor, come mejor.
            </h2>
          </div>
        </motion.section>
        <motion.section
          className="flex flex-col pt-30 h-screen"
          id="seccion-2"
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentSection === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl px-3 py-4 font-bold md:animate-pulse md:text-center">
            Descubre Tu Despensa
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full overflow-hidden">
            <motion.div
              className=" p-5 border rounded-2xl border-gray-400 flex hover:shadow-2xl hover:border-paleta4 hover:border-4 items-center"
              initial={{ opacity: 0, x: -300 }}
              animate={
                currentSection === 2
                  ? { opacity: 0, x: -300 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 1 }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                currentSection === 2
                  ? { opacity: 0, x: 300 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 1 }}
              className=" p-5 border rounded-2xl border-gray-400 flex hover:shadow-2xl hover:shadow-paleta5 items-center"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={
                currentSection === 2
                  ? { opacity: 0, x: -300 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 1 }}
              className=" p-5 border rounded-2xl border-gray-400 flex hover:shadow-2xl hover:shadow-paleta5 items-center"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 300 }}
              animate={
                currentSection === 2
                  ? { opacity: 0, x: 300 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 1 }}
              className=" p-5 border rounded-2xl border-gray-400 flex hover:shadow-2xl hover:shadow-paleta5 items-center"
            >
              <img className="w-32 h-32" src="/images/calorias.png" alt="" />
              <span className="flex flex-col justify-start px-3">
                <h2 className="text-2xl font-bold">Controla tus calorias</h2>
                <p className="text-descripcion">
                  Controla las calorias de tus comidas para llevar un mejor
                  control sobre tu alimentacion
                </p>
              </span>
            </motion.div>
          </div>
        </motion.section>
      </article>
      <motion.section
        id="seccion-3"
        initial={{ opacity: 0, y: 50 }}
        animate={
          currentSection === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.section>
    </>
  );
}

export default Pagina_Inicio;
