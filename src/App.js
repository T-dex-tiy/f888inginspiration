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
let newKey = '';
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
    const min = 0;
    const maxend = { ...this.state.rudedata };
    const max = Object.keys(maxend).length;
    const rand = Math.round(Math.random() * max - min);
    newKey = rand;
  }

  render() {
    let handlerData = '';
    const orgRude = Object.keys(this.state.rudedata).map(key => {
      const newRude = this.state.rudedata[key];
      handlerData = newRude.text;
      console.log(newRude.text, 'nR');
      return handlerData;
    });
    console.log(orgRude, 'orgRude');
    console.log(handlerData);

    return (
      <div className="App">
        <div className="App-main">
          <Main rudedata={orgRude} handleClick={this.handleClick.bind(this)} />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
