import React from "react";
import propTypes from "prop-types";

const DateHtml = (props) => {
  return (
    <div>
      <i className={`fa fa-clock-o icon `} aria-hidden="true" />
      <span>{props.date}</span>
    </div>
  );
};

DateHtml.propTypes = {
  date: propTypes.instanceOf(Date).isRequired,
};

export default DateHtml;
