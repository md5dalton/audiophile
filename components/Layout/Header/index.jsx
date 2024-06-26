"use client"

import { useModal } from '@/context/Modal'
import { cart } from "@/signals/cart"

import Button from "@/components/UI/Button"
import Icon from "@/components/UI/Icon"
import Nav from "@/components/UI/Nav"

import "./styles.sass"

export default ({ children, ...props }) => {

    const { toggleSidedrawer, toggleCart } = useModal()

    return (
        <header {...props}>
            <div className="toolbar">
                <Button className="menu-toggle" onClick={() => toggleSidedrawer()}><Icon name="hamburger" /></Button>
                <Nav />
                <Button className="cart-toggler" onClick={() => toggleCart()}>
                    <Icon name="cart" />
                    {cart.value.length > 0 && <span className="cart-count">{cart.value.length}</span>}
                </Button>
            </div>
            <div className="content">
                {children}
            </div>
        </header>
    )
}