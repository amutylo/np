import React from 'react';
import propTypes from 'prop-types';

const Content = props => (
    <div className="content">
        { props.children }
    </div>
);

Content.propTypes = {
    children: propTypes.element.isRequired
}

export default Content;
