"use client"
import { useState } from "react"
import { addToCart } from "@/signals/cart"

import ProductRow from "@/components/UI/ProductRow"
import CounterInput from "@/components/UI/CounterInput"

import "./styles.sass"

export default props => {
    
    const { slug, price, quantity: pQuantity } = props

    const [ quantity, setQuantity ] = useState(pQuantity)

    const quantityHandler = value => {
        setQuantity(value)
        addToCart(slug, value, price)
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