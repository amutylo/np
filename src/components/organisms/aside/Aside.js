import React from 'react';
import PropTypes from 'prop-types';

const Aside = props => (
    <div className="footer-aside-nav">
        <aside>
            { props.children }
        </aside>
    </div>
);


Aside.propTypes = {
    children: PropTypes.element.isRequired
};

export default Aside;
