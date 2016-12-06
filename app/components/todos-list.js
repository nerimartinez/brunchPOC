import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {delTodo, checkTodo} from '../actions/index';

class TodoList extends Component{

  createListItems(){
    return this.props.todos.map((todo) =>{
    return (
      <li key={todo.id}>
        <input type="checkbox" checked={todo.checked} onChange={() => this.props.checkTodo(todo)}/>
        <span>{todo.title} - </span>
        <span onClick={() => this.props.delTodo(todo)} style={{color: 'red'}}>X</span>
      </li>
    );
  });
  }

  render(){
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  };
}

function matchDispatchToProps (dispatch){
  return bindActionCreators({delTodo: delTodo, checkTodo: checkTodo}, dispatch)
}

function mapStateToProps(state){
   return {
     todos: state.todos
   };
}

export default connect (mapStateToProps, matchDispatchToProps)(TodoList);
