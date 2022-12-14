import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import CartContext from "../../../../context/CartContext"
import { formatPrice } from "../../../../Functions"
import Icon from "../../../UI/Icon"
import Modal from "../../../UI/Modal"
import PriceRow from "../../../UI/PriceRow"
import ProductsList from "./ProductsList"

import "./styles.sass"

export default ({ isOpen, toggleHandler, grandTotal }) => {

    const navigate = useNavigate()

    const { clearCart } = useContext(CartContext)
 
    const linkHandler = ev => {
        ev.preventDefault()
        clearCart()
        navigate("/")
    }
    
    return (
        <Modal isOpen={isOpen} toggleHandler={toggleHandler}>
            <section>
                <div className="checkout-modal">
                    <div className="heading">
                        <Icon name="order-confirmation" />
                        <h3 className="title">thank you<br /> for your order</h3>
                        <p className="description">You will receive an email confirmation shortly.</p>
                    </div>
                    <div className="modal-summary">
                        <ProductsList />
                        <div className="grand-total">
                            <PriceRow name="grand total" value={grandTotal} />
                        </div>
                    </div>
                    <Link to="/" className="button back-to-home" onClick={linkHandler}>back to home</Link>
                </div>
            </section>
        </Modal>
    )
}