import React from 'react';
import propTypes from 'prop-types';

const Content = props => (
    <div className="content">
        { props.children }
    </div>
);

Content.propTypes = {
    children: propTypes.arrayOf(propTypes.element)
}

export default Content;
