import React from 'react';
import qs from 'qs';

export default ({ location }) => {
  console.log(location);
  console.log(qs.parse(location.hash.slice(1)));
  return <div>{location.hash}</div>;
};