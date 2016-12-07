import React from 'react';
import TodoList from 'components/todos-list';
import NewTodoInput from 'components/new-todo-input';

// Very clean code!
const App = () => (
  <div>
    <NewTodoInput />
    <TodoList />
  </div>
);

export default App;
