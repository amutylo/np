import React from 'react';
import propTypes from 'prop-types';

const Scroll = props => (
    <div className="backtotop">
        { props.children }
    </div>
);

Scroll.propTypes = {
    children: propTypes.element.isRequired
}

export default Scroll;