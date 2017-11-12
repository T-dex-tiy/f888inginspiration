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
      display: ''
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

  render() {
    let handlerData = '';
    const orgRude = Object.keys(this.state.rudedata).map(key => {
      const newRude = this.state.rudedata[key];
      handlerData = newRude.text;
      return handlerData;
    });

    return (
      <div className="App">
        <div className="App-main">
          <Main
            className="txtDisplay"
            rudedata={orgRude}
            display={this.state.display}
          />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
