import React from 'react';
import { connect } from 'react-redux';
import { fetchSystems } from '../actions/universe';

const Systems = ({ systems, fetchSystems }) => {
  return (
    <div>
      <ul>
        <button onClick={() => fetchSystems(systems.ids)}>Fetch Systems</button>
        {Object.values(systems.details).map(system => (
          <li>{system.name}</li>
        ))}
      </ul>
    </div>
  );
};

const stateToProps = (state) => ({
  systems: state.systems
});

const dispatchToProps = { fetchSystems };

export default connect(stateToProps, dispatchToProps)(Systems);