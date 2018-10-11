import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

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
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, enhancers);
persistState(store);

export default store;