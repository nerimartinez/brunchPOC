// REVIEW
// Try extracting the key press handler
// to a separate function. It is good to keep
// code outside templates.
// Nice use of react-redux!
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { addTodo} from '../actions/index';

class NewTodoInput extends Component{

  render(){
    return (
      <div>
          <input id="newTodoInput" placeholder="Enter a new todo"
          onKeyPress={e=>{
            var key = e.which || e.keyCode;
            if (key === 13) {
                this.props.addTodo(document.getElementById("newTodoInput").value);//TODO:change this
                document.getElementById("newTodoInput").value = "";//TODO:change this
            }
          }}></input>
      </div>
    )
  };
}

function matchDispatchToProps (dispatch){
  return bindActionCreators({addTodo: addTodo}, dispatch)
}

function mapStateToProps(state){
   return {
     todos: state.todos
   };
}

export default connect (mapStateToProps, matchDispatchToProps)(NewTodoInput);
