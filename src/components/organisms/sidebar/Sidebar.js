import React from "react";
import propTypes from "prop-types";

const Sidebar = (props) => {
  //TODO:: check if sidebar is open
  const sideBarIsOpen = "";
  return (
    <div className={`sidebar ${sideBarIsOpen}`}>
      <div className="scroll-wrapper">{props.children}</div>
    </div>
  );
};

Sidebar.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};

export default Sidebar;
