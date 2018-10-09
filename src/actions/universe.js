import axios from 'axios';
import { setSystems, authHeaders, setStructures } from './dispatch';
import { endpoints } from '../urls';

export const fetchSystems = () => async (dispatch) => {
  console.log("Fetching systems");
  try {
    const systemIds = await getIds(endpoints.systems);
    const systems = await namesFromIds(systemIds);
    dispatch(setSystems(systems));
    console.log("systems", systems);
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
    dispatch(setStructures(data));
  } catch (error) {
    console.log("Failed to fetch structure info.");
    console.log(error);
  }
};

async function getIds(endpoint) {
  const { data } = await axios.get(endpoint);
  return data;
}

async function namesFromIds(ids) {
  let systems = {};
  for (let i = 0; i < ids.length; i += 1000) {
    const slice = ids.slice(i, 1000 + i);
    const { data } = await axios.post(endpoints.names, slice);
    data.forEach(sys => systems[sys.id] = { name: sys.name, id: sys.id });
  }
  return systems;
}