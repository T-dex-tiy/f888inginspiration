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
    const mappedData = Object.keys(this.props.rudedata).map(key => key);
    console.log(mappedData);
    return (
      <div>
        <h4>{mappedData}</h4>
        <button onClick={this.changeData}>Test</button>
      </div>
    );
  }
}

export default Main;
