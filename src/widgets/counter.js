import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }
  
  handleCrementer = num => {
    this.setState({
      count: this.state.count + num
    });
  };
  
  render() {
    return (
        <div className="counter">
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.handleCrementer(-1)}>-1</button>
          <button onClick={() => this.handleCrementer(1)}>+1</button>
        </div>
    );
  }
}


