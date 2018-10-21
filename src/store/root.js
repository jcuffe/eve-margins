import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import colonies from '../modules/colonies';
import structures from '../modules/structures';
import systems from '../modules/systems';
import types from '../modules/types';
import characters from '../modules/characters';

export const rootReducer = combineReducers({
  characters,
  colonies,
  structures,
  systems,
  types
});

export const rootEpic = combineEpics({});