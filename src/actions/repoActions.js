export const SET_REPOLIST = "SET_REPOLIST";
export const SET_PAGE = "SET_PAGE";

export function setRepoList(repoList) {
  return {
    type: SET_REPOLIST,
    payload: repoList,
  };
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    payload: page,
  };
}
