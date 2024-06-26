"use client"

import { useState } from "react"
import Field from "../Field"
import InputWrapper from "../InputWrapper"

export default ({ className, label, type="text", ...props }) => {
    
    const [ invalid, setInvalid ] = useState(false)

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