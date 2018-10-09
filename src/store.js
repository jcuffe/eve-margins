import rootReducer from './reducers/root';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

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

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
persistState(store);

export default store;