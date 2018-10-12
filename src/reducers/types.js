import { type } from '../actions/dispatch';

export default (state = [], action) => {
  const actions = {
    [type.ADD_TYPE]: [...state, action.payload]
  };
  return actions[action.type] || state;
}