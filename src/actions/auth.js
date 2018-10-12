import axios from 'axios';
import { setToken, setCharacter, authHeaders } from './dispatch';
import { urls } from '../urls';

export const verifyToken = (token) => async (dispatch) => {
  try {
    const headers = authHeaders(token);
    const { data } = await axios.get(urls.tokenVerification, { headers });
    dispatch(setToken(token));
    dispatch(setCharacter({ id: data.CharacterID }));
  } catch (error) {
    console.log(error);
  }
};