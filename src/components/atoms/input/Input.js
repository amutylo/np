import React from "react";

const Input = props => {
    const inputClasses = ['InputElement'];
    return (
        <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            onKeyDown={props.keydown}
        />
    );
}

export default Input;