import React from "react";

const Label = props => {
    let label = props.elementConfig ? props.elementConfig.label : 'label undef';
    return (
        <label htmlFor="edit-name" className="label requiredClass">{label}</label>
    );
}

export default Label;