import React from "react";

const RecipeIngredient = ({ ingredient }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredient.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} />
    </div>
  );
};

export default RecipeIngredient;
