import axios from 'axios';

export const type = {
  ADD_CONSTELLATION: 'add constellation',
  ADD_STRUCTURE: 'add structure',
  ADD_TYPE: 'add type',
  AUTHORIZE: 'authorize',
  FAILED: 'failed',
  FETCHING: 'fetching',
  LOGOUT: 'logout',
  SET_CHARACTER: 'set char',
  SET_COLONIES: 'set colonies',
  SET_CONSTELLATIONS: 'set constellations',
  SET_STRUCTURES: 'set structures',
  SET_SYSTEMS: 'set systems',
};

export const addType = (details) => ({
  type: type.ADD_TYPE,
  payload: details
});

export const failed = (error) => ({
  type: type.FAILED,
  payload: error
})

export const fetching = (resource) => ({
  type: type.FETCHING,
  payload: resource
})

export const setToken = (token) => ({
  type: type.AUTHORIZE,
  payload: token
});

export const setCharacter = (data) => ({
  type: type.SET_CHARACTER,
  payload: data
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