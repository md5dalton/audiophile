import React from 'react'
import Button from '../../UI/Button'
import Icon from '../../UI/Icon'
import Nav from '../../UI/Nav'

import "./styles.sass"

export default () => {
    return (
        <header>
            <div className="container">
                <Button className="menu-toggle"><Icon name="hamburger" /></Button>
                <Nav />
                <Button><Icon name="cart" /></Button>
            </div>
        </header>
    )
}