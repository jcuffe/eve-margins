import { mergeMap, map, tap, catchError, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { ofType, mapTo } from 'redux-observable';
import { type, authHeaders, setCharacter } from '../actions/dispatch';
import { urls } from '../urls';

export const characters = (state = {}, action) => {
  switch (action.type) {
    case type.SET_CHARACTER:
      return { 
        ...state, 
        [action.character.CharacterID]: action.character 
      };
    default:
      return state;
  }
};

//
// Verifies SSO tokens and stores character data in state
//

export const charactersEpic = (action$) => action$.pipe(
  ofType(type.VERIFY_TOKEN),
  mergeMap(({ token }) => 
    ajax({ url: urls.tokenVerification, headers: authHeaders(token) })
      .pipe(map(res => ({ ...res.response, token })))
  ),
  map(setCharacter)
);