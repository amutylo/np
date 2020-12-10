import React from "react";
import propTypes from "prop-types";
import "./input.css";

const Input = (props) => {
  const inputClasses = ["InputElement"];
  return (
    <input
      className={inputClasses.join(" ")}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
      onKeyDown={props.keydown}
    />
  );
};

Input.propTypes = {
  elementConfig: propTypes.object,
  value: propTypes.string,
  changed: propTypes.func,
  keydown: propTypes.func,
};

export default Input;
