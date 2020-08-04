export const SET_REPOLIST = 'SET_REPOLIST';

export function setRepoList(repoList){
  return {
    type: SET_REPOLIST,
    payload: repoList
  }
}