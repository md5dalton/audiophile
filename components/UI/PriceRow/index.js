import React from "react"
import { formatPrice } from "../../../Functions"

import "./styles.sass"

export default ({ name, value }) => (
    <div className="price-row">
        <p className="name">{name}</p>
        <h6 className="value">{formatPrice(value)}</h6>
    </div>
)