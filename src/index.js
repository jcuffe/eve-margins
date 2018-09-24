import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';

const app = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(app, document.getElementById('root'));