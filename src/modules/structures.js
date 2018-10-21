import { combineReducers } from 'redux';
import { type } from '../actions/dispatch';
import { structureIds } from '../store/seeds';

const details = (state = {}, action) => {
  const actions = {
    [type.SET_STRUCTURES]: action.payload,
  };
  return actions[action.type] || state;
}

const ids = (state = structureIds, action) => {
  const actions = {
    [type.ADD_STRUCTURE]: [action.payload, ...state]
  };
  return actions[action.type] || state;
}

export default combineReducers({
  details,
  ids
});