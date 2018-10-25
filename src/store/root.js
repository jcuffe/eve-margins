import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import colonies from '../modules/colonies';
import structures from '../modules/structures';
import systems from '../modules/systems';
import types from '../modules/types';
import { characters, charactersEpic } from '../modules/characters';
import { market, marketEpic } from '../modules/market';

export const rootReducer = combineReducers({
  characters,
  colonies,
  market,
  structures,
  systems,
  types
});

export const rootEpic = combineEpics(
  charactersEpic,
  marketEpic
);