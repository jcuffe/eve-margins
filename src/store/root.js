import { combineReducers } from 'redux';
import colonies from '../reducers/colonies';
import structures from '../reducers/structures';
import systems from '../reducers/systems';
import types from '../reducers/types';
import characters from '../reducers/characters';


export default combineReducers({
  characters,
  colonies,
  structures,
  systems,
  types
});