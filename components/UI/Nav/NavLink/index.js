import Link from "next/link"

export default ({ to, children }) => (
    <li>
        <Link className="navlink" href={to}>{children}</Link>
    </li>
)