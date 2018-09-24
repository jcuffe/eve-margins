import React from 'react';
import qs from 'qs';
import { images, urls } from '../../urls';

export default (props) => {
  const params = qs.stringify({
    response_type: "token",
    redirect_uri: urls.oauthRedirect,
    client_id: process.env.REACT_APP_CLIENT_ID,
    scope: process.env.REACT_APP_OAUTH_SCOPES,
    state: ""
  });
  const href = [urls.authorization, params].join("?");
  return (
    <a href={href}>
      <img src={images.loginButton} alt="Login" />
    </a>
  );
};