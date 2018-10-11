import { type } from '../actions/dispatch';

export default function(state = {}, action) {
  const actions = {
    [type.SET_COLONIES]: action.payload,
  };
  return actions[action.type] || state;
};