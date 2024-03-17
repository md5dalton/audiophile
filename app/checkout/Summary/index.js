import React, { useContext } from "react"
import { getProducts } from "../../../../Functions"
import Button from "../../../UI/Button"
import List from "../../../UI/List"
import CartContext from "../../../../context/CartContext"
import PriceRow from "../../../UI/PriceRow"
import ProductRowQauntity from "../../../UI/ProductRowQauntity"

import "./styles.sass"

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
                itemHandler={(item, index) => <ProductRowQauntity key={index} {...item} /> }
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