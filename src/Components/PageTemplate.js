import React, { Component } from 'react';

/*
Dabble with the idea of making this a method on a object along with the components of the other http request like

 class {
  axiosComponent() {...}    --|
  fetchComponent() {...}      |--- These methods will return the JSX
  promiseComponent() {...}    |--- for each request type
  xmlHttpComponent() {...}  --|
 }

So the axiosComponent will return the value that the CocktailListItem currently holds
  */
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

let KanyeQuote = ({quote, key}) => (
  <li className={"kanye-quote main-item"} key={key}>{quote}</li>
);


class PageTemplate extends Component {
  changeRequest(requestType, data) {
    switch(requestType) {
      case "axios":
        return data.map((d, id) => (
          <CocktailListItem
          drinkName={d.drinkName}
          instructions={d.instructions}
          ingredients={d.ingredients}
          measurements={d.measurements}
          key={id}
          />
          )
        );
        break;
      case "fetchAPI":
        return (
          <div>
            {data.length >= 1 ? <h3>Kanye West quotes:</h3> : null}
            <ul>
              {data.map((d, id) => (
                <KanyeQuote quote={d} key={id}/>
              ))}
            </ul>
          </div>
        );
        break;
      case "Promise":
        return (
          <ul>
            <li>Promise Data Comming Soon</li>
          </ul>
        );
        break;
      case "XMLHttp":
        return (
          <ul>
            <li>XMLHttp Data Comming Soon</li>
          </ul>
        );
        break;
      default:
        return(
          <ul>
            <li>Invalid Request Type</li>
          </ul>
        );
        break;
    }


  }
    render() {
      let {text, addItem, reqType, data} = this.props;
      return(
        <div>
          <p>{text}</p>
          <button className={"add-item"} onClick={addItem}>Add Item</button>
          <div className="data">
            {this.changeRequest(reqType, data)}
          </div>
        </div>
      )
    }
}

export default PageTemplate;