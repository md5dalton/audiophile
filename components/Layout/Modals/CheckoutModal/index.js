"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

import Icon from "@/components/UI/Icon"
import Modal from "@/components/UI/Modal"
import ProductsList from "./ProductsList"
import PriceRow from "@/components/UI/PriceRow"

import "./styles.sass"

export default ({ isOpen, toggleHandler, grandTotal }) => {

    const router = useRouter()

    const { clearCart } = useCart()
 
    const handler = () => {
        clearCart()
        router.push("/")
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
                    <button className="button back-to-home" onClick={handler}>back to home</button>
                </div>
            </section>
        </Modal>
    )
}