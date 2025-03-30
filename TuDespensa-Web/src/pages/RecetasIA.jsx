import React from "react";
import Sidebar from "../components/Sidebar";
import { RecipeCard } from "../components/RecipeCard";

const tipos = ["Vegetariana", "Vegana", "Almuerzo", "Cena"];

const ingredientes = [
  "Ingrediente 1",
  "Ingrediente 2",
  "Ingrediente 3",
  "Ingrediente 4",
  "Ingrediente 5",
  "Ingrediente 6",
  "Ingrediente 7",
  "Ingrediente 8",
];

const itemStyle = "bg-paleta4 px-1 border rounded-xl content-center text-xs sm:text-sm h-8";

const typeStyle = "bg-paleta4 px-1 border rounded-xl text-xs content-center sm:text-sm h-8";

function RecetasIA() {
  return (
    <>
      <article className="flex">
        <Sidebar />
        <div>
          {/* Aca ira el header */}
          <h1 className="mx-3 text-lg sm:text-xl md:text-2xl">
            Recetas con IA
          </h1>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-7/10">
              <h1 className="text-lg sm:text-xl md:text-3xl text-center h-30 items-center flex justify-center">
                ¿Que Prepararemos hoy?
              </h1>
              <div className="flex flex-col items-center">
                <div className="flex w-xl border-2 px-2 rounded-xl h-10 bg-white">
                  <div className="mb-2 sm:mb-0 content-center">#Vegetariana</div>
                  <input
                    className="w-full mx-0 sm:mx-3"
                    type="text"
                    placeholder="Ingrese sus preferencias"
                  />
                </div>
                <div className="w-md">
                  <h3 className="text-sm sm:text-base my-2">Tipos de comida</h3>
                  <ul className="grid grid-cols-4 gap-4 text-center ">
                {tipos.map((tipo, index) => (
                  <li key={index} className={typeStyle}>
                    {tipo}
                  </li>
                ))}
              </ul>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 w-full md:w-3/10 mx-2 gap-3 flex flex-col text-center">
              <h3 className="text-sm sm:text-base">Ingredientes en despensa</h3>
              <ul className="grid grid-cols-2 gap-1 gap-y-2">
                {ingredientes.map((ingrediente, index) => (
                  <li key={index} className={itemStyle}>
                    {ingrediente}
                  </li>
                ))}
              </ul>
              <div>
              <button className="bg-paleta1 w-2xs h-8 rounded-2xl border">Ver más</button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="my-3 mx-3 text-lg sm:text-xl md:text-2xl">
              Recomendaciones
            </h1>
            <div className="mt-3 max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <RecipeCard
                image="/images/receta_01.svg"
                name="Receta 1"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
              />
              <RecipeCard
                image="/images/receta_02.svg"
                name="Receta 2"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
              />
              <RecipeCard
                image="/images/receta_03.svg"
                name="Receta 3"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
              />
              <RecipeCard
                image="/images/receta_04.svg"
                name="Receta 4"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
              />
            </div>
          </div>
        </div>
        {/* Aca ira el footer */}
      </article>
    </>
  );
}

export default RecetasIA;
