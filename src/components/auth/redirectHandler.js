// import React from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import { verifyToken } from '../../actions/auth';

const redirectHandler = ({ location, history, verifyToken }) => {
  const { access_token: accessToken } = qs.parse(location.hash.slice(1))
  verifyToken(accessToken);
  history.push('');
  return null;
};

const dispatchToProps = { verifyToken };
export default connect(null, dispatchToProps)(redirectHandler);