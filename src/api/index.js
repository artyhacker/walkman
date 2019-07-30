export const BASE_URL = 'http://localhost:4000/';

export const getLoginUrl = (phone, pwd) => `/login/cellphone?phone=${phone}&password=${pwd}`;
