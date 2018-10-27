import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../auth/loginButton';
import MarketLocations from '../market/locations';
import MarketFilters from '../market/filters';
import MarketTree from '../market/tree';
import MarketResults from '../market/results';
import Characters from './characters';

import { selectCharacter } from '../../actions/dispatch';

const Interface = ({ characters, selectCharacter }) => (
  <div>
    <LoginButton />
    <Characters />
    <MarketLocations />
    <MarketFilters />
    <MarketTree />
    <MarketResults />
  </div>
);

const stateToProps = (state) => ({
  characters: state.characters
});

const dispatchToProps = { selectCharacter };

export default connect(stateToProps, dispatchToProps)(Interface);