import React from 'react';
import qs from 'qs';

export default (props) => {
  const baseUrl = process.env.REACT_APP_AUTHORIZE_URL;
  const params = qs.stringify({
    response_type: "token",
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    client_id: process.env.REACT_APP_CLIENT_ID,
    scope: process.env.REACT_APP_OAUTH_SCOPES,
    state: ""
  });
  console.log(params);
  const compositeUrl = [baseUrl, params].join("?");
  return (
    <a href={compositeUrl}>
      Click
    </a>
  );
};