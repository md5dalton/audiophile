import React, { useState } from "react"
import Field from "../Field"
import InputWrapper from "../InputWrapper"

const FieldText = ({ className, label, ...props }) => {
    
    const [ invalid, setInvalid ] = useState(true)

    return (
        <Field className={(className || "") + (className && invalid ? " " : "") + (invalid ? "error" : "")} >
            <div className="title subtext">
                <label>{label}</label>
                {invalid && <span className="error-msg">wrong format</span>}
            </div>
            <InputWrapper>
                <input {...props} onBlur={(ev)=>console.log(ev.target.value)} />
            </InputWrapper>
        </Field>
    )
}

FieldText.defaultProps = {
    type: "text"
}

export default FieldText