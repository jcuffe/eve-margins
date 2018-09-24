import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import App from './components/app';
import rootReducer from './reducers';

const store = createStore(rootReducer, undefined, applyMiddleware(thunkMiddleware));

store.subscribe(() => localStorage.setItem('TOKEN', store.getState().authToken));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));