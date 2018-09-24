import React from 'react';
import { Route } from 'react-router-dom';
import LoginButton from './auth/loginButton';
import RedirectHandler from './auth/redirectHandler';

const app = (props) => (
  <div>
    <Route path="/" component={LoginButton} />
    <Route path="/authorization-redirect" component={RedirectHandler} />
  </div>
)

export default app;