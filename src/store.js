import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

function persistState(store, keys) {
  console.log(keys);
  let currentState;

  function persist(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  function handleChange() {
    const nextState = store.getState();
    if (nextState !== currentState) {
      currentState = nextState;
      keys.forEach(key => persist(key, nextState[key]));
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
const persistedKeys = process.env.REACT_APP_PERSISTED_KEYS.split(" ");
persistState(store, persistedKeys);

export default store;