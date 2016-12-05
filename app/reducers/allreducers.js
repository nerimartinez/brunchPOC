import {combineReducers} from 'redux';
import todos from './todos-reducer';
//import ActiveReducer from './todos-active-reducer';

const allReducers = combineReducers({
  todos: todos
});

export default allReducers;
