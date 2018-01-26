
import React from 'react'
import firebase from 'firebase'


 var config = {
  apiKey: "AIzaSyD8ZThfzSfjHpflI2D4ZWcPsZKS5mq-qRI",
  authDomain: "redux-todo2.firebaseapp.com",
  databaseURL: "https://redux-todo2.firebaseio.com",
  projectId: "redux-todo2",
  storageBucket: "redux-todo2.appspot.com",
  messagingSenderId: "914749387391"
  };
  firebase.initializeApp(config);


// export const auth = () => {
//     firebase.auth()
// }

export const db = () => {
    firebase.database()
}
