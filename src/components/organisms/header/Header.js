import React from 'react';
import propTypes from 'prop-types';

const Header = (props) => (
    <header className="header">
        { props.children }
    </header>
);

Header.propTypes = {
    children: propTypes.element.isRequired
}

export default Header;
