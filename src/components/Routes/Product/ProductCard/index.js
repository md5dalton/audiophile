import React, { useContext, useState } from "react"
import CartContext from "../../../../context/CartContext"
import Button from "../../../UI/Button"
import CounterInput from "../../../UI/CounterInput"
import ProductCard from "../../../UI/ProductCard"

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