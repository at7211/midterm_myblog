// @flow

export const STORE_MEMBER_ACCESS_TOKEN = 'MEMBER/STORE_ACCESS_TOKEN';
export const REMOVE_MEMBER_ACCESS_TOKEN = 'MEMBER/REMOVE_ACCESS_TOKEN';

export function storeAccessToken(accessToken) {
  return {
    type: STORE_MEMBER_ACCESS_TOKEN,
    accessToken,
  };
}

export function removeAccessToken() {
  return {
    type: REMOVE_MEMBER_ACCESS_TOKEN,
  };
}
