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
            <NavLink to="/">home</NavLink>
            <NavLink to="/c?n=headphones">headphones</NavLink>
            <NavLink to="/c?n=speakers">speakers</NavLink>
            <NavLink to="/c?n=earphones">earphones</NavLink>
        </ul>
    </nav>
)