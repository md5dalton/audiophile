import React, { useContext } from "react"
import Button from "../../../UI/Button"
import List from "../../../UI/List"
import ProductRow from "../../../UI/ProductRow"
import CartContext from "../../../../context/CartContext"
import { formatPrice, getProducts } from "../../../../Functions"

import "./styles.sass"

export default () => {
    
    const { cart, getTotalPrice } = useContext(CartContext)

    const products = getProducts(cart)

    const totalPrice = getTotalPrice()
    const shipping = 50
    const VAT = 1.2 * totalPrice
    const grandTotal = shipping + VAT

    const prices = [
        {
            name: "total",
            value: totalPrice
        },
        {
            name: "shipping",
            value: shipping
        },
        {
            name: "vat (included)",
            value: VAT
        },
        {
            name: "grand total",
            value: grandTotal
        }
    ]

    return (
        <div className="summary">
            <h6>summary</h6>
            <List 
                className="order-summary-list"
                items={products}
                itemHandler={({ quantity, ...item }, index) => (
                    <ProductRow key={index} {...item}>
                        <div className="quantity-counter">x{quantity}</div> 
                    </ProductRow>
                )}
            />
            <List
                className="price-summary"
                items={prices}
                itemHandler={({ name, value }, index) => (
                    <li key={index}>
                        <span className="name">{name}</span>
                        <span className="price">{formatPrice(value)}</span>
                    </li>
                )}
            />
            <Button className="button confirm-button">continue & pay</Button>
        </div>
    )
}