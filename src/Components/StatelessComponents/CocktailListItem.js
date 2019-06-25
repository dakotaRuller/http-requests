import React from "react";

let CocktailListItem = ({drinkName, instructions, ingredients, measurements, id}) => (
  <li className="drink-item main-item" key={id}>
    <p><span className={"drink-title"}>Drink:</span> {drinkName}</p>
    <p>Instructions:</p>
    <p className={"small-text"}>{instructions}</p>
    <p className={"ingredients"}>Ingredients:</p>
    <ul className={"ingredients-list"}>
      {
        ingredients.map((i, id) => (
            <li className={"ingredient-item"} key={id}>
              <p className={"small-text"}>
                {i}
                <span className={"measurement"}>
                  { measurements[id] ? ` - ${measurements[id]}` : null }
                </span>
              </p>
            </li>
          )
        )
      }
    </ul>
  </li>
);

export default CocktailListItem;