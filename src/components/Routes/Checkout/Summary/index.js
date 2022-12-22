import React, { useContext } from "react"
import Button from "../../../UI/Button"
import List from "../../../UI/List"
import ProductRow from "../../../UI/ProductRow"
import CartContext from "../../../../context/CartContext"
import { formatPrice, getProducts } from "../../../../Functions"

import "./styles.sass"

const PriceRow = ({ name, value }) => (
    <div className="price-row">
        <span className="name">{name}</span>
        <span className="price">{formatPrice(value)}</span>
    </div>
)

export default () => {
    
    const { cart, getTotalPrice } = useContext(CartContext)

    const products = getProducts(cart)

    const totalPrice = getTotalPrice()
    const shipping = 50
    const VAT = 1.2 * totalPrice
    const grandTotal = shipping + VAT

    return (
        <div className="summary">
            <h6 className="title">summary</h6>
            <List 
                className="order-list"
                items={products}
                itemHandler={({ quantity, ...item }, index) => (
                    <ProductRow key={index} {...item}>
                        <div className="quantity-counter">x{quantity}</div> 
                    </ProductRow>
                )}
            />
            <div className="price-summary">
                <PriceRow name="total" value={totalPrice} />
                <PriceRow name="shipping" value={shipping} />
                <PriceRow name="vat (included)" value={VAT} />
                <PriceRow name="grand total" value={grandTotal} />
            </div>
            <Button className="button confirm">continue & pay</Button>
        </div>
    )
}