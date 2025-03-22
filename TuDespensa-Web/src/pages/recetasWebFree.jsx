import React from "react";
import { Header } from "../components/Header";
import { SearchBarGreen } from "../components/SearchBarGreen";
import { RecipeCard } from "../components/RecipeCard";
import { Footer } from "../components/Footer";
function RecetasWebFree() {
  return (
    <>
      <article>
        <Header />
        <SearchBarGreen />
        <div className="mt-3 max-w-49/50 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          <RecipeCard
            image="/images/receta_05.svg"
            name="Receta 5"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
          />
          <RecipeCard
            image="/images/receta_06.svg"
            name="Receta 6"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse at perferendis officia dolor voluptatem nihil. Consequuntur delectus voluptatum officiis quidem eius dolorum numquam, dignissimos quia, labore praesentium sequi laudantium."
          />
        </div>
        <Footer />
      </article>
    </>
  );
}

export default RecetasWebFree;
