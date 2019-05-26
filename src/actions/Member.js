export const STORE_MEMBER_ACCESS_TOKEN = 'MEMBER/STORE_ACCESS_TOKEN';
export const REMOVE_MEMBER_ACCESS_TOKEN = 'MEMBER/REMOVE_ACCESS_TOKEN';
export const STORE_REGISTER_INFO = 'MEMBER/STORE_REGISTER_INFO';

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

export function storeRegisterInfo(account, password) {
  return {
    type: STORE_REGISTER_INFO,
    account,
    password,
  }
}