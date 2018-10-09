import { combineReducers } from 'redux';
import { type } from '../actions/dispatch';
import { systemIds } from '../seeds';

function details(state = [], action) {
  const actions = {
    [type.SET_SYSTEMS]: action.payload,
    [type.ADD_SYSTEM]: [action.payload, ...state]
  };
  return actions[action.type] || state;
}

function ids(state = systemIds, action) {
  const actions = {
    [type.ADD_SYSTEM]: [action.payload, ...state]
  };
  return actions[action.type] || state;
}

export default combineReducers({
  details,
  ids
});