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
      rudedata: {},
      text: {}
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
    const max = Object.keys(maxend);
    const rand = Math.round(Math.random() * (max - min) + min);
    const filtered = Object.keys(maxend).filter(
      keys => this.state.rudedata.id !== rand
    );
  }

  render() {
    const orgRude = Object.keys(this.state.rudedata).map(key => {
      const newRude = this.state.rudedata[key];
      console.log(newRude.text, 'nR');
      return newRude;
    });
    console.log(orgRude, 'orgRude');
    const mainComponents = orgRude.map(key => {
      return (
        <Main
          key={key}
          rudedata={orgRude}
          handleClick={this.handleClick.bind(this)}
        />
      );
    });
    console.log(mainComponents);
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
