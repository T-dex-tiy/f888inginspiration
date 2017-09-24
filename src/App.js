import React, { Component } from 'react';
import firebase from 'firebase';
import Rebase from 're-base';
import './styles/App.css';

const app= firebase.initializeApp({
   apiKey: "AIzaSyDkgAmOpumXz2EYAr8DKIdX4L0vIepQF-s",
   authDomain: "myf-ingwebsite.firebaseapp.com",
   databaseURL: "https://myf-ingwebsite.firebaseio.com",
   storageBucket: "myf-ingwebsite.appspot.com",
 })

const base = Rebase.createClass(app.database());


class App extends Component {
  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default App;
