import ActionTypes from '../constant';
import firebase from 'firebase'
import {db} from '../firebase'
export function changeUserName(){
    return dispatch => dispatch({type: ActionTypes.USERNAME, payload: 'Ali'})
    
}


export function addTodo (text){
    return  {
        type: ActionTypes.ADD_TODO, 
        payload: text                 
    }
}
      
export function delTodo (index){
    return {
        type : ActionTypes.DELETE_TODO,
        payload : index
    }
}
export function delAllTodo (index){
    return {
        type : ActionTypes.DEL_ALL_TODO,
    }
}
export function toggleTodo (text){
    return {
        type : ActionTypes.toggleTodo,
        text
    }
}
export function editTodo ( index , newTodo){
    return {
        type : ActionTypes.EDIT_TODO,
        payload : index,
        newTodo : newTodo
    }
}
