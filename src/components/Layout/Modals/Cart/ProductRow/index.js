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
    
    // quantity !== pQuantity
    // use pQuantity for CounterInput value instead of quantity
    // console.log(slug, pQuantity, quantity)

    return (
        <ProductRow {...props}>
            <CounterInput value={pQuantity} valueHandler={quantityHandler} />
        </ProductRow>
    )
}