import { call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import log from 'loglevel';

import * as TYPES from './actionTypes';
import axios from '../../utils/axios';
import { getLoginUrl } from '../../api';

function* fetchLogin(action) {
  try {
    const response = yield call(axios.get, getLoginUrl(action.payload.phone, action.payload.pwd));
    if (response.ok) {
      console.log(response.data);
      yield put({ type: TYPES.SAVE_INFO, payload: { data: response.data } });
    } else {
      throw new Error('login error');
    }
  } catch (e) {
    log.error(e);
    message.error('登陆失败');
  }
}

function* allSagas() {
  yield takeEvery(TYPES.FETCH_LOGIN, fetchLogin);
}

export default allSagas;
