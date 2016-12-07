import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {delTodo, checkTodo} from '../actions/index';

// Extract the code inside map to a TodoListItem component.
// Pass each todo as a prop to the Item component.
// This will also simplify your code and you'll be able
// to put all render code inside render().
// It will be simpler. Instead of having
// a method return all items,
// iterate on render().

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
