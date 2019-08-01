import { combineReducers } from "redux";

import * as loginReducers from './components/login/reducers';

const reducers = combineReducers({
  ...loginReducers,
});

export default reducers;
