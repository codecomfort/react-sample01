import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import onStart from './scripts/ui'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

onStart(window, document)
