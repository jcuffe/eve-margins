import React, { Component } from 'react';

class Autocomplete extends Component {
  state = {
    input: ""
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  partialMatch = (datum) => {
    const [value, input] = [datum[this.props.sourceKey], this.state.input].map(String.toUpperCase);
    return value.includes(input);
  }

  render = () => (
    <div>
      <input value={this.state.input} onChange={this.handleChange} />
      <ul>
      {this.props.datasource
        .filter(this.partialMatch)
        .map((datum, key) => <li key={key}>{datum[this.props.sourceKey]}</li>)}
      </ul>
    </div>
  );
};

export default Autocomplete;