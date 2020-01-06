import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.props.user.avatar_url}
          alt=""
          className="round-img"
        ></img>
        <h4>{this.props.user.login}</h4>
        <div>
          <Link
            to={`/user/${this.props.user.login}`}
            className="btn btn-sm btn-dark my-1"
          >
            More
          </Link>
        </div>
      </div>
    );
  }
}

UserItem.PropTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
