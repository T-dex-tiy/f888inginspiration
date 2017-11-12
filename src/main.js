import React, { Component } from 'react';

let randIndex;
let giverHell = '';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      display: 'Click to get some fucking inspiration'
    };
    this.changeData = this.changeData.bind(this);
  }

  changeData(event) {
    const min = 0;
    const maxend = { ...this.props.rudedata };
    const max = Object.keys(maxend).length;
    randIndex = Math.round(Math.random() * max - min);
    giverHell = this.props.rudedata[randIndex];
    this.setState({ display: giverHell });
  }

  render() {
    let giverHell = '';
    const min = 0;
    const maxend = { ...this.props.rudedata };
    const max = Object.keys(maxend).length;
    randIndex = Math.round(Math.random() * max - min);
    return (
      <div>
        <h4 className="content">{this.state.display}</h4>
        <button onClick={this.changeData}>Language people...</button>
      </div>
    );
  }
}

export default Main;
