import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { middleware as pack } from 'redux-pack';

import rootReducer from './reducers/root';

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk, pack));
const state = JSON.parse(localStorage.getItem("state"));
const store = createStore(rootReducer, state, enhancers);
persistState(store);

export default store;