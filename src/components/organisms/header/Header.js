import React from "react";
import propTypes from "prop-types";
import "./Header.css";

const Header = (props) => <header className="header">{props.children}</header>;

Header.propTypes = {
  children: propTypes.element.isRequired,
};

export default Header;
