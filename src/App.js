import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './CSS/main.css';
//Components
import RequestSwitcher from "./Components/StatefulComponents/RequestSwitcher";
import AjaxReq from "./Components/StatefulComponents/AjaxReq";
import FetchReq from "./Components/StatefulComponents/FetchReq";
import PromiseReq from "./Components/StatefulComponents/PromiseReq";

function App() {
  const switcherArr = ["", "fetch", "promise"];
  return (
    <Router>
      <div className="App">
        <RequestSwitcher paths={switcherArr}/>
        <Switch>
          <Route path="/" component={AjaxReq} exact/>
          <Route path="/fetch" component={FetchReq}/>
          <Route path="/promise" component={PromiseReq}/>
        </Switch>
        {/*get some react-router setup goin on and get those http requests made and then start working on wordpress stuff or learn more about react-router and redux*/}
        {/*maybe work on the wordpress stuff because its more lucrative in the immediate future and an added bonus is its new(to me) and fun to learn */}
      </div>
    </Router>
  );
}

export default App;
