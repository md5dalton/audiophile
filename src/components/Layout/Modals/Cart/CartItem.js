import React, { useContext, useState } from "react"
import CartContext from "../../../../context/CartContext"
import { formatPrice } from "../../../../Functions"
import CounterInput from "../../../UI/CounterInput"
import Picture from "../../../UI/Picture"


export default ({ image, name, price, slug, quantity: pQuantity }) => {

    const { addCart } = useContext(CartContext)

    const [ quantity, setQuantity ] = useState(pQuantity)

    const quantityHandler = value => {
        setQuantity(value)
        addCart(slug, value)
    }
    return (
        <li>
            <Picture {...image} />
            <div className="details">
                <div className="name">{name}</div>
                <div className="price">{formatPrice(price)}</div>
            </div>
            <CounterInput value={pQuantity} valueHandler={quantityHandler} />
        </li>
    )
}