import React from 'react';
import { Route } from 'react-router-dom';
import RedirectHandler from './auth/redirectHandler';
import Interface from './interface/interface';

export default () => (
  <div>
    <Route path="/" component={Interface} />
    <Route path="/authorization-redirect" component={RedirectHandler} />
  </div>
);