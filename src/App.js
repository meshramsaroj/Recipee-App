import "./App.css";

import React, { useEffect, useState } from "react";
import Recipe from "./createReciepeApp/Recipe";

const App = () => {
  const APP_ID = "75ca12a4";
  const APP_KEY = "151e5a493e29dd383e34e881da1643ef";

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  useEffect(() => {
    getReciepes();
  }, [query]);

  const getReciepes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSeacrh = e => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <div className="d-flex justify-content-center mb-4 p-3">
        <form onSubmit={getSearch} className="form-inline my-2 my-lg-0">
          <input
            placeholder="Enter Recipee Name"
            className="form-control"
            type=" text"
            value={search}
            onChange={updateSeacrh}
          />
          <button className="btn my-2 my-sm-0" type="submit">
            search
          </button>
        </form>
      </div>

      <div className="">
        <div className="row">
          {recipes.map((recipeItem,index)=> (
            <div className="col-md-6 col-lg-6 col-sm-12">
            <Recipe
              key={index}
              title={recipeItem.recipe.label}
              calories={recipeItem.recipe.calories}
              image={recipeItem.recipe.image}
              ingredient={recipeItem.recipe.ingredients}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
