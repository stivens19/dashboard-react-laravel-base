import React from "react";

const FormInputGroup = (props) => {
    
    return (
        <div className="form-group">
            <div className="input-group">
                {props.children}
            </div>
        </div>
    );
};

export default FormInputGroup;
