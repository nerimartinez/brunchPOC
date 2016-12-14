import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todo-item';

class TodoList extends Component{

  render(){
    return (
      <ul>
        {this.props.todos.map((todo) =>{
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      })}
      </ul>
    )
  };
}

function mapStateToProps(state){
   return {
     todos: state.todos
   };
}

export default connect (mapStateToProps)(TodoList);
