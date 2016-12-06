// REVIEW
// Move the imports up here, even though there is
// there is no code here that uses React, Redux or ReactDOM.
// This file is suppose to just import the main application module
// after the page has loaded (this DOMContentLoaded event)
// Look for DOMContentLoaded on Google.

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  // REVIEW
  // Put the require todos call here.
  // do require('todos') or, even better,
  // import it along the rest of your imports
  // and export an 'init' function and call it here.
});
import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
