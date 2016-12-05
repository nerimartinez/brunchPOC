import {combineReducers} from 'redux';
import todos from './todos-reducer';

const allReducers = combineReducers({
  todos: todos
});

export default allReducers;
