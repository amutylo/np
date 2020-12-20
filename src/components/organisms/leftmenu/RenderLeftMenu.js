import React from "react";
import propTypes from "prop-types";
import Menuitem from "../../atoms/menuitem/Menuitem";

const RenderLeftMenu = (props) => {
  return (
    <ul className="asideMenu reset-list">
      {props.items &&
        props.items.map((item, index) => {
          return (
            <Menuitem
              url={item.url.path}
              label={item.label}
              key={index}
              path={item.url.path}
              type="shevron"
            />
          );
        })}
    </ul>
  );
};

RenderLeftMenu.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
};

export default RenderLeftMenu;
