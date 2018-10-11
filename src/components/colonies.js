import React from 'react';
import { connect } from 'react-redux';
import { fetchColonies } from '../actions/colonies';

const Colonies = ({ colonies, charId, token, fetchColonies }) => (
  <div>
    <button onClick={() => fetchColonies(charId, token)}>Fetch Colonies</button>
  </div>
);

const stateToProps = (state) => ({
  colonies: state.colonies,
  charId: state.character.id,
  token: state.authToken
});

const dispatchToProps = { fetchColonies };

export default connect(stateToProps, dispatchToProps)(Colonies);