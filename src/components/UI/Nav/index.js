import React from 'react'
import Icon from '../Icon'
import NavLink from './NavLink'

import "./styles.sass"

export default () => (
    <nav>
        <Icon className="logo" name="logo" />
        <ul className="nav-links" role="list">
            <NavLink>home</NavLink>
            <NavLink>headphones</NavLink>
            <NavLink>speakers</NavLink>
            <NavLink>earphones</NavLink>
        </ul>
    </nav>
)