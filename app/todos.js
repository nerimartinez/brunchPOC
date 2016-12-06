// REVIEW
// Nice use of react-redux w/ combined reducers
import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
// Just call it reducer
import allReducers from 'reducers/allreducers'
import {Provider} from 'react-redux';
import App from 'components/todocomponent';

const store = createStore(allReducers);
console.log(store.getState());
// REVIEW
// Substitute this for a regular function.
// Call it from initialize. Please see the initialize file.
document.addEventListener('DOMContentLoaded', () => {

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
});


