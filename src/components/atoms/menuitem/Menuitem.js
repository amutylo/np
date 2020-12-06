import React from 'react';
import Icon from '../icon/Icon';
import propTypes from 'prop-types';

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

Menuitem.propTypes = {
    liClass: propTypes.string.isRequired,
    url: propTypes.string,
    path: propTypes.string,
    label: propTypes.string.isRequired,
    onClick: propTypes.func,
}

export default Menuitem;
