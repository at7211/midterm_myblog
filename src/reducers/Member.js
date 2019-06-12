import {
  STORE_MEMBER_ACCESS_TOKEN,
  REMOVE_MEMBER_ACCESS_TOKEN,
  STORE_REGISTER_INFO,
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

    case STORE_REGISTER_INFO: {
      console.log('--reducer--')
      return {
        ...state,
        account: action.account,
        password: action.password,
      };

    }

    default:
      return state;
  }
};
