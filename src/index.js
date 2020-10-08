import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App'

ReactDOM.render((
  <div>
    <Favicon url="shorturl.at/qART4"/>
    <Router>
      <App />
    </Router>
  </div>
  ), document.getElementById('root')
);