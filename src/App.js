import React from "react";
import "./styles/style.css";
import List from "./components/list";
import Profile from "./components/profile";

function App() {
  return (
    <div className="wrapper">
      <div className="container clearfix">
        <Profile />
        <div className="repoListContainer">
          <h2 className="repo-heading">Repositories</h2>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
