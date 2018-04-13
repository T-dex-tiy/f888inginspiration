import React, { Component } from 'react';

let randIndex;
let giverHell = '';
class Main extends Component {
  constructor() {
    super();
    this.changeData = this.changeData.bind(this);
  }

  changeData(event) {
    const min = 0;
    const maxend = { ...this.props.rudedata };
    const max = Object.keys(maxend).length;
    randIndex = Math.round(Math.random() * max - min);
    let giverHell = this.props.rudedata[randIndex];
    this.props.changeDisplay(giverHell)
  }

  render() {
    let giverHell = '';
    const min = 0;
    const maxend = { ...this.props.rudedata };
    const max = Object.keys(maxend).length;
    randIndex = Math.round(Math.random() * max - min);
    return (
      <div className="mainDisplay">
        <p className="content">{this.props.display}</p>
        <button className="btn" onClick={this.changeData}>
          Language people...
        </button>
      </div>
    );
  }
}

export default Main;
