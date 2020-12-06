import React from 'react';
import PropTypes from 'prop-types';


const Icon = props => {
    if (props.type === 'shevron')
        return (<i className="fa fa-chevron-right icon" />);
    else
        return (<i className={ `fa ${ props.iconClass } ${ props.iconPosClass }` } aria-hidden="true" />);
}

Icon.PropTypes = {
    type: PropTypes.string,
    iconClass: PropTypes.string,
    iconPosClass: PropTypes.string
}

export default Icon;
