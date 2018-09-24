import axios from 'axios';
import { urls } from '../urls';

export const verifyToken = (token) => async (dispatch) => {
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