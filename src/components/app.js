import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginButton from './auth/loginButton';
import Autocomplete from './autocomplete';
import RedirectHandler from './auth/redirectHandler';
import { fetchSystems } from '../actions/universe';
import { handleInput } from '../actions/input';

function app({ fetchSystems, systems, input, handleInput }) {
  return (
    <div>
      <Route path="/" component={LoginButton} />
      <button onClick={fetchSystems}>Fetch Systems</button>
      <Autocomplete 
        datasource={Object.values(systems)} 
        sourceKey="name" />
      
      <Route path="/authorization-redirect" component={RedirectHandler} />
    </div>
  );
}

function stateToProps(state) {
  return {
    systems: state.systems,
    input: state.input
  }
}

const dispatchToProps = { fetchSystems, handleInput };

export default connect(stateToProps, dispatchToProps)(app);