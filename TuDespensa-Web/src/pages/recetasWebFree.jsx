import React, { useState } from "react";
import { Header } from "../components/Header";
// import { SearchBarGreen } from "../components/SearchBarGreen"; // si tiene input decorativo
import { RecipeCard } from "../components/RecipeCard";
import { Footer } from "../components/Footer";
import { RecipeDetail } from "../components/RecipeDetail"; // Importa el componente de detalle

const appId = "6d8e6b9d";
const appKey = "490a82adf65e8cb585c8127e34872edf";
const userAccount = "Cvega1235"; // ¡Usa tu userID de Edamam aquí!

function RecetasWebFree() {
  const [query, setQuery] = useState("");
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  const fetchRecetas = async () => {
    if (query.trim() === "") return;
    setLoading(true);

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Generalmente no necesario para GET
          "Edamam-Account-User": userAccount, // ¡Añade este header!
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRecetas(data.hits);
    } catch (error) {
      console.error("Error al buscar recetas:", error);
      // Considerar mostrar un mensaje de error al usuario aquí
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchRecetas();
    }
  };

  return (
    <>
      <Header />
      <article className="bg-paleta2 min-h-screen">
        <h1 className="text-4xl text-center py-4">Recetas</h1>

        {selectedRecipe ? (
          // Renderizar el detalle de la receta seleccionada
          <section className="flex justify-center">
            <RecipeDetail recipe={selectedRecipe} />
            <button
              onClick={handleCloseDetail}
              className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Volver a las Recetas
            </button>
          </section>
        ) : (
          // Renderizar la lista de recetas
          <section>
            {/* Buscador personalizado */}
            <div className="flex justify-center items-center mb-6">
              <input
                type="text"
                placeholder="Buscar recetas por ingrediente..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                className="border rounded-xl p-3 w-80 shadow-md outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={fetchRecetas}
                className="ml-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
              >
                Buscar
              </button>
            </div>

            {loading && (
              <p className="text-center text-gray-600 mb-4">
                Buscando recetas...
              </p>
            )}

            <div className="mt-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
              {recetas.map((item, index) => (
                <RecipeCard
                  key={index}
                  image={item.recipe.image}
                  name={item.recipe.label}
                  description={item.recipe.ingredientLines.join(", ")}
                  recipeData={item.recipe}
                  onRecipeClick={handleRecipeClick}
                />
              ))}
            </div>
          </section>
        )}
      </article>
      <Footer />
    </>
  );
}

export default RecetasWebFree;
