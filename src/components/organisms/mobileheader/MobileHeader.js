import React from "react";
import "./MobileHeader.css";

const MobilHeader = () => {
  let context = [];
  let title = context.title ? context.title : "Home Feed";
  return (
    <div className="mobile">
      <div className="btn" onClick={context.action}>
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <h1>{title}</h1>
      <div className="open-search" onClick={context.toggleSearch}>
        <i className="fa fa-search" aria-hidden="true" />
      </div>
    </div>
  );
};

export default MobilHeader;
