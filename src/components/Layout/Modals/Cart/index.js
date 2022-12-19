import React, { Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../../../context/CartContext"
import { formatPrice, getProducts } from "../../../../Functions"
import Button from "../../../UI/Button"
import List from "../../../UI/List"
import Modal from "../../../UI/Modal"
import ProductRow from "./ProductRow"

import "./styles.sass"

export default ({ ...props }) => {

    const { cart, addCart, clearCart, getTotalPrice } = useContext(CartContext)
    
    const products = getProducts(cart)
    
    return (
        <Modal {...props}>
            <section>
                <div className="cart">
                    <div className="heading">
                        <h6>CART ({products.length})</h6>
                        <Button className="button text" onClick={() => clearCart()}>Remove all</Button>
                    </div>
                    <div className="summary">
                        {
                            products.length ?
                            <Fragment>
                                <List 
                                    className="products" 
                                    items={products} 
                                    itemHandler={(item, index) => <ProductRow key={index} {...item} />}
                                />
                                <div className="total-price">
                                    <span>total</span>
                                    <span>{formatPrice(getTotalPrice())}</span>
                                </div>
                            </Fragment>
                            :
                            <h6>There are no items in your cart</h6>
                        }
                    </div>
                    <Link 
                        to="/checkout" 
                        className="button checkout" 
                        onClick={ev => {
                           if (!products.length) ev.preventDefault()
                        }}
                        aria-disabled={!products.length}
                    >checkout</Link>
                </div>
            </section>
        </Modal>
    )
}