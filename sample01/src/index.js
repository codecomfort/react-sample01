import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import onStart from './scripts/ui'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App
      onIncrement={ () => store.dispatch({ type: 'INCREMENT'}) }
      onDecrement={ () => store.dispatch({ type: 'DECREMENT' })}
      value={ store.getState() }
    />,
    document.getElementById('root')
  );
  onStart(document)
}

render()
store.subscribe(render)
