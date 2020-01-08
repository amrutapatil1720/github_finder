import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url} className="repo-size">
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
