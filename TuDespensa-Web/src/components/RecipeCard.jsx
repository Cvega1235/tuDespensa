import React from "react";

export const RecipeCard = ({ image, name, description }) => {
  return (
    <div className="justify-items-center border-3 rounded-3xl p-4 my-2 shadow-lg">
      <img
        className="rounded-3xl py-3 w-full h-48 object-cover"
        src={image}
        alt={name}
      />
      <div>
        <h4 className="text-center font-bold text-lg">{name}</h4>
        <p className="mx-3 text-gray-700">{description}</p>
      </div>
    </div>
  );
};
