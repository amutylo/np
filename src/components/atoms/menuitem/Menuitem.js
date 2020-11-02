import React from 'react';
import Icon from '../icon/Icon';

const Menuitem = props => (
    <li className={ props.liClass }>
        <Icon type={props.type} iconClass={ props.iconClass} iconPosClass={ props.iconPosClass} />
        <a
            className={ props.type !== 'shevron' ? "link" : ""}
            href={ `/app/page${ props.url }` }
            data-drupal-link-system-path={ props.path }
            onClick={ props.onClick }
        >
            {props.label}
        </a>
    </li>
);

export default Menuitem;
