import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imageData, ...props }) => {
    return (
        <img
            className={ imageData && imageData.className }
            src={ imageData && imageData.src }
            alt={ imageData && imageData.alt }
            onClick={ imageData && imageData.action }
            style={ imageData && imageData.style}
            { ...props }
        />
    );
};

Image.propTypes = {
    imageData: PropTypes.object.isRequired
}

export default Image;
