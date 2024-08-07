"use client"

import { useState } from "react"
import { getProduct } from "@/Functions"
import { useCart } from "@/context/CartContext"

import ProductCard from "@/components/UI/ProductCard"
import CounterInput from "@/components/UI/CounterInput"
import Button from "@/components/UI/Button"

import "./styles.sass"

export default props => {

    const { addCart } = useCart()
    
    const { slug } = props

    const { price } = getProduct(slug)

    const [ quantity, setQuantity ] = useState(1)

    return (
        <ProductCard {...props}>
            <CounterInput value={quantity} valueHandler={setQuantity} />
            <Button className="button" onClick={() => addCart(slug, quantity, price)}>add to cart</Button>
        </ProductCard>
    )
}