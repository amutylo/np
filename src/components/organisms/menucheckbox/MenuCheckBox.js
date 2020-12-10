import React from "react";
import propTypes from "prop-types";
import "./MenuCheckBox.css";

const toggleCategoryStatus = (e) => {
  e.preventDefault();
  console.log("toggleCategoryStatus");
};

const MenuCheckBox = (props) => {
  const { value } = props;
  const isActive = props.value ? "active" : "";

  return (
    <div className={`checkbox ${isActive}`}>
      {value ? <i className="fa fa-check" aria-hidden="true" /> : ""}
    </div>
  );
};

MenuCheckBox.propTypes = {
  value: propTypes.string,
};

export default MenuCheckBox;
