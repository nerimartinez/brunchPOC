import React, {Component} from 'react';

class TodoItem extends Component{

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.checked} onChange={() => this.props.check(this.props.todo)}/>
        <span>{this.props.todo.title} - </span>
        <span onClick={() => this.props.del(this.props.todo)} style={{color: 'red'}}>X</span>
      </li>
    )
  }
}

export default TodoItem;
