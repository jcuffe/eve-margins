import React from 'react';
import { connect } from 'react-redux';
import { fetchColonies } from '../../actions/colonies';

const Colonies = ({ colonies, charId, token, fetchColonies }) => (
  <div>
    <button onClick={() => fetchColonies(charId, token)}>Fetch Colonies</button>
    <h1>Colonies</h1>
    {Object.entries(colonies).map(([planet, facilities]) => (
      <Colony planet={planet} facilities={facilities} key={planet}/>
    ))}
  </div>
);

const Colony = ({ planet, facilities }) => (
  <div>
    <h2>{planet}</h2>
    <h3>Extractors</h3>
    <ul>
      {facilities.filter(f => f.extractor_details).map((facility, i) => (
        <li key={i}>{facility.extractor_details.heads.length} - </li>
      ))}
    </ul>
  </div>
)

const stateToProps = (state) => ({
  colonies: state.colonies,
  charId: state.character.id,
  token: state.authToken
});

const dispatchToProps = { fetchColonies };

export default connect(stateToProps, dispatchToProps)(Colonies);