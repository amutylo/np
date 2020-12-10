import React from "react";
import propTypes from "prop-types";
import "./Footer.css";

const Footer = (props) => <div className="copyright">{props.children}</div>;

Footer.propTypes = {
  children: propTypes.array,
};

export default Footer;
