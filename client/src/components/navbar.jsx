import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar bg-danger">
      <h4 className="title">
        <i className={props.icon}></i>
        {props.title}
      </h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
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
