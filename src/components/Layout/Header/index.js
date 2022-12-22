import React, { useContext } from 'react'
import CartContext from '../../../context/CartContext'
import Button from '../../UI/Button'
import Icon from '../../UI/Icon'
import Nav from '../../UI/Nav'

import "./styles.sass"

export default ({ sidedrawerToggleHandler, cartToggleHandler, children, ...props }) => {

    const { cart } = useContext(CartContext)

    return (
        <header {...props}>
            <div className="toolbar">
                <Button className="menu-toggle" onClick={() => sidedrawerToggleHandler()}><Icon name="hamburger" /></Button>
                <Nav />
                <Button className="cart-toggler" onClick={() => cartToggleHandler()}>
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