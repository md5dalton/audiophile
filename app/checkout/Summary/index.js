"use client"

import { getProducts } from "@/Functions"
import { useCart } from "@/context/CartContext"

import List from "@/components/UI/List"
import ProductRowQauntity from "@/components/UI/ProductRowQauntity"
import PriceRow from "@/components/UI/PriceRow"
import Button from "@/components/UI/Button"

import "./styles.sass"

export default () => {
    
    const { cart, getTotalPrice } = useCart()

    const products = getProducts(cart)

    const tPrice= getTotalPrice()
    const shipping = 50
    const VAT = 1.2 * tPrice
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
                <PriceRow name="total" value={tPrice} />
                <PriceRow name="shipping" value={shipping} />
                <PriceRow name="vat (included)" value={VAT} />
                <PriceRow name="grand total" value={grandTotal} />
            </div>
            <Button className="button confirm">continue & pay</Button>
        </div>
    )
}