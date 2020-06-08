import  React  from "react";
import './recipe-module.css';


const Recipe = ({ title, calories, image, ingredient }) => {
  return (
    <div className="recipe-div">
      <h1> {title}</h1>

      <ul>
        <strong>Ingredient : </strong>
        {ingredient.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <p>
        <strong>Calories : </strong>
        {calories}
      </p>
      <img className="image" src={image} />
    </div>
  );
};

export default Recipe;
