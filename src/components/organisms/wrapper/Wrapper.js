import React from 'react';
import propTypes from 'prop-types';

const Wrapper = props => (
    <div className="wrapper">
        { props.children }
    </div>
);

Wrapper.propTypes = {
    children: propTypes.element.isRequired
}

export default Wrapper;