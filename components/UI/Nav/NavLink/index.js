import React from 'react'
import { Link } from 'react-router-dom'

export default ({ to, children }) => (
    <li>
        <Link className="navlink" to={to}>{children}</Link>
    </li>
)