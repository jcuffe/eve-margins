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
  regions: urls.api + "universe/regions/",
  constellations: urls.api + "universe/constellations/",
  systems: urls.api + "universe/systems/",
  names: urls.api + "universe/names/?datasource=tranquility",
  region: (id) => urls.api + `universe/regions/${id}`,
  constellation: (id) => urls.api + `universe/constellations/${id}`,
  system: (id) => urls.api + `universe/systems/${id}`
};

export {
  urls,
  images,
  endpoints
};