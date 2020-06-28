import React from "react";

const Recipe = ({ title, calories, image, ingredient }) => {
  return (
    <div>
      <div className="card-deck my-1 mx-1 h-auto ">
        <div className="card">
        <h5 className="card-header ">{title}</h5>

          <div className="card-body">
            <div className="card-text m-0 ">
              <ul className="list-group ">
                <strong>Ingredient : </strong>
                {ingredient.map((ingredient,index) => (
                  <li className="list-group-item border-0" key={index}>
                    {ingredient.text}
                  </li>
                ))}
              </ul>
            </div>
            <p className="card-text">
              <strong>Calories : </strong>
              {calories}
            </p>
          </div>
          <img src={image} className="card-img h-25" />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
