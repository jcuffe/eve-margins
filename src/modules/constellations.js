import { type } from '../actions/dispatch';

export default (state = {}, action) => {
  const actions = {
    [type.SET_CONSTELLATIONS]: action.payload
  };
  return actions[action.type] || state;
};