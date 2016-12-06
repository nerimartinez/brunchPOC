// REVIEW
// Is this a todocomponent or the app file? The naming is not clear.
// If it is the app root component, it should be on the app root folder.
// NewTodoInput and TodoList should actually be on the components folder.
// The container/presentational component distinction is also important
// but since your components aren't making use of it,
// just keep them all in a components/ folder.
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
