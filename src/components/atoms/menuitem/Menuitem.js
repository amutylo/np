import React from "react";
import Icon from "../icon/Icon";
import propTypes from "prop-types";
import "./MenuItem.css";
import MenuCheckBox from "../../organisms/menucheckbox/MenuCheckBox";

const Menuitem = (props) => {
  return (
    <li className={props.liClass}>
      <Icon
        type={props.type}
        iconClass={props.iconClass}
        iconPosClass={props.iconPosClass}
      />
      <a
        className={props.type !== "shevron" ? "link" : ""}
        href={`/app/page${props.url}`}
        data-drupal-link-system-path={props.path}
        onClick={props.onClick}
      >
        {props.label}
        {props.index !== 0 ? (
          <MenuCheckBox />
        ) : (
          <>
            <div
              className="settings"
              title="Home feed settings"
              onClick={props.showSettings}
            >
              <Icon iconClass="fa-cog" />
            </div>
            <div className="corner" />
          </>
        )}
      </a>
    </li>
  );
};

Menuitem.propTypes = {
  liClass: propTypes.string,
  url: propTypes.string,
  path: propTypes.string,
  label: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Menuitem;
