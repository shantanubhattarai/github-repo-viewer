export const SET_USERINFO = "SET_USERINFO";

export function setUserInfo(userinfo) {
  return {
    type: SET_USERINFO,
    payload: userinfo,
  };
}
