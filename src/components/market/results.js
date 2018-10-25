import React from 'react';
import { connect } from 'react-redux';
import { getActiveTypes } from '../../actions/dispatch';

const Results = ({ getActiveTypes }) => (
  <div>
    <button onClick={getActiveTypes}>Get Active Types in The Forge</button>
  </div>
);

const dispatchToProps = { getActiveTypes };

export default connect(null, dispatchToProps)(Results);