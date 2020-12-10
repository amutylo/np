import React from "react";
import propTypes from "prop-types";
import Menuitem from "../../atoms/menuitem/Menuitem";

const RenderCategoryMenu = (props) => {
  const { items } = props;
  return (
    <div className="main-nav">
      <ul className="nav-list reset-list">
        {items &&
          items.map((item, index) => {
            return (
              <Menuitem
                url={item.entityUrl.path}
                label={item.entityLabel}
                iconClass={item.fieldIcon}
                liClass="menu-item"
                iconPosClass="left-icon"
                key={index}
                path={item.entityUrl.path}
              />
            );
          })}
      </ul>
    </div>
  );
};
RenderCategoryMenu.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
};

export default RenderCategoryMenu;