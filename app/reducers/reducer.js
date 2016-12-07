import {combineReducers} from 'redux';
import todos from './todos-reducer';

const Reducer = combineReducers({
  todos: todos
});

export default Reducer;
