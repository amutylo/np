import React from 'react';
import propTypes from 'prop-types';

const Footer = (props) =>  (
    <div className="copyright">
        { props.children }
    </div>
);

Footer.propTypes = {
    children: propTypes.element.isRequired
}

export default Footer;
