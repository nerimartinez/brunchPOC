import jQuery from 'jquery';
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Reducer from 'reducers/reducer'
import App from 'app';
import thunkMiddleware from 'redux-thunk';

//import Bootstrap from 'bootstrap';

var dsf = require('bootstrap');
document.addEventListener('DOMContentLoaded', () => {

  const store = createStore(Reducer, applyMiddleware(
      thunkMiddleware
    ));

  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
