import { useCart } from "@/context/CartContext"
import { getProducts } from "@/Functions"
import { useModal } from "@/context/Modal"
import Modal from "@/components/UI/Modal"
import Button from "@/components/UI/Button"
import List from "@/components/UI/List"
import ProductRow from "./ProductRow"
import PriceRow from "@/components/UI/PriceRow"
import Link from "next/link"

import "./styles.sass"

export default () => {

    const { cart, clearCart, getTotalPrice } = useCart()
    const { cart: cartIsOpen, toggleCart } = useModal()
    
    const products = getProducts(cart)

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
                                    <PriceRow name="total" value={getTotalPrice()} />
                                </div>
                            </>
                            :
                            <h6 className="empty-text">There are no items in your cart</h6>
                        }
                    </div>
                    <Link
                        href="/checkout" 
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