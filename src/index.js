import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './Styles/index.css';
import App from './App';
import reducer from './reducer';

const storee = createStore(
  reducer,
  {},
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={storee}>
    <App />
  </Provider>,
  document.getElementById('root')
);
