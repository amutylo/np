import React from 'react';
import propTypes from 'prop-types';

const Menu = props => (
    <div>
        { props.children }
    </div>
);

Menu.propTypes = {
    children: propTypes.element.isRequired
}

export default Menu;
