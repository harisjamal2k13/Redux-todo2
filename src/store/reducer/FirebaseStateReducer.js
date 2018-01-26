import {compose} from 'redux'
import {reactReduxFirebase} from 'react-redux-firebase'

const firebaseConfig = {
    
    apiKey: "AIzaSyD8ZThfzSfjHpflI2D4ZWcPsZKS5mq-qRI",
    authDomain: "redux-todo2.firebaseapp.com",
    databaseURL: "https://redux-todo2.firebaseio.com",
    projectId: "redux-todo2",
    storageBucket: "redux-todo2.appspot.com",
    messagingSenderId: "914749387391"
}

const config = {
    userProfile : 'users',
    enableLogging : false
}

const createStoreWithFirebase = compose (
    reactReduxFirebase(firebaseConfig , config)
)
const store = createStoreWithFirebase()