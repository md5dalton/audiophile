import React, { useContext, useState } from "react"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import Picture from "../../UI/Picture"
import Button from "../../UI/Button"
import { formatPrice, getProducts } from "../../../Functions"
import GoBackLink from "../../UI/GoBackLink"
import CartContext from "../../../context/CartContext"
import CheckoutModal from "../../Layout/Modals/CheckoutModal"

import "./styles.sass"
import ProductRow from "../../UI/ProductRow"
import Summary from "./Summary"
import FormCore from "./FormCore"

export default () => {

    const [ modalOpen, setModalOpen ] = useState(false)

    const modalToggleHandler = () => setModalOpen(!modalOpen)

    const submitHandler = ev => {

        ev.preventDefault()

        modalToggleHandler()

    }

    const { cart, getTotalPrice } = useContext(CartContext)
    
    const totalPrice = getTotalPrice()
    const shipping = 50
    const VAT = 1.2 * totalPrice
    const grandTotal = shipping + VAT

    return (
        <Page name="checkout">
            <section>
                <GoBackLink />
            </section>
            <form onSubmit={submitHandler} className="container">
                <FormCore />
                <Summary />
            </form>
            <CheckoutModal isOpen={modalOpen} toggleHandler={modalToggleHandler} grandTotal={grandTotal} />
        </Page>
    )
}