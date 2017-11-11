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
    const min = 0;
    const maxend = { ...this.props.rudedata };
    const max = Object.keys(maxend).length;
    return (
      <div>
        <h4>{this.props.rudedata[Math.round(Math.random() * max - min)]}</h4>
        <button onClick={this.changeData}>Test</button>
      </div>
    );
  }
}

export default Main;
