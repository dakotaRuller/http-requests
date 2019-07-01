import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import '../../CSS/fetch.css';
import Loader from "../StatelessComponents/CssLoader";
const APIURL = "https://api.kanye.rest/";

class FetchReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };
    this.getData = this.getData.bind(this);
  }

  async getData() {
    this.setState({loading: true});
    let response = await fetch(APIURL)
    .then(rawData => {
      if(!rawData.ok) {
        if(rawData.status >= 400 && rawData.status < 500) {
          return rawData.json(data => {
            let err = {
              errorMessage: data.message,
              statusCode: rawData.status,
              callURL: rawData.url
            };
            throw err;
          })
        } else {
          let err = {
            errorMessage: "server not responding, please try again later",
            statusCode: rawData.status
          };
          throw err;
        }
      }
      return rawData.json();
      }
    ).then(data => data);

    let data = response.quote;

    this.setState({
      data: [
        ...this.state.data,
        data
      ],
      loading: false
    });
  }

  render() {
    return (
      <div>
        <h1>FetchRequest</h1>
        <PageTemplate
          reqType={"fetchAPI"}
          addItem={this.getData}
          data={this.state.data}
        />
        {this.state.data.length <= 0 ? <p>Go ahead.. make that call</p> : null}
        {this.state.loading ? <Loader/> : null}
      </div>
    );
  }
}

export default FetchReq;