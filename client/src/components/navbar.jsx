import React from "react";
import ProtoTypes from "prop-types";
const Navbar = props => {
  return (
    <nav className="navbar bg-danger">
      <h4 className="title">
        <i className={props.icon}></i>
        {props.title}
      </h4>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
Navbar.ProtoTypes = {
  title: ProtoTypes.string.isRequired,
  icon: ProtoTypes.string.isRequired
};
export default Navbar;
