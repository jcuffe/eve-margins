import axios from 'axios';
import { setSystems, authHeaders, setStructures, setConstellations, failed, fetching } from './dispatch';
import { endpoints } from '../urls';

const fetchData = async (ids, endpoint, options = {}) => {
    const requests = ids.map(id => axios.get(endpoint(id), options));
    const data = (await Promise.all(requests))
      .map(response => response.data)
      .reduce((dictionary, element, i) => ({ ...dictionary, [ids[i]]: element }), {});
    return data;
};

export const fetchSystems = (ids) => async (dispatch) => {
    dispatch(fetching("systems"));
    try {
      const systems = await fetchData(ids, endpoints.system);    
      dispatch(setSystems(systems));
  
      // Identify constellations for fetched systems
      const constellationIds = new Set();
      Object.values(systems).forEach(system => constellationIds.add(system.constellation_id));
      dispatch(fetchConstellations(Array.from(constellationIds)));
    } catch (error) {
      dispatch(failed("systems"));
    }
};

const fetchConstellations = (ids) => async (dispatch) => {
  dispatch(fetching("constellations"));
  try {
    const constellations = await fetchData(ids, endpoints.constellation);
    dispatch(setConstellations(constellations));
  } catch (error) {
    dispatch(failed("constellations"));
  }
}

export const fetchStructures = (ids, token) => async (dispatch) => {
  dispatch(fetching("structures"));
  try {
    const options = authHeaders(token); // Authorization required
    const structures = await fetchData(ids, endpoints.structure, options);
    dispatch(setStructures(structures));
  } catch (error) {
    dispatch(failed("structures"));
  }
};