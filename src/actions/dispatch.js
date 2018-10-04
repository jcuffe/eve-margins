export const type = {
  AUTHORIZE: 'authorize',
  LOGOUT: 'logout',
  SET_CHARACTER: 'set char',
  SET_SYSTEMS: 'set systems',
  SET_INPUT: 'set input',
};

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

export const setInput = (value) => ({
  type: type.SET_INPUT,
  payload: value
});