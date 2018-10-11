import axios from 'axios';
import { failed, fetching, fetchData, authHeaders, setColonies } from './dispatch';
import { endpoints } from '../urls';

export const fetchColonies = (charId, token) => async (dispatch) => {
  dispatch(fetching("colonies"));
  try {
    const options = authHeaders(token);
    const planetIds = (await axios.get(endpoints.colonies(charId), options)).data
      .map(data => data.planet_id);
    console.log(planetIds);
    console.log(endpoints.colony(charId));
    console.log(endpoints.colony(charId)(planetIds[0]));
    const colonies = await fetchData(planetIds, endpoints.colony(charId), options);
    dispatch(setColonies(colonies));
  } catch (error) {
    dispatch(failed(error));
  }
};