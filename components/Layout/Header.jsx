"use client"

import ButtonIcon from "@/components/ButtonIcon"
import { useModal } from '@/context/Modal'
import { useCart } from '@/context/CartContext'
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline"


// import "./styles.sass"
import Nav from "@/components/Nav"

export default ({ children, ...props }) => {
    
    const { toggleSidedrawer, toggleCart } = useModal()
    const { cart } = useCart()

    return (
        <header {...props}>
            <div className="page-w flex items-center justify-between py-2 md:gap-10">
                <ButtonIcon className="py-6 xl:hidden" onClick={toggleSidedrawer}>
                    <Bars3Icon height={24} />
                </ButtonIcon>
                <Nav
                    className="flex grow justify-center md:justify-start "
                    listProps={{ className: "hidden xl:flex gap-8 grow justify-center" }}
                />
                <ButtonIcon
                    className="py-6 grid grid-cols-1 grid-rows-1"
                    onClick={toggleCart}
                >
                    <ShoppingCartIcon height={24} className="row-span-full col-span-full" />
                    {
                        cart.length > 0 && 
                        <span
                            className="row-span-full col-span-full grid place-content-center bg-brown h-5 w-5 rounded-full translate-x-4 -translate-y-4 font-bold"
                        >{cart.length}</span>}
                </ButtonIcon>
            </div>
            <div className="page-w text-center border-t-grey border-t-[1px]">
                {children}
            </div>
        </header>
    )
}