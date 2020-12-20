import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import "./Overlay.css";

const Overlay = (props) => {
  const { state } = useContext(GlobalContext);

  if (state.isMobile && state.sideBarOpened) {
    return <div className="overlay" onClick={props.sideBarToggle}></div>;
  }
  return null;
};

export default Overlay;
