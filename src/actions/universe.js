import axios from 'axios';
import { setSystems, authHeaders, setStructures } from './dispatch';
import { endpoints } from '../urls';

export const fetchSystems = (ids) => async (dispatch) => {
  console.log("Fetching systems");
  try {
    const requests = ids.map(id => axios.get(endpoints.system(id)));
    const data = (await Promise.all(requests))
      .map(response => response.data)
      .reduce((systems, current) => ({ [current.system_id]: current, ...systems }), {});
    dispatch(setSystems(data));
    console.log("systems", data);
  } catch (error) {
    console.log("Failed to fetch systems");
  }
};

export const fetchStructures = (ids, token) => async (dispatch) => {
  console.log(`Fetching ${ids.length} structures`);
  try {
    const options = authHeaders(token);
    const requests = ids.map(id => axios.get(endpoints.structure(id), options));
    const data = (await Promise.all(requests))
      .map(response => response.data)
      .reduce((structures, current) => ({ [current.solar_system_id]: current, ...structures }), {});
    dispatch(setStructures(data));
  } catch (error) {
    console.log("Failed to fetch structure info.");
    console.log(error);
  }
};