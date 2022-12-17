import React, { Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../../../context/CartContext"
import { formatPrice, getProducts } from "../../../../Functions"
import Icon from "../../../UI/Icon"
import List from "../../../UI/List"
import Modal from "../../../UI/Modal"
import Picture from "../../../UI/Picture"

import "./styles.sass"

export default ({ isOpen, toggleHandler, grandTotal }) => {

    const { cart } = useContext(CartContext)

    const products = getProducts(cart)
    
    return (
        <Modal isOpen={isOpen} toggleHandler={toggleHandler}>
            <section>
                <div className="checkout-modal">
                    <div className="heading">
                        <Icon name="order-confirmation" />
                        <h5>thank you<br /> for your order</h5>
                        <p>You will receive an email confirmation shortly.</p>
                    </div>
                    <div className="summary">
                        <div className="products">
                            <List 
                                items={products.slice(0, 1)} 
                                itemHandler={({ image, name, price, quantity }, index) => (
                                    <li key={index}>
                                        <Picture {...image} />
                                        <div className="details">
                                            <div className="name">{name}</div>
                                            <div className="price">{formatPrice(price)}</div>
                                        </div>
                                        <div className="quantity-counter">x{quantity}</div> 
                                    </li>
                                )}
                            />
                            <div className="additional-products">
                                and 2 other items(s)
                            </div>
                        </div>
                        <div className="price">
                            <div>grand total</div>
                            <div>{formatPrice(grandTotal)}</div>
                        </div>
                    </div>
                    <Link to="/" className="button back-to-home">back to home</Link>
                </div>
            </section>
        </Modal>
    )
}