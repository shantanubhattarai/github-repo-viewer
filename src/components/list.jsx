import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as repoActions from "../actions/repoActions";

function List({ repoList, setRepoList, page, itemsPerPage }) {
  useEffect(() => {
    fetch("https://api.github.com/users/shantanubhattarai/repos")
      .then((response) => response.json())
      .then((response) => setRepoList(response));
  }, [setRepoList]);
  return (
    <ul>
      {repoList.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    repoList: state.repo.repoList,
    page: state.repo.page,
    itemsPerPage: state.repo.itemsPerPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setRepoList: (repoList) => {
      dispatch(repoActions.setRepoList(repoList));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
