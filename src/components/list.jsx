import React from "react";
import { connect } from "react-redux";
import * as repoActions from "../actions/repoActions";
import * as httpUtils from "../utils/http";
import * as appConfig from "../appConfig";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  componentDidMount() {
    httpUtils
      .get(appConfig.endPoints.repos)
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

  filterByPage(searchList) {
    return searchList.slice();
  }

  changePage(amount = 1) {
    if (this.props.page === 0 && amount === -1) return;
    if (
      this.props.page ===
        Math.floor(this.props.repoList.length / this.props.itemsPerPage) &&
      amount === 1
    )
      return;
    this.props.setPage(this.props.page + amount);
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
          {this.filterBySearchText(this.props.repoList)
            .slice(
              this.props.page * this.props.itemsPerPage,
              (this.props.page + 1) * this.props.itemsPerPage
            )
            .map((item) => (
              <li key={item.id}>
                <a href={item.html_url}>{item.name}</a>
                {item.language && (
                  <span className={`repoLanguage`}>{item.language}</span>
                )}
                <span className="repoUpdated">
                  Updated at:{" "}
                  {item.updated_at.substring(0, item.updated_at.indexOf("T"))}
                </span>
              </li>
            ))}
        </ul>
        <div className="paginate">
          <div className="btn-container">
            <button className="page-btn" onClick={() => this.changePage(-1)}>
              Previous
            </button>
            <button className="page-btn" onClick={() => this.changePage(1)}>
              Next
            </button>
          </div>
        </div>
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
    setPage: (page) => {
      dispatch(repoActions.setPage(page));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
