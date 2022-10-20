import React from 'react'
import Button from '../../UI/Button'
import Icon from '../../UI/Icon'
import Nav from '../../UI/Nav'

import "./styles.sass"

export default ({ children, ...props }) => {
    return (
        <header {...props}>
            <div className="toolbar">
                <Button className="menu-toggle"><Icon name="hamburger" /></Button>
                <Nav />
                <Button><Icon name="cart" /></Button>
            </div>
            <div className="content">
                {children}
            </div>
        </header>
    )
}