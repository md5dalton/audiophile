import React from 'react'
import { Link } from 'react-router-dom'

export default ({ to, children }) => (
    <li className="nav-link">
        <Link to={to}>{children}</Link>
    </li>
)