import * as repoActions from "../actions/repoActions";

const INITIAL_STATE = {
  repoList: [],
  page: 0,
  itemsPerPage: 5,
};

function repoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case repoActions.SET_REPOLIST:
      return { ...state, repoList: action.payload };
    default:
      return state;
  }
}

export default repoReducer;
