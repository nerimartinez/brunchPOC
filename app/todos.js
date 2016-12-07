import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Reducer from 'reducers/reducer'
import App from 'app';

// Move this to initialize, that makes
// more sense don't you think?
export function start () {
const store = createStore(Reducer);

// Reformat, it looks weird with the
// comma on its own big line. Use ESLint.
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
}
