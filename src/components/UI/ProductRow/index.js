import React from "react"
import Picture from "../Picture"
import { formatPrice } from "../../../Functions"

import "./styles.sass"

export default ({ image, name, price, children }) => (
    <div className="product-row">
        <Picture {...image} />
        <div className="details">
            <div className="name">{name}</div>
            <div className="price">{formatPrice(price)}</div>
        </div>
        <div className="buttons">
            {children}
        </div>
    </div>
)