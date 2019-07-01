import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import Loader from '../StatelessComponents/CssLoader';
import SpaceXModel from '../../Models/SpaceXModel';
import '../../CSS/promises.css';
const APIURL = rocketNumber => `https://api.spacexdata.com/v3/launches/${rocketNumber}`;


class PromiseReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
    this.getData = this.getData.bind(this);
  }



  getData() {
    let XHR = new XMLHttpRequest();
    let randomNum = Math.floor(Math.random() * 80);
    let GENERATEDAPIURL = APIURL(randomNum);

    this.setState({loading: true});

    XHR.onreadystatechange = () => {
      let responseObj = XHR.responseText;
      let errorObj = {
        error: `The request returned an error with the status of: ${XHR.status}`,
        readyState: XHR.readyState
      };

      return new Promise((res, reg) => {
        if(XHR.readyState === 4){
          if(XHR.status === 200) {
              res(responseObj)
            } else {
              reg(errorObj)
            }
          }
        }
      ).then(rawData => {
        let data = JSON.parse(rawData);
        let dataModel = new SpaceXModel();
        this.setState({
          data: [
            ...this.state.data,
            dataModel.createDataModel(data)
          ],
          loading: false
        });
      })
        .catch(err => {
          this.setState({loading: false});
          console.log(err)
        });
    };

    XHR.open("GET", GENERATEDAPIURL);
    XHR.send();
  }

  render() {
    return (
      <div>
        <h1>Space X Promise Request</h1>
        <PageTemplate
          addItem={this.getData}
          reqType={"promise"}
          data={this.state.data}
        />
        {this.state.data.length <= 0 ? <p>Go ahead.. make that call</p> : null}
        {this.state.loading ? <Loader icon="spaceship"/> : null}
      </div>
    );
  }
}

export default PromiseReq;