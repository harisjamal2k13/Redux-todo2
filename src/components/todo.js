import React , {Component} from 'react'
import {connect} from 'react-redux';
import {addTodo , delTodo , delAllTodo , editTodo} from '../store/action/action'
import TodoList from './todoList'
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
// import {orange500, blue500} from 'material-ui/styles/colors';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue : ''
    }
  }
  _addTodo(){
    const text = this.state.inputValue
    if(text === ''){
      alert('Please add something')
    }else{
      this.props.setTodo(text)
      this.state.inputValue = ''
    }
}

  deletetodo= (index) =>{
    this.props.delTodo(index)
  }

  _delAllTodo = () => {
    this.props.delAllTodo()
  }

  _editTodo = (tod ,index) => {
    console.log(tod ,index)
    const newTodo = prompt('NEW TEXT :' , tod)
    console.log(newTodo)
    this.props.editTodo(index , newTodo)
  }
  render(){
// 
    return(
      <div  className="top" >
    <h1> Redux Todo App </h1>
    <h2> Made By: Haris </h2>
    <div >
    <input type="text" className="form-control inpt" placeholder="Add todo" onChange = {(event)=> {this.setState({inputValue : event.target.value})}} value = {this.state.inputValue}/>
    <button  onClick = {this._addTodo.bind(this)} className="btn btn-success add" > ADD </button>
      <TodoList deletetodo= {(i)=> this.deletetodo(i)} editTodo= {(tod ,index)=> this._editTodo(tod , index)} />
    <button className="btn btn-dark" onClick = {this._delAllTodo.bind(this)}>Delete All</button>
     </div>
    </div>
    )
  }
}

  function mapDispatchToProp(dispatch ){
    return({
        setTodo : (text , index)=> {dispatch(addTodo(text))},
        delTodo : (index) => {dispatch(delTodo(index))},
        delAllTodo : ()=>{dispatch(delAllTodo())},
        editTodo : (index , newTodo) => {dispatch(editTodo(index , newTodo))}
    })
}
function mapStateToProp(state){
    return({
        index : state.todo
    })
}

export default connect(mapStateToProp, mapDispatchToProp )(Todo);
