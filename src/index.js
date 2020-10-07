import React from "react";
import ReactDOM from "react-dom";

// You can choose your kind of history here (e.g. browserHistory)
import { Router, hashHistory } from 'react-router';
// Your routes.js file
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
