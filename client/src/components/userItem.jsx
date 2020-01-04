import React from "react";
import PropTypes from "prop-types";

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
          <a
            href={this.props.user.html_url}
            className="btn btn-sm btn-dark my-1"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

UserItem.PropTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
