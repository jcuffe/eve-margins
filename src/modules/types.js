import { switchMap, map, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { type } from '../actions/dispatch';
import { setTypes } from '../actions/dispatch';
import { SDE } from '../urls';

export const types = (state = [], action) => {
  switch (action.type) {
    case type.SET_TYPES:
      return action.types;
    default:
      return state;
  }
};

export const typesEpic = (action$) => action$.pipe(
  ofType(type.GET_TYPES),
  switchMap(() => ajax(SDE.types).pipe(
    tap(console.log),
    map(({ response }) => response))
  ),
  map(setTypes)
);