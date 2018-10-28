const images = {
  loginButton: "https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png"
};

const urls = {
  tokenVerification: "https://esi.tech.ccp.is/verify/",
  oauthRedirect: process.env.REACT_APP_OAUTH_REDIRECT,
  authorization: "https://login.eveonline.com/oauth/authorize/",
  ESI: "https://esi.evetech.net/latest/",
  SDE: "http://localhost:5000/"
};

const ESI = {
  constellations: urls.ESI + "universe/constellations",
  names: urls.ESI + "universe/names",
  regions: urls.ESI + "universe/regions",
  systems: urls.ESI + "universe/systems",
  structures: urls.ESI + "universe/structures",
  activeTypes: (region) => urls.ESI + `markets/${region}/types`,
  colonies: (id) => urls.ESI + `characters/${id}/planets`,
  colony: (charId, colonyId) => urls.ESI + `characters/${charId}/planets/${colonyId}`,
  constellation: (id) => urls.ESI + `universe/constellations/${id}`,
  orders: (regionID, typeID) => urls.ESI + `markets/${regionID}/orders?type_id=${typeID}`,
  region: (id) => urls.ESI + `universe/regions/${id}`,
  schematic: (id) => urls.ESI + `universe/schematics/${id}`,
  structure: (id) => urls.ESI + `universe/structures/${id}`,
  system: (id) => urls.ESI + `universe/systems/${id}`,
  type: (id) => urls.ESI + `universe/types/${id}`
};

const SDE = {
  types: urls.SDE + "types",
};

export {
  urls,
  images,
  ESI,
  SDE
};