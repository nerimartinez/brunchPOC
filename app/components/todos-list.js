import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todo-item';
import {bindActionCreators} from 'redux';
import {loadTodos, getTodos} from '../actions/index';

class TodoList extends Component{

  componentWillMount() {
    this.props.getTodos();
    }

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

function matchDispatchToProps (dispatch){
  return bindActionCreators({loadTodos, getTodos}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(TodoList);
