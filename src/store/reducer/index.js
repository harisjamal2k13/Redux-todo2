import reducer from './reducer'
import todo from './todo'
import visibilityFilter from './setVisibilty'
import {combineReducers} from 'redux'
import {firebaseStateReducer} from 'react-redux-firebase'
const rootReducers =  combineReducers({
    userName : reducer,
    todo : todo,
    firbase : firebaseStateReducer
})

export default rootReducers;