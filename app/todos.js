import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import allReducers from 'reducers/allreducers'
import {Provider} from 'react-redux';
import App from 'components/todocomponent';

const store = createStore(allReducers);
console.log(store.getState());
document.addEventListener('DOMContentLoaded', () => {

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
});
