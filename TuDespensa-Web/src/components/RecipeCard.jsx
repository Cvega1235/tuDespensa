import React from "react";

export const RecipeCard = ({ image, name, description }) => {
  return (
    <button className="justify-items-center border rounded-3xl p-4 my-2 shadow-md mx-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
      <img
        className="rounded-4xl py-3 w-full h-60 object-cover"
        src={image}
        alt={name}
      />
      <div>
        <h4 className="text-center font-bold text-lg">{name}</h4>
        <p className="mx-3 text-gray-700 overflow-hidden hover:overflow-auto lg:max-h-30 sm:max-h-20">
          {description}
        </p>
      </div>
    </button>
  );
};
