"use client"

import { useContext, useState } from "react"
import CartContext from "@/context/CartContext"
import ProductCard from "@/components/UI/ProductCard"
import CounterInput from "@/components/UI/CounterInput"
import Button from "@/components/UI/Button"

import "./styles.sass"

export default props => {
    
    const { slug } = props

    const { addCart } = useContext(CartContext)

    const [ quantity, setQuantity ] = useState(1)

    return (
        <ProductCard {...props}>
            <CounterInput value={quantity} valueHandler={setQuantity} />
            <Button className="button" onClick={() => addCart(slug, quantity)}>add to cart</Button>
        </ProductCard>
    )
}