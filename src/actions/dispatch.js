import axios from 'axios';
import { endpoints } from '../urls';

export const type = {
  ADD_CONSTELLATION: 'add constellation',
  ADD_STRUCTURE: 'add structure',
  AUTHORIZE: 'authorize',
  FAILED: 'failed',
  FETCHING: 'fetching',
  FETCH_COLONY_IDS: 'fetch colony ids',
  FETCH_COLONY_DETAILS: 'fetch colony details',
  GET_ACTIVE_TYPES: 'get active types',
  GET_ORDER: 'get order',
  GET_ORDERS: 'get orders',
  LOGOUT: 'logout',
  SELECT_CHARACTER: 'select character',
  SET_ACTIVE_TYPES: 'set active types',
  SET_CHARACTER: 'set char',
  SET_COLONIES: 'set colonies',
  SET_CONSTELLATIONS: 'set constellations',
  SET_ORDERS: 'set orders',
  SET_STRUCTURES: 'set structures',
  SET_SYSTEMS: 'set systems',
  SET_TYPE: 'set type',
  VERIFY_TOKEN: 'verify token'
};

export const getActiveTypes = () => ({
  type: type.GET_ACTIVE_TYPES
});

export const getOrder = (typeID) => ({
  type: type.GET_ORDER,
  typeID
});

export const getOrders = () => ({
  type: type.GET_ORDERS
});

export const setType = (payload) => ({
  type: type.ADD_TYPE,
  payload
});

export const setActiveTypes = (types) => ({
  type: type.SET_ACTIVE_TYPES,
  types
});

export const setOrders = (orders, typeID) => ({
  type: type.SET_ORDERS,
  typeID,
  orders
});

export const failed = (error) => ({
  type: type.FAILED,
  payload: error
});

export const fetching = (resource) => ({
  type: type.FETCHING,
  payload: resource
});

export const fetchColonyIds = (charId, token) => ({
  type: type.FETCH_COLONY_IDS,
  promise: axios.get(endpoints.colonies(charId), { headers: authHeaders(token) })
    .then(response => response.data)
});

export const fetchColonyDetails = (charId, colonyId, token) => ({
  type: type.FETCH_COLONY_DETAILS,
  promise: axios.get(endpoints.colony(charId, colonyId), { headers: authHeaders(token) })
    .then(response => ({ [colonyId]: response.data }))
});

export const selectCharacter = (id) => ({
  type: type.SELECT_CHARACTER,
  id
});

export const setCharacter = (character) => ({
  type: type.SET_CHARACTER,
  character
});

export const setSystems = (systems) => ({
  type: type.SET_SYSTEMS,
  payload: systems
});

export const setStructures = (structures) => ({
  type: type.SET_STRUCTURES,
  payload: structures
});

export const addStructure = (structure) => ({
  type: type.ADD_STRUCTURE,
  payload: structure
});

export const setColonies = (colonies) => ({
  type: type.SET_COLONIES,
  payload: colonies
});

export const setConstellations = (constellations) => ({
  type: type.SET_CONSTELLATIONS,
  payload: constellations
});

export const setPrice = (itemId, price) => ({
  type: type.SET_PRICE,
  payload: { [itemId]: price }
});

export const setInput = (value) => ({
  type: type.SET_INPUT,
  payload: value
});

export const verifyToken = (token) => ({
  type: type.VERIFY_TOKEN,
  token
});

//
// Utility functions
//

export const authHeaders = (token) => ({ Authorization: `Bearer ${token}` });

export const fetchData = (ids, endpoint, action, options = {}) => async (dispatch) => {
  const { transform, headers } = options;
  const requests = ids.map(id => axios.get(endpoint(id), { headers }));
  let data = (await Promise.all(requests))
    .map(response => response.data)
    .reduce((dictionary, element, i) => ({ ...dictionary, [ids[i]]: element }), {});
  if (transform) {
    for (let key in data) {
      data[key] = transform(data[key]);
    }
  }
  dispatch(action(data));
};