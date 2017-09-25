import React, { Component } from 'react';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h4>{this.props.rudedata.text}</h4>
      </div>
    );
  }
}

export default Main;
