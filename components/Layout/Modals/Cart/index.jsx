"use client"

import { getProducts } from "@/Functions"
import { useModal } from "@/context/Modal"
import { useRouter } from "next/navigation"
import { cart, clearCart, totalPrice } from "@/signals/cart"

import ProductRow from "./ProductRow"
import List from "@/components/UI/List"
import Modal from "@/components/UI/Modal"
import Button from "@/components/UI/Button"
import PriceRow from "@/components/UI/PriceRow"

import "./styles.sass"

export default () => {

    const { cart: cartIsOpen, toggleCart } = useModal()

    const router = useRouter()
    const products = getProducts(cart.value)

    const handler = () => {

        if (!products.length) return

        router.push("/checkout")

        toggleCart()

    }

    return (
        <Modal toggleHandler={toggleCart} isOpen={cartIsOpen}>
            <section>
                <div className="cart">
                    <div className="heading">
                        <h6>CART ({products.length})</h6>
                        <Button className="button text" onClick={() => clearCart()}>Remove all</Button>
                    </div>
                    <div className="summary">
                        {
                            products.length ?
                            <>
                                <List
                                    className="products" 
                                    items={products} 
                                    itemHandler={(item, index) => <ProductRow key={index} {...item} />}
                                />
                                <div className="total-price">
                                    <PriceRow name="total" value={totalPrice()} />
                                </div>
                            </>
                            :
                            <h6 className="empty-text">There are no items in your cart</h6>
                        }
                    </div>
                    <button
                        className="button checkout" 
                        onClick={handler}
                        aria-disabled={!products.length}
                    >checkout</button>
                </div>
            </section>
        </Modal>
    )
}