import React, { Component } from 'react';

class Main extends Component {
  constructor() {
    super();
    this.changeData = this.changeData.bind(this);
  }
  changeData(event) {
    console.log('weee');
    this.props.handleClick();
  }

  render() {
    return (
      <div>
        <h4>{this.props.rudedata}</h4>
        <button onClick={this.changeData}>Test</button>
      </div>
    );
  }
}

export default Main;
