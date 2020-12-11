import React, { useContext, useEffect } from "react";
import "./MobileHeader.css";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { SET_MOBILE, SET_TITLE } from "../../../reducers/types";

const MobilHeader = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state);
  const checkMobile = () => {
    return window.innerWidth > 1365 ? false : true;
  };

  const getTitle = (title) => {
    return title ? title : "Home Feed";
  };

  useEffect(() => {
    const isMobile = checkMobile();
    dispatch({ type: SET_MOBILE, payload: isMobile });

    const newTitle = getTitle(state.title);
    dispatch({ type: SET_TITLE, payload: newTitle });
  }, []);

  if (state.isMobile /*&& !searchOpened*/) {
    console.log("title: ", state.title);
    return (
      <div className="mobile">
        <div
          className="btn"
          onClick={() => {
            //TODO::action to open mobile Sidebar menu slide fron=m the left
          }}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <h1>{state.title}</h1>
        <div
          className="open-search"
          onClick={() => {
            //TODO:: toggleSearch action
          }}
        >
          <i className="fa fa-search" aria-hidden="true" />
        </div>
      </div>
    );
  }
  return <></>;
};

export default MobilHeader;
