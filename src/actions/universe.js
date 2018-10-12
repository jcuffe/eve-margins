import { setSystems, authHeaders, setStructures, setConstellations, failed, fetching, fetchData } from './dispatch';
import { endpoints } from '../urls';

export const fetchSystems = (ids) => async (dispatch) => {
    dispatch(fetching("systems"));
    try {
      dispatch(fetchData(ids, endpoints.system, setSystems));    
  
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
    dispatch(fetchData(ids, endpoints.constellation, setConstellations));
  } catch (error) {
    dispatch(failed("constellations"));
  }
}

export const fetchStructures = (ids, token) => async (dispatch) => {
  dispatch(fetching("structures"));
  try {
    const options = authHeaders(token); // Authorization required
    dispatch(fetchData(ids, endpoints.structure, setStructures, options));
  } catch (error) {
    dispatch(failed("structures"));
  }
};