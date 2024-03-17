import React from "react"

export default ({ legend, children }) => (
    <fieldset>
        <legend className="title subtitle">{legend}</legend>
        {children}
    </fieldset>
)