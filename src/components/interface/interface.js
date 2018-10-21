import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../auth/loginButton';
import MarketLocations from '../market/locations';
import MarketFilters from '../market/filters';
import MarketTree from '../market/tree';
import MarketResults from '../market/results';

const Interface = ({ character, token }) => (
  <div>
    <LoginButton />
    <p>token: {token}</p>
    <p>Character ID: {character.id}</p>
    <MarketLocations />
    <MarketFilters />
    <MarketTree />
    <MarketResults />
  </div>
);

const stateToProps = (state) => ({
  token: state.authToken,
  character: state.character
});

export default connect(stateToProps)(Interface);