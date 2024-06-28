"use client"

import Button from "@/components/UI/Button"
import Icon from "@/components/UI/Icon"
import Nav from "@/components/UI/Nav"

import { useModal } from '@/context/Modal'
import { useCart } from '@/context/CartContext'

import "./styles.sass"

export default ({ children, ...props }) => {
    
    const { toggleSidedrawer, toggleCart } = useModal()
    const { cart } = useCart()

    return (
        <header {...props}>
            <div className="toolbar">
                <Button className="menu-toggle" onClick={() => toggleSidedrawer()}><Icon name="hamburger" /></Button>
                <Nav className="flex" />
                <Button className="cart-toggler" onClick={() => toggleCart()}>
                    <Icon name="cart" />
                    {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                </Button>
            </div>
            <div className="content">
                {children}
            </div>
        </header>
    )
}