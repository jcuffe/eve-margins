import { setInput } from './dispatch';

export const handleInput = (event) => (dispatch) => {
  dispatch(setInput(event.target.value));
};