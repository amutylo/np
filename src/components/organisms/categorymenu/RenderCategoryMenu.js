import React from "react";
import Menuitem from "../../atoms/menuitem/Menuitem";

const RenderCategoryMenu = props => (
    <div className="main-nav">
        <ul className="nav-list reset-list">
            {
                props.items && props.items.map((item, index) => {
                    return <Menuitem
                        url={ item.entityUrl.path }
                        label={ item.entityLabel }
                        iconClass={ item.fieldIcon }
                        liClass="menu-item"
                        iconPosClass="left-icon"
                        key={ index }
                        path={ item.entityUrl.path }
                    />
                })
            }
        </ul>
    </div>
);

export default RenderCategoryMenu;