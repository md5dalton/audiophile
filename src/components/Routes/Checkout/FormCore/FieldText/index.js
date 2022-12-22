import React, { useState } from "react"
import Field from "../Field"
import InputWrapper from "../InputWrapper"

export default ({ className, label, placeholder, name, type }) => {
    
    const [ invalid, setInvalid ] = useState(false)

    return (
        <Field className={(className || "") + (className && invalid ? " " : "") + (invalid ? "error" : "")}>
            <div className="title small-text">
                <label>{label}</label>
                {invalid && <span className="error-msg">wrong format</span>}
            </div>
            <InputWrapper>
                <input type={type || "text"} placeholder={placeholder} name={name} onBlur={(ev)=>console.log(ev.target.value)} />
            </InputWrapper>
        </Field>
    )
}