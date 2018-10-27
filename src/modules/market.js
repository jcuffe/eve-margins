import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { switchMap, flatMap, concatMap, map, mapTo, tap, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { type, setActiveTypes, getOrders, setOrders } from '../actions/dispatch';
import { urls, endpoints } from '../urls';
import { itemIds } from '../store/seeds';
import { of, from } from 'rxjs';

const ids = (state = itemIds, action) => {
  switch (action.type) {
    case type.SET_ACTIVE_TYPES:
      return [ ...new Set([...state, ...action.types])];
    default:
      return state;
  } 
}

const orders = (state = {}, action) => {
  switch (action.type) {
    case type.SET_ORDERS:
      return {
        ...state,
        [action.typeID]: action.orders
      };
    default:
      return state;
  }
}

export const market = combineReducers({ ids, orders });

const idEpic = (action$) => action$.pipe(
  ofType(type.GET_ACTIVE_TYPES),
  tap(action => console.log(`id Epic triggered: ${action.type}`)),
  switchMap(() => 
    ajax(endpoints.activeTypes(10000002)).pipe(
      tap(console.log),
      map(({ response }) => response)
    ) // hardcoded data is gross
  ),
  flatMap((data) => [setActiveTypes(data), getOrders()])
);

const ordersEpic = (action$, state$) => action$.pipe(
  // Listen for this action
  ofType(type.GET_ORDERS), 

  // Replace the action with the list of active IDs
  mapTo(state$.value.market.ids), 

  // Turn the list into a stream of ids
  flatMap(from), 

  // Add a 1 second delay to each emit
  concatMap(id => of(id).pipe(delay(1000))), 

  // Replace the id with the http response for orders of that id
  switchMap(id => ajax(endpoints.orders(10000002, id)) 
    .pipe(map(({ response }) => ({ orders: response, id })))),
  
  // Send the orders to state storage
  map(({ orders, id }) => setOrders(orders, id))
);

export const marketEpic = combineEpics(idEpic, ordersEpic);