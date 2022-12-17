import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Picture from "../../UI/Picture"
import { formatPrice } from "../../../Functions"
import Button from "../../UI/Button"
import CounterInput from "../../UI/CounterInput"
import CartContext from "../../../context/CartContext"


export default ({ image, new: isNew, name, slug, description, price, features, includes }) => {
    
    const { addCart } = useContext(CartContext)

    const [ quantity, setQuantity ] = useState(1)
    
    return (
        <section className="product-detail">
            <div className="product-item">
                <Link className="go-back">go back</Link>
                <Picture {...image} />
                <div className="details">
                    {!isNew && <overline className="new-product">new product</overline>}
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <h6 className="price">{formatPrice(price)}</h6>
                    <div className="form-wrapper">
                        <CounterInput value={quantity} valueHandler={setQuantity} />
                        <Button className="button" onClick={() => addCart(slug, quantity)}>add to cart</Button>
                    </div>
                </div>
            </div>
            <div className="features">
                <h5>features</h5>
                <p>{features}</p>
            </div>
            <div className="includes">
                <h5>in the box</h5>
                <List 
                    items={includes} 
                    itemHandler={({quantity, item}, index) => (
                        <li key={index}>
                            <span className="quantity-counter">{quantity}x</span> 
                            <p>{item}</p> 
                        </li>
                    )}
                />
            </div>
        </section>
    )
}