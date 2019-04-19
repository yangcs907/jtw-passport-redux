import isEmpty from '../validation/emptyCheck.js';
import { SET_CURRENT_USER, SET_CURRENT_USER_INFO } from '../Actions/types.js';

const initialState = {
  isAuthenticated: false,
  user: {},
  userInfo: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case SET_CURRENT_USER_INFO:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userInfo: action.payload
      }
    default:
      return state;
  }
};
