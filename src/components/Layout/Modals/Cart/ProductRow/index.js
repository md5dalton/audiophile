import React, { useContext, useState } from "react"
import ProductRow from "../../../../UI/ProductRow"
import CounterInput from "../../../../UI/CounterInput"
import CartContext from "../../../../../context/CartContext"

import "./styles.sass"

export default props => {
    
    const { slug, quantity: pQuantity } = props
    
    const { addCart } = useContext(CartContext)

    const [ quantity, setQuantity ] = useState(pQuantity)

    const quantityHandler = value => {
        setQuantity(value)
        addCart(slug, value)
    }

    return (
        <ProductRow {...props}>
            <CounterInput value={quantity} valueHandler={quantityHandler} />
        </ProductRow>
    )
}