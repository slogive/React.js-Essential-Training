import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.js';
// import AppTwo from './AppTwo.js';
// import AppThree from './AppThree.js';
// import AppFetch from './AppFetch.js';
import AppRouter from './AppRouter.js';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    {/* <AppFetch nametag='slogive' /> */}
    <AppRouter />
  </Router>,
  document.getElementById('root')
);
