import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './CSS/main.css';
//Components
import RequestSwitcher from "./Components/RequestSwitcher";
import AjaxReq from "./Components/AjaxReq";
import FetchReq from "./Components/FetchReq";
import PromiseReq from "./Components/PromiseReq";
import XMLHttpReq from './Components/XMLHttpReq'

function App() {
  const switcherArr = ["", "fetch", "promise", "xml-http"];
  return (
    <Router>
      <div className="App">
        <RequestSwitcher paths={switcherArr}/>
        <Switch>
          <Route path="/" component={AjaxReq} exact/>
          <Route path="/fetch" component={FetchReq}/>
          <Route path="/promise" component={PromiseReq}/>
          <Route path="/xml-http" component={XMLHttpReq}/>
        </Switch>
        {/*get some react-router setup goin on and get those http requests made and then start working on wordpress stuff or learn more about react-router and redux*/}
        {/*maybe work on the wordpress stuff because its more lucrative in the immediate future and an added bonus is its new(to me) and fun to learn */}
      </div>
    </Router>
  );
}

export default App;
