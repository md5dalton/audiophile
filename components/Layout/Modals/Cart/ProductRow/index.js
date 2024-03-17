"use client"
import { useState } from "react"
import { useCart } from "@/context/CartContext"
import ProductRow from "@/components/UI/ProductRow"
import CounterInput from "@/components/UI/CounterInput"

import "./styles.sass"

export default props => {
    
    const { slug, quantity: pQuantity } = props

    const { addCart } = useCart()

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