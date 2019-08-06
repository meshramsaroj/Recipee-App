import './App.css'
import './createReciepeApp/recipe-module.css'

import React, { useEffect, useState } from 'react'
import Recipe from './createReciepeApp/Recipe';


const App = () => {
  const APP_ID = '75ca12a4';
  const APP_KEY = '151e5a493e29dd383e34e881da1643ef';

  const [recipes, setRecipe] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('banana');
  useEffect(() => {
    //console.log('effect has been run')
    getReciepes();
    console.log(recipes)
    console.log('let say about mydata')

  }, [query]);

  const getReciepes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
    setRecipe(data.hits)

  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  const updateSeacrh = e => {
    setSearch(e.target.value)
    //console.log(search)

  }
  return (
    <div className="App">
      <div>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type=" text" value={search} onChange={updateSeacrh} />
          <button className="search-btn" type="submit">search</button>
        </form>
      </div>

      <div className="recipes">
        {recipes.map(recipeList =>
          <Recipe key={recipeList.recipe.label} title={recipeList.recipe.label} calories={recipeList.recipe.calories}
            image={recipeList.recipe.image} ingredient={recipeList.recipe.ingredients} />
        )}
      </div>


    </div>
  );
}


export default App
