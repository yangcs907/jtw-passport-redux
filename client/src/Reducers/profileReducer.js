import { GET_CURRENT_PROFILE, LOADING_PROFILE, CLEAR_CURRENT_PROFILE } from '../Actions/types.js';

const initialState = {
  profile: null,
  profiles: null,
  loadingProfiles: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOADING_PROFILE:
      return {
        ...state,
        loadingProfiles: true
      }
    case GET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loadingProfiles: false
      }
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      }
    default:
      return state;
  }
};
