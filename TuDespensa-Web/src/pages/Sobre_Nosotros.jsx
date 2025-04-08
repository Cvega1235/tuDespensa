import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SobreNosotros } from "../components/SobreNosotros";
import { CardEquipo } from "../components/CardEquipo";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Sobre_Nosotros = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    "seccion-1",
    "seccion-2",
    "seccion-3",
    "seccion-4",
    "seccion-5",
  ];
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
      <article className="bg-paleta2 ">
        <motion.section
          className="pt-30 h-screen"
          id="seccion-1"
          initial={{ opacity: 0, y: 50 }}
          animate={
            currentSection === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold py-4 text-center">
            Sobre Nosotros
          </h1>
          <div className="flex px-8 py-4 justify-evenly  flex-col  md:flex-row">
            <motion.img
              className="rounded-2xl"
              src="/images/yo_y_los_papus.svg"
              alt=""
              initial={{ opacity: 0, x: -300 }}
              animate={
                currentSection === 0
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -300 }
              }
              transition={{ duration: 0.8 }}
            />
            <motion.span
              className="flex flex-col items-center justify-center md:px-28 gap-8 w-auto"
              initial={{ opacity: 0, x: 300 }}
              animate={
                currentSection === 0
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 300 }
              }
              transition={{ duration: 0.8 }}
            >
              <p className="text-descripcion text-[20px]">
                Detras de la aplicacion Tu Despensa se encuentra un equipo el
                cual busca que las personas transformen su vida a través de una
                alimentacion saludable.
                <p>
                  En Tu despensa lo mas importante es tu salud cuidando a tu
                  bolsillo.
                </p>
              </p>
            </motion.span>
          </div>
        </motion.section>
        <section className="flex flex-col h-screen pt-30 " id="seccion-2">
          <h1 className="text-3xl text-center font-bold pb-8">
            Metas de TuDespensa
          </h1>
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="flex flex-col md:w-1/3 gap-4 px-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={
                currentSection === 1
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8 }}
            >
              <img className="w-32 h-32" src="/images/objetivo.svg" alt="" />
              <p>
                Tu Despensa busca convertirse en una plataforma innovadora y
                esencial en la vida cotidiana de millones de usuarios. Como una
                solución moderna para la gestión de alimentos en los hogares,
                esta aplicación ha sido diseñada para simplificar el control del
                inventario de productos, reducir el desperdicio de alimentos y
                facilitar la planificación de comidas de manera eficiente.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col md:w-1/3 gap-4 px-4 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={
                currentSection === 1
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8 }}
            >
              <img className="w-32 h-32" src="/images/meta.svg" alt="" />
              <p>
                Tu Despensa tiene una misión clara: ayudar a tantas personas
                como sea posible a gestionar de manera eficiente sus alimentos,
                optimizando el consumo en el hogar y reduciendo el desperdicio
                de comida. Con el objetivo de ofrecer una solución accesible y
                práctica, la aplicación está diseñada para facilitar la
                organización de la despensa, la planificación de comidas y la
                recomendación de recetas basadas en los ingredientes
                disponibles.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col md:w-1/3 gap-4 px-4 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={
                currentSection === 1
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8 }}
            >
              <img
                className="w-32 h-32"
                src="/images/dispositivos.svg"
                alt=""
              />
              <p>
                Cualquier persona puede acceder a Tu Despensa de forma gratuita,
                ya sea desde la aplicación móvil o la plataforma web, para
                mejorar la gestión de sus alimentos en casa. Tanto si buscas
                optimizar tu despensa, reducir el desperdicio de comida o
                mejorar la planificación de tus comidas, ¡Tu Despensa es la
                solución ideal para ti!
              </p>
            </motion.div>
          </div>
        </section>
        <section className="h-screen pt-30" id="seccion-3">
          <div className="my-4 px-8 flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold">Equipo de Tu Despensa</h1>
            <motion.div
              className="grid md:grid-cols-5 w-full"
              initial="hidden"
              animate={currentSection === 2 ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }, // Aparece en secuencia
              }}
            >
              {[
                { imagen: "/images/Andrew.svg", nombre: "Andrew" },
                { imagen: "/images/Gabriel.svg", nombre: "Gabriel" },
                { imagen: "/images/Veizan.svg", nombre: "Veichan" },
                { imagen: "/images/Vega.svg", nombre: "Vega" },
                { imagen: "/images/ChatGPT.svg", nombre: "ChatGPT" },
              ].map((persona, index) => (
                <motion.div
                  key={persona.nombre}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2 },
                    },
                  }}
                >
                  <CardEquipo
                    imagen={persona.imagen}
                    nombre={persona.nombre}
                    cargo="Development"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section
          className="my-4 px-8 flex flex-col items-center gap-8"
          id="seccion-4"
        >
          <h1 className="text-2xl font-bold">
            Descarga la aplicacion o inicia sesion
          </h1>
          <div className="grid items-center grid-rows-2 w-full md:grid-rows-1 md:grid-cols-2 gap-4">
            <button className="p-4 text-white font-bold rounded-2xl bg-zinc-800 hover:bg-paleta5">
              Descargar La Aplicacion
              <a href="https://mega.nz/file/7CAiVC7Z#MdhqkwJhTLzHOW5WFgqDu72DnsyDcbcUEL04ML7-YMI"></a>
            </button>
            <button className="p-4 text-white font-bold rounded-2xl bg-zinc-800 hover:bg-paleta5">
              <Link to="/ingresar">Iniciar sesion</Link>
            </button>
          </div>
        </section>
        <section id="seccion-5">
          <Footer />
        </section>
      </article>
    </>
  );
};
