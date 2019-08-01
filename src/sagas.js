import { all } from 'redux-saga/effects';
import loginSagas from './components/login/sagas';

export default function* rootSaga() {
  yield all([
    loginSagas(),
  ])
}
