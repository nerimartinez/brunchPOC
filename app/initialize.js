import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Reducer from 'reducers/reducer'
import App from 'app';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(Reducer);

  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
