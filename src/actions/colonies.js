import axios from 'axios';
import { failed, fetching, fetchData, authHeaders, setColonies } from './dispatch';
// import { fetchType } from './types';
import { endpoints } from '../urls';

export const fetchColonies = (charId, token) => async (dispatch) => {
  dispatch(fetching("colonies"));
  try {
    const headers = authHeaders(token);
    const options = { transform: transformColony, headers };
    const planetIds = (await axios.get(endpoints.colonies(charId), { headers })).data
      .map(data => data.planet_id);
    console.log("postid");
    dispatch(fetchData(planetIds, endpoints.colony(charId), setColonies, options));
 } catch (error) {
    dispatch(failed(error));
  }
};

const transformColony = (colony) => colony.pins.map(facility => { 
  console.log('transforming');
  // if (facility.last_cycle_start && !facility.schematic_id) {
  //   console.log("Extractor", facility);
  //   return processExtractor(facility);
  // }
  const filteredKeys = ["latitude", "longitude", "pin_id"];
  filteredKeys.forEach(key => { if (facility[key]) { delete facility[key] }});
  return facility;
});

const processExtractor = (extractor) => ({
  heads: extractor.extractor_details.heads.length,
  started: extractor.last_cycle_start,
  finished: extractor.expiry_time,
  type: extractor.type_id,
});