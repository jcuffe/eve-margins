import { combineReducers } from 'redux';
import { type } from '../actions/dispatch';
import colonies from './colonies';
import structures from './structures';
import systems from './systems';

const authToken = (state = "", action) => {
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

export default combineReducers({
  authToken,
  character,
  colonies,
  structures,
  systems,
});