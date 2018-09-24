import axios from 'axios';
import { urls } from './urls';

const type = {
  AUTHORIZE: 'authorize',
  LOGOUT: 'logout',
  SET_CHARACTER: 'set char',
};

const setToken = (token) => ({
  type: type.AUTHORIZE,
  payload: token
});

const setCharacter = (data) => ({
  type: type.SET_CHARACTER,
  payload: data
});

const verifyToken = (token) => async (dispatch) => {
  try {
    console.log('preflight', token);
    const { data: { CharacterID: id } } = await axios.get(urls.tokenVerification, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch(setToken(token));
    dispatch(setCharacter({ id }));
  } catch (error) {
    console.log(error);
  }
};

export {
  type,
  verifyToken
};