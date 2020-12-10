import React from "react";
import propTypes from "prop-types";
import "./Logo.css";

const Logo = (props) => <div className="logo">{props.children}</div>;

Logo.propTypes = {
  children: propTypes.element.isRequired,
};

export default Logo;
