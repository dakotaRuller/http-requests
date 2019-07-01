import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import Loader from '../StatelessComponents/CssLoader';
import axios from 'axios';
import CocktailModel from '../../Models/CocktailModel';

//CSS
import '../../CSS/ajax.css';

const APIURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

class AjaxReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
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

  getData() {
    //Dabble with the idea of making this action modular because this exact thing will be used across
    //multiple files
    this.setState({loading: true});
    axios.get(APIURL)
      .then(data => {
        let d = data.data.drinks[0];
        let dataModel = new CocktailModel();
        this.setState({
          data: [
            ...this.state.data,
            dataModel.createDataModel(d, AjaxReq.dataArrayCreator)
          ],
          loading: false
        });
      })
      .catch(err => {
        //Dabble with the idea of making this action modular because this exact thing will be used across
        //multiple files
        this.setState({loading: false});
        console.log(err)
      });
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
        {this.state.loading ? <Loader icon={"cocktail"}/> : null}
      </div>
    );
  }
}

export default AjaxReq;