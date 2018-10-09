import axios from 'axios';
import { setToken, setCharacter, authHeaders } from './dispatch';
import { urls } from '../urls';

export const verifyToken = (token) => async (dispatch) => {
  try {
    console.log('preflight', token);
    const { data } = await axios.get(urls.tokenVerification, authHeaders(token));
    dispatch(setToken(token));
    dispatch(setCharacter({ id: data.CharacterID }));
  } catch (error) {
    console.log(error);
  }
};