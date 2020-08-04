import React from "react";
import "./styles/style.css";
import List from "./components/list";
import Profile from "./components/profile";

function App() {
  return (
    <div className="container clearfix">
      <Profile />
      <div className="repoListContainer">
        <h2>Repositories</h2>
        <List />
      </div>
    </div>
  );
}

export default App;
