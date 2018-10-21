import { type } from '../actions/dispatch';
import { handle } from 'redux-pack';
import { combineReducers } from 'redux';

export const start = (init) => (state) => ({ 
  ...state, 
  isLoading: true, 
  error: null, 
  items: init 
});
export const finish = (state) => ({ ...state, isLoading: false });
export const failure = (payload) => (state) => ({ ...state, error: payload });
export const setState = (payload) => (state) => ({ ...state, items: payload });
export const updateState = (payload) => (state) => ({ 
  ...state, 
  items: { 
    ...state.items, 
    ...payload 
  } 
});

const ids = (state = [], action) => {
  switch(action.type) {
    case type.FETCH_COLONY_IDS:
      return handle(state, action, {
        finish,
        start: start([]),
        failure: failure(action.payload),
        success: setState(action.payload)
      });
    default:
      return state;
  }
}

const details = (state = {}, action) => {
  switch(action.type) {
    case type.FETCH_COLONY_DETAILS:
      return handle(state, action, {
        finish,
        start: start({}),
        failure: failure(action.payload),
        success: updateState(action.payload)
      });
    default:
      return state;
  }
};

export default combineReducers({ ids, details });