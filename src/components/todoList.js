import React , {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import {connect} from 'react-redux'

 
class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render(){ 
      const props = this.props 
    return(
        <ul className="list-group">
             {
          props.todoList.map((todos , index) => {
              console.log(todos)
              return( 
                 <li className="list-group-item liitem"  key = {index} >{todos}
                      <button type="button" className="btn btn-warning btnpos" onClick = {(todo ,  ind) => props.editTodo(todos , index)}>Edit</button>
                       <button type="button" className="btn btn-danger btnpos" onClick = {(ind) => props.deletetodo(index)}>Delete</button>
                </li>
               )
            } 
          )
           }
           </ul>
    )
}
}
    
function mapStateToProp(state){
    console.log(state.todo)
    return({
        todoList : state.todo
    })
}

export default connect(mapStateToProp)(TodoList)