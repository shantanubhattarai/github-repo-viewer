import {combineReducers} from 'redux';

import repoReducer from './repoReducer';

const reducer = combineReducers({
  repo: repoReducer
});

export default reducer;