import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { middleware as pack } from 'redux-pack';

import { rootReducer, rootEpic } from './root';

function persistState(store) {
  let currentState;

  function handleChange() {
    const nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      localStorage.setItem("state", JSON.stringify(currentState));
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware();
  const enhancers = composeEnhancers(applyMiddleware(epicMiddleware, thunk, pack));
  const state = JSON.parse(localStorage.getItem("state")) || {};
  const store = createStore(rootReducer, state, enhancers);
  persistState(store);
  epicMiddleware.run(rootEpic);
  return store;
};