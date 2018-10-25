import { switchMap, map, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import qs from 'qs';
import { ofType } from 'redux-observable';
import { type, setCharacter } from '../actions/dispatch';
import { urls } from '../urls';

export const characters = (state = {}, action) => {
  switch (action.type) {
    case type.SET_CHARACTER:
      return { 
        ...state, 
        ...action.character 
      };
    default:
      return state;
  }
};

//
// Verifies SSO tokens and stores character data in state
//
// TODO - find a method that avoids sending access token in query string
//        this method is vulnerable to packet sniffing, but attacker will
//        only have access to granted scopes until token expires
//

export const charactersEpic = (action$) => action$.pipe(
  ofType(type.VERIFY_TOKEN),
  switchMap(({ token }) => {
    const query = qs.stringify({ token });
    const url = [urls.tokenVerification, query].join("?");
    return ajax(url).pipe(
      tap(console.log),
      map(data => data.response),
      map(character => ({ [character.CharacterID]: { ...character, token } })), 
    )
  }),
  map(setCharacter)
);