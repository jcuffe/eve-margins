const images = {
  loginButton: "https://web.ccpgamescdn.com/eveonlineassets/developers/eve-sso-login-black-small.png"
};

const urls = {
  tokenVerification: "https://esi.tech.ccp.is/verify/",
  oauthRedirect: "http://localhost:3000/authorization-redirect/",
  authorization: "https://login.eveonline.com/oauth/authorize/",
  api: "https://esi.evetech.net/latest/"
};

const endpoints = {
  constellations: urls.api + "universe/constellations",
  names: urls.api + "universe/names",
  regions: urls.api + "universe/regions",
  systems: urls.api + "universe/systems",
  structures: urls.api + "universe/structures",
  constellation: (id) => urls.api + `universe/constellations/${id}`,
  orders: (id) => urls.api + `markets/${id}/orders`,
  region: (id) => urls.api + `universe/regions/${id}`,
  structure: (id) => urls.api + `universe/structures/${id}`,
  system: (id) => urls.api + `universe/systems/${id}`
};

export {
  urls,
  images,
  endpoints
};