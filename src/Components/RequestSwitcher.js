import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import '../CSS/request-switcher.css';

const RequestSwitcher = ({paths}) => (
      <div className="request-switcher">
        <Link to={paths[0]}><button className="switcher-btn ajax-req">Ajax Request</button></Link>
        <Link to={paths[1]}><button className="switcher-btn fetch-req">Fetch Request</button></Link>
        <Link to={paths[2]}><button className="switcher-btn promise-req">Promise Request</button></Link>
        <Link to={paths[3]}><button className="switcher-btn xml-req">XMLHttp Request</button></Link>
      </div>
    );

export default RequestSwitcher;