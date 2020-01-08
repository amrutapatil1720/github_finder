import React from "react";
import RepoItem from "./repoItem.jsx";

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} id={repo.id} />);
};

export default Repos;
