import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import NavLink from './NavLink'

import "./styles.sass"

export default () => (
    <nav>
        <Link to="/">
            <Icon className="logo" name="logo" />
        </Link> 
        <ul className="nav-links" role="list">
            <NavLink>home</NavLink>
            <NavLink>headphones</NavLink>
            <NavLink>speakers</NavLink>
            <NavLink>earphones</NavLink>
        </ul>
    </nav>
)