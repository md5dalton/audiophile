import Link from 'next/link'
import Icon from '../Icon'
import NavLink from './NavLink'

import "./styles.sass"

export default ({ className }) => (
    <nav className={`${className}`}>
        <Link href="/">
            <Icon className="logo" name="logo" />
        </Link> 
        <ul className="nav-links" role="list">
            <NavLink to="/">home</NavLink>
            <NavLink to="/category/headphones">headphones</NavLink>
            <NavLink to="/category/speakers">speakers</NavLink>
            <NavLink to="/category/earphones">earphones</NavLink>
        </ul>
    </nav>
)