export const type = {
  AUTHORIZE: 'authorize',
  LOGOUT: 'logout',
  SET_CHARACTER: 'set char',
};

export const setToken = (token) => ({
  type: type.AUTHORIZE,
  payload: token
});

export const setCharacter = (data) => ({
  type: type.SET_CHARACTER,
  payload: data
});