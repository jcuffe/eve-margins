import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../auth/loginButton';
import MarketLocations from '../market/locations';
import MarketFilters from '../market/filters';
import MarketTree from '../market/tree';
import MarketResults from '../market/results';

const Interface = ({ characters }) => (
  <div>
    <LoginButton />
    <div>
    {Object.values(characters).map((character, i) => (
      <div key={i}>
        <p>token: {character.token}</p>
        <p>Character ID: {character.CharacterID}</p>
      </div>
    ))}
    </div>
    <MarketLocations />
    <MarketFilters />
    <MarketTree />
    <MarketResults />
  </div>
);

const stateToProps = (state) => ({
  characters: state.characters
});

export default connect(stateToProps)(Interface);