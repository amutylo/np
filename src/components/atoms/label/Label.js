import React from "react";
import propTypes from 'prop-types';

const Label = props => {
    let label = props.elementConfig ? props.elementConfig.label : 'label undef';
    return (
        <label htmlFor="edit-name" className="label requiredClass">{label}</label>
    );
}

Label.propTypes = {
    elementConfig: propTypes.object,
    label: propTypes.string.isRequired
}

export default Label;