import React from "react"
import Picture from "../Picture"
import { formatPrice } from "../../../Functions"

import "./styles.sass"

export default ({ image, new: isNew, name, description, price, children }) => (
    <div className="product-card">
        <Picture {...image} />
        <div className="details">
            {!isNew && <div className="overline new-product">new product</div>}
            <h4 className="name">{name}</h4>
            <p className="description">{description}</p>
            {price && <h6 className="price">{formatPrice(price)}</h6>}
            <div className="buttons">
                {children}
            </div>
        </div>
    </div>
)