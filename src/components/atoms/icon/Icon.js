import React from "react";
import propTypes from "prop-types";
import "./Icon.css";

const Icon = (props) => {
  if (props.type === "shevron")
    return <i className="fa fa-chevron-right icon" />;
  else
    return (
      <i
        className={`fa ${props.iconClass} ${props.iconPosClass}`}
        aria-hidden="true"
      />
    );
};

Icon.propTypes = {
  type: propTypes.string,
  iconClass: propTypes.string,
  iconPosClass: propTypes.string,
};

export default Icon;
