import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginButton from './auth/loginButton';
import RedirectHandler from './auth/redirectHandler';
import PlanetaryInteraction from './planetaryInteraction/planetaryInteraction';

function app({ character, token }) {
  return (
    <div>
      <Route path="/" component={LoginButton} />
      <p>token: {token}</p>
      <p>Character ID: {character.id}</p>
      <PlanetaryInteraction />
      <Route path="/authorization-redirect" component={RedirectHandler} />
    </div>
  );
}

function stateToProps(state) {
  return {
    token: state.authToken,
    character: state.character
  }
}

export default connect(stateToProps)(app);