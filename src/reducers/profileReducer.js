import * as profileActions from "../actions/profileActions";

const INITIAL_STATE = {
  userInfo: {},
};

function repoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case profileActions.SET_USERINFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}

export default repoReducer;
