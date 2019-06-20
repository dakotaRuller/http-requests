import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import '../CSS/fetch.css';
const APIURL = "https://api.kanye.rest/";

class FetchReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData = this.getData.bind(this);
  }

  async getData() {
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

    this.setState({data: [...this.state.data, data]});
  }

  render() {
    return (
      <div>
        <h1>FetchRequest</h1>
        <PageTemplate
          text="Fetch Request"
          reqType={"fetchAPI"}
          addItem={this.getData}
          data={this.state.data}
        />
        {this.state.data.length <= 0 ? <p>Go ahead.. make that call</p> : null}
      </div>
    );
  }
}

export default FetchReq;