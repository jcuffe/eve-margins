import { type } from '../actions/dispatch';

export default (state = {}, action) => {
  switch (action.type) {
    case type.SET_CHARACTER:
      return { ...state, ...action.payload };
    case type.AUTHORIZE:
      return { ...state, authToken: action.payload }
    default:
      return state;
  }
};