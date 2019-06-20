import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import promiseImg from '../Images/promises.png';

class PromiseReq extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>PromiseRequest</h1>
        <PageTemplate img={{path: promiseImg, alt: "a logo for the promise request"}} text="Promise Request"/>
      </div>
    );
  }
}

export default PromiseReq;