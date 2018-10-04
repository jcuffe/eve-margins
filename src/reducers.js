import { combineReducers } from 'redux';
import { type } from './actions/dispatch';

const savedToken = JSON.parse(localStorage.getItem("authToken"));
const authToken = (state = savedToken, action) => {
  const actions = {
    [type.AUTHORIZE]: action.payload,
    [type.LOGOUT]: null
  };
  return actions[action.type] || state;
};

const character = (state = {}, action) => {
  const actions = {
    [type.SET_CHARACTER]: { ...state, ...action.payload },
    [type.LOGOUT]: {}
  };
  return actions[action.type] || state;
}

const savedSystems = JSON.parse(localStorage.getItem("systems")) || {};
function systems(state = savedSystems, action) {
  const actions = {
    [type.SET_SYSTEMS]: action.payload
  };
  return actions[action.type] || state;
}

function input(state = "", action) {
  console.log(action.type);
  const actions = {
    [type.SET_INPUT]: action.payload
  };
  return actions[action.type] || state;
}

export default combineReducers({
  authToken,
  character,
  systems,
  input
});