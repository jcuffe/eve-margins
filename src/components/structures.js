import React from 'react';
import { connect } from 'react-redux';
import { fetchStructures } from '../actions/universe.js';

const Form = () => {
  let input;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('implement me');
    console.log(input.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={node => input = node} />
      <button type="submit">Add Structure</button>
    </form>
  );
};

const Structures = ({ structures, token, fetchStructures }) => {
  console.log("structures", structures);
  return (
    <div>
      <button onClick={() => fetchStructures(structures.ids, token)}>Fetch Structures</button>
      <ul>
        {Object.values(structures.details).map(structure => (
          <li>{structure.name}</li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

const stateToProps = (state) => ({ 
  token: state.authToken,
  structures: state.structures, 
});

const dispatchToProps = { fetchStructures };

export default connect(stateToProps, dispatchToProps)(Structures);