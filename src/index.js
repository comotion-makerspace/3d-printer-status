import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/database'

var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE,
    projectId: "makerspaceprinterstatus",
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_messagingSenderId
  };
  firebase.initializeApp(config);
  var database = firebase.database();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
