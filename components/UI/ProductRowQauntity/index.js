import React from "react"
import ProductRow from "../ProductRow"

export default ({ quantity, ...props }) => (
    <ProductRow {...props}>
        <p className="quantity-counter">x{quantity}</p> 
    </ProductRow>
)