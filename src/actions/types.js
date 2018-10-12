import axios from 'axios';
import { addType } from './dispatch';
import { endpoints } from '../urls';

export const fetchType = (id) => async (dispatch) => {
  const { data } = await axios.get(endpoints.type(id));
  dispatch(addType(data));
}