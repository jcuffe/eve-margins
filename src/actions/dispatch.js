export const type = {
  ADD_STRUCTURE: 'add structure',
  AUTHORIZE: 'authorize',
  LOGOUT: 'logout',
  SET_CHARACTER: 'set char',
  SET_SYSTEMS: 'set systems',
  SET_STRUCTURES: 'set structures',
  SET_INPUT: 'set input',
};

export const authHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

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

export const setInput = (value) => ({
  type: type.SET_INPUT,
  payload: value
});