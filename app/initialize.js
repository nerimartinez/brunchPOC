document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  var ReactDOM = require('react-dom');
  
    const element = (
      <h1>
        Hello, d!
      </h1>
    );

    ReactDOM.render(
      element,
      document.getElementById('app')
    );
});
import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
