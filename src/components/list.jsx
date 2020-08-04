import React from "react";
import { connect } from "react-redux";
import * as repoActions from "../actions/repoActions";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/shantanubhattarai/repos")
      .then((response) => response.json())
      .then((response) => this.props.setRepoList(response));
  }

  setSearchText(searchText) {
    this.setState({ search: searchText });
  }

  filterBySearchText(searchList) {
    return searchList.filter((item) =>
      item.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Find a repository..."
          onChange={(e) => this.setSearchText(e.target.value)}
        />
        <ul>
          {this.filterBySearchText(this.props.repoList).map((item) => (
            <li key={item.id}>
              <a href={item.html_url}>{item.name}</a>
              {item.language && (
                <span className="repoLanguage">{item.language}</span>
              )}
              <span className="repoUpdated">
                updated at:{" "}
                {item.updated_at.substring(0, item.updated_at.indexOf("T"))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
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
