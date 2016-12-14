import React, {Component} from 'react';
import {delTodo, checkTodo} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TodoItem extends Component{

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.checked} onChange={() => this.props.checkTodo(this.props.todo)}/>
        <span>{this.props.todo.title} - </span>
        <span onClick={() => this.props.delTodo(this.props.todo)} style={{color: 'red'}}>X</span>
      </li>
    )
  }
}

function mapStateToProps(state){
   return {
     todos: state.todos
   }
 }

function matchDispatchToProps (dispatch){
  return bindActionCreators({delTodo, checkTodo}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps) (TodoItem);
