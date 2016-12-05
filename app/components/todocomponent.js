import React from 'react';
import TodoList from '../containers/todos-list';
import NewTodoInput from '../containers/new-todo-input';

const App = () => (
  <div>
    <NewTodoInput />
    <TodoList />
  </div>
);

export default App;
