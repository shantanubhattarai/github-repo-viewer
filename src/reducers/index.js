import { combineReducers } from "redux";

import repoReducer from "./repoReducer";
import profileReducer from "./profileReducer";

const reducer = combineReducers({
  repo: repoReducer,
  profile: profileReducer,
});

export default reducer;
