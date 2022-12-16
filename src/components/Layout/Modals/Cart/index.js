import React, { Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../../../context/CartContext"
import { formatPrice } from "../../../../Functions"
import Button from "../../../UI/Button"
import CounterInput from "../../../UI/CounterInput"
import List from "../../../UI/List"
import Modal from "../../../UI/Modal"
import Picture from "../../../UI/Picture"

import "./styles.sass"

export default ({ ...props }) => {

    const { products } = useContext(CartContext)
    
    return (
        <Modal {...props}>
            <section>
                <div className="cart">
                    <div className="heading">
                        <h6>CART ({products.length})</h6>
                        <Button>Remove all</Button>
                    </div>
                    <div className="summary">
                        {
                            products.length ?
                            <Fragment>
                                <List 
                                    className="products" 
                                    items={products} 
                                    itemHandler={({ image, name, price }, index) => (
                                        <li key={index}>
                                            <Picture {...image} />
                                            <div className="details">
                                                <div className="name">{name}</div>
                                                <div className="price">{formatPrice(price)}</div>
                                            </div>
                                            <CounterInput />
                                        </li>
                                    )}
                                />
                                <div className="price">
                                    <span>total</span>
                                    <span>{formatPrice(5396)}</span>
                                </div>
                            </Fragment>
                            :
                            <h6>There are no items in your cart</h6>
                        }
                    </div>
                    <Link to="/checkout" className="link-button checkout">checkout</Link>
                </div>
            </section>
        </Modal>
    )
}