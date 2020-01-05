import React from "react";
import UserItem from "./userItem.jsx";
import Spinner from "./spinner.jsx";
import PropTypes from "prop-types";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  //     Users.PropTypes={
  //       users:PropTypes.array.isRequired
  //   };
  render() {
    console.log("hi", this.props);
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
      return (
        <div style={userStyle}>
          {this.props.users.map(user => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      );
    }
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
