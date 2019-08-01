import * as TYPES from './actionTypes';

export const userInfoLogin = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SAVE_INFO:
      return action.payload.data;
    case TYPES.CLEAR_INFO:
      return {};
    default:
      return state;
  }
};

export const modalVisibleLogin = (state = true, action) => {
  switch (action.type) {
    case TYPES.OPEN_MODAL:
      return true;
    case TYPES.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};
