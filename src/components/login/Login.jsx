import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import * as TYPES from './actionTypes';

function Login({ userInfo, fetchLogin }) {
  const fetchUserInfo = () => fetchLogin(15135197519, 2800599);
  return (
    <div>
      <button onClick={fetchUserInfo}>BTN</button>
      <div>{userInfo ? userInfo.code : '1fdsafasd'}</div>
    </div>
  );
}

const mapStateToProps = state => ({
  userInfo: state.userInfoLogin,
});

const mapDispatchToProps = dispatch => ({
  fetchLogin: (phone, pwd) => dispatch({ type: TYPES.FETCH_LOGIN, payload: {phone, pwd} }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
