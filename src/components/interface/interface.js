import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../auth/loginButton';
import MarketLocations from '../market/locations';
import MarketFilters from '../market/filters';
import MarketTree from '../market/tree';
import MarketResults from '../market/results';

const Interface = ({ characters, token }) => (
  <div>
    <LoginButton />
    <p>token: {token}</p>
    <p>Character ID: {characters.id}</p>
    <MarketLocations />
    <MarketFilters />
    <MarketTree />
    <MarketResults />
  </div>
);

const stateToProps = (state) => ({
  token: state.characters.authToken,
  characters: state.characters
});

export default connect(stateToProps)(Interface);