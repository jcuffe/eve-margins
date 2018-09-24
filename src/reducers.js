import { combineReducers } from 'redux';
import { type } from './actions';

const authToken = (state = localStorage.getItem("authToken"), action) => {
  const actions = {
    [type.AUTHORIZE]: action.payload,
    [type.LOGOUT]: null
  };
  return actions[action.type] || state;
};

const character = (state = localStorage.getItem("character"), action) => {
  const actions = {
    [type.SET_CHARACTER]: { ...state, ...action.payload },
    [type.LOGOUT]: {}
  };
  return actions[action.type] || state;
}

export default combineReducers({
  authToken,
  character
});