import React, { Component } from 'react';
import firebase from 'firebase';
import Rebase from 're-base';
import './styles/App.css';
import Footer from './footer.js';
import Main from './main.js';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDkgAmOpumXz2EYAr8DKIdX4L0vIepQF-s',
  authDomain: 'myf-ingwebsite.firebaseapp.com',
  databaseURL: 'https://myf-ingwebsite.firebaseio.com',
  storageBucket: 'myf-ingwebsite.appspot.com'
});

const base = Rebase.createClass(app.database());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rudedata: {}
    };
  }

  componentDidMount() {
    base.syncState(`rudedata`, {
      context: this,
      state: 'rudedata'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleClick() {
    const min = 1;
    const maxend = { ...this.state.rudedata };
    const max = Object.keys(maxend).length;
    const rand = Math.round(Math.random() * (max - min) + min);
    let key = [];
    key = rand;

    const filtered = Object.keys(maxend).filter(keys => {
      rand === this.state.rudedata[key];
      console.log(rand);
    });
    console.log(filtered);
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          {Object.keys(this.state.rudedata).map(key => {
            return (
              <Main
                key={key}
                rudedata={this.state.rudedata[key]}
                handleClick={this.handleClick.bind(this)}
              />
            );
          })}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
