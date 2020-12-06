import React from 'react';
import propTypes from 'prop-types';

const Sidebar = (props) => (
    <div className="sidebar">
        <div className="scroll-wrapper">
            { props.children }
        </div>
    </div>
);

Sidebar.propTypes = {
    children: propTypes.element.isRequired
}

export default Sidebar;