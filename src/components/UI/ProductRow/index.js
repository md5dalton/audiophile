import React from "react"
import { formatPrice } from "../../../Functions"
import Img from "../Img"

import "./styles.sass"

export default ({ slug, name, price, children }) => (
    <div className="product-row">
        <Img className="thumbnail" src={`cart/image-${slug}.jpg`} />
        <div className="details">
            <div className="name">{name}</div>
            <p className="price">{formatPrice(price)}</p>
        </div>
        <div className="buttons">
            {children}
        </div>
    </div>
)