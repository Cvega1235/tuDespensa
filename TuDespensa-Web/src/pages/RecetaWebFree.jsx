import React from "react";
import { Header } from "../components/Header";
import { SearchBarGreen } from "../components/SearchBarGreen";
import { RecipeCard } from "../components/RecipeCard";
import { Footer } from "../components/Footer";
function RecetaWebFree() {
  return (
    <>
      <article className="bg-paleta2">
        <Header />
        <section className="flex">
          <div className="w-3/10 m-2">
            <SearchBarGreen />
            <RecipeCard
              image="/images/receta_01.svg"
              name="Receta 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
            />
            <RecipeCard
              image="/images/receta_01.svg"
              name="Receta 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
            />
          </div>
          <div className="flex flex-col w-7/10 border-3 p-3 m-2 rounded-2xl">
            <img
              className="mx-3 rounded-3xl"
              src="/images/receta_g.svg"
              alt=""
            />
            <div className="flex">
              <div className="px-5">
                <h2 className="text-2xl font-bold text-green-800 mt-3">
                  Ingredientes
                </h2>
                <ul className="list-none pl-5">
                  <li>Ingrediente 1</li>
                  <li>Ingrediente 2</li>
                  <li>Ingrediente 3</li>
                  <li>Ingrediente 4</li>
                  <li>Ingrediente 5</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-800 mt-3">
                  Preparación
                </h2>
                <p className="px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam esse at perferendis officia dolor voluptatem nihil.
                  Consequuntur delectus voluptatum officiis quidem eius dolorum
                  numquam, dignissimos quia, labore praesentium sequi
                  laudantium.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}

export default RecetaWebFree;
