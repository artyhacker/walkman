import axios from 'axios';
import log from 'loglevel';

import { BASE_URL } from "../api";

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const checkResponse = response => {
  return Object.assign(response, { ok: response.status >= 200 && response.status < 300 });
};

const checkError = err => {
  log.error(err);
};

instance.interceptors.response.use(
  response => checkResponse(response),
  err => checkError(err),
);

export default instance;
