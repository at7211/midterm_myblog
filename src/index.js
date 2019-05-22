import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { StyleRoot } from 'radium';

(async () => {
  ReactDOM.render(
    <StyleRoot><App store={store} /></StyleRoot>,
    document.getElementById('root'),
  );
})();

