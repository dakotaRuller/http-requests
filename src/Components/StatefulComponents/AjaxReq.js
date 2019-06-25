import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import axios from 'axios';
//CSS
import '../../CSS/ajax.css';

const APIURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

class AjaxReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData = this.getData.bind(this);
  }

  static dataArrayCreator(data, array, property, int) {
    for(let i = 1; i <= int; i++) {
      let item = data[`${property}${i}`];
      if(item.length > 2) {
        array.push(item);
      } else {
        break;
      }
    }
  }

  createDataModel(data) {
    let ingredientsArr = [];
    let measurementsArr = [];
    AjaxReq.dataArrayCreator(data, ingredientsArr, "strIngredient", 15);
    AjaxReq.dataArrayCreator(data, measurementsArr, "strMeasure", 15);

    let model = {
      drinkName: data.strDrink,
      instructions: data.strInstructions,
      ingredients: ingredientsArr,
      measurements: measurementsArr
    };

    return model;
  }

  getData() {
    axios.get(APIURL)
      .then(data => {
        let d = data.data.drinks[0];
        this.setState({data: [...this.state.data, this.createDataModel(d)]});
      })
      .catch(err => console.log(err));
    console.log(this);
  }

  render() {
    return (
      <div className="ajax">
        <h1>Drinks with Axios</h1>
        <div className="disclaimer-container">
          <p className="disclaimer">*disclaimer on this one. Its not actually jquerys ajax its axios. But that is because it would have been a ton of work to get jquery to work with react so axios was the closest thing to ajax i could use.*</p>
        </div>
        <PageTemplate
          reqType={"axios"}
          addItem={this.getData}
          data={this.state.data}
        />
        {this.state.data.length <= 0 ? <p>Go ahead.. make that call</p> : null}
      </div>
    );
  }
}

export default AjaxReq;