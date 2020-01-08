import React, { Fragment } from "react";
import Spinner from "./spinner.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "./repos.jsx";

class SingleUserData extends React.Component {
  componentDidMount() {
    this.props.getSingleUserData(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static PropTypes = {
    loading: PropTypes.bool.isRequired,
    getSingleUserData: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.singleUserData;
    if (this.props.isLoading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1 className="text">{name}</h1>
            <h5 className="text">Location: {location}</h5>
          </div>
          <div>
            {bio && (
              <Fragment>
                <strong>Bio:</strong>
                <p>{bio}</p>
              </Fragment>
            )}

            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong>
                    {name}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website:</strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers:{followers}</div>
          <div className="badge badge-success">Following:{following}</div>

          <div className="badge badge-light">Public Repos:{public_repos}</div>

          <div className="badge badge-dark">Public Gists:{public_gists}</div>
        </div>
        <h5 style={{ marginLeft: "5.2em" }}> Repositories are:</h5>
        <Repos repos={this.props.repos} />
      </Fragment>
    );
  }
}

export default SingleUserData;
