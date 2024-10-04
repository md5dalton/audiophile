import Link from "next/link"
import NavLink from "./NavLink"
import Image from "next/image"
import UList from "./UList"

const links = [
    { name: "home", href: "/" },
    { name: "headphones", href: "/category/headphones" },
    { name: "speakers", href: "/category/speakers" },
    { name: "earphones", href: "/category/earphones" },
]

export default ({ listProps, ...props }) => (
    <nav {...props}>
        <Link href="/">
            <Image
                height={25}
                width={143}
                alt="audiophile logo"
                src="/assets/icons/icon-logo.svg"
            />
        </Link>
        <UList
            {...listProps}
            items={links}
            itemHandler={({ name, href }) => (
                <NavLink href={href} className="hover:text-brown transition-colors uppercase">{name}</NavLink>
            )}
        />
    </nav>
)