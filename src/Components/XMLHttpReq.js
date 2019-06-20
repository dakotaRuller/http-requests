import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import xmlImg from '../Images/xml-http.png';

class XMLHttpReq extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>XHRHttpRequest</h1>
        <PageTemplate img={{path: xmlImg, alt: "a logo for the xml request"}} text="XMLHttp Request"/>
      </div>
    );
  }
}

export default XMLHttpReq;