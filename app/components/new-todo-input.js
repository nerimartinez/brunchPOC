import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { addTodo} from '../actions/index';

// The way to avoid using document.getElementById and acessing the DOM
// directly is to add an event handler to <input/> and use a local state.
// Something like:
// <input onChange={(event) => this.setState({newTodoText: event.target.value})}
// You can also make it go through Redux here, 
// but local state is not always evil,
// specially in this case 
// where you are just storing the value from a form field.
class NewTodoInput extends Component{

 keyPressHandler(e){
  var key = e.which || e.keyCode;
  if (key === 13) {
      this.props.addTodo(document.getElementById("newTodoInput").value);//TODO:change this
      document.getElementById("newTodoInput").value = "";//TODO:change this
  }
}

  render(){
    return (
      <div>
          <input id="newTodoInput" placeholder="Enter a new todo"
          onKeyPress={e=>{
                this.keyPressHandler(e);
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
