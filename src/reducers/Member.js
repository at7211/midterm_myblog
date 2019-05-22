import {
  STORE_MEMBER_ACCESS_TOKEN,
  REMOVE_MEMBER_ACCESS_TOKEN,
} from '../actions/Member.js';

export default (state = {
  accessToken: ['111','222','333'],
}, action) => {
  switch (action.type) {
    case STORE_MEMBER_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.accessToken,
      };
    }

    case REMOVE_MEMBER_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: null,
      };
    }

    default:
      return state;
  }
};
