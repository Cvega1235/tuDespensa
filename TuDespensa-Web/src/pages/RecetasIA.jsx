import React from "react";
import Sidebar from "../components/Sidebar";
import { RecipeCard } from "../components/RecipeCard";
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
              <h1 className="text-lg sm:text-xl md:text-2xl text-center h-30 items-center flex justify-center">
                ¿Que Prepararemos hoy?
              </h1>
              <div className="flex flex-col sm:flex-row mx-2 border-2 px-2 rounded-md bg-white">
                <div className="mb-2 sm:mb-0">#Vegetariana</div>
                <input
                  className="w-full sm:w-auto mx-0 sm:mx-3"
                  type="text"
                  placeholder="Ingrese sus preferencias"
                />
              </div>
              <div className="mx-5">
                <h3 className="text-sm sm:text-base my-2">Tipos de comida</h3>
                <ul className="flex flex-wrap justify-center gap-2">
                  <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                    Vegetariana
                  </li>
                  <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                    Almuerzo
                  </li>
                  <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                    Desayuno
                  </li>
                  <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                    Cena
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-5 md:mt-0 w-full md:w-3/10 mx-2">
              <h3 className="text-sm sm:text-base my-2">
                Ingredientes en despensa
              </h3>
              <ul className="grid grid-cols-2 gap-1 gap-y-2 text-center">
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 1
                </li>
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 2
                </li>
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 3
                </li>
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 4
                </li>
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 5
                </li>
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 6
                </li>
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 7
                </li>
                <li className="bg-paleta4 px-1 border rounded-lg text-xs sm:text-sm">
                  Ingrediente 8
                </li>
              </ul>
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
