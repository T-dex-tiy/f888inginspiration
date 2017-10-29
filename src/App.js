import React, { Component } from 'react';
import firebase from 'firebase';
import Rebase from 're-base';
import './styles/App.css';
import Footer from './footer.js';
import Main from './main.js';
import createReactClass from 'create-react-class';

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
    const filtered = Object.keys(maxend).filter(
      keys => this.state.rudedata.id !== rand
    );
  }

  render() {
    const orgRude = Object.keys(this.state.rudedata);
    const mainComponents = orgRude.map(key => {
      return (
        <Main
          key={key}
          rudedata={this.state.rudedata}
          handleClick={this.handleClick.bind(this)}
        />
      );
    });
    return (
      <div className="App">
        <div className="App-main">{mainComponents}</div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
