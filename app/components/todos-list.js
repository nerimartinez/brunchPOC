import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {delTodo, checkTodo} from '../actions/index';
import TodoItem from './todo-item';

class TodoList extends Component{

  render(){
    return (
      <ul>
        {this.props.todos.map((todo) =>{
        return (
          <TodoItem key={todo.id} todo={todo} del={this.props.delTodo} check={this.props.checkTodo}/>
        );
      })}
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
