"use client"

// import Button from "@/components/UI/Button"
import Icon from "@/components/UI/Icon"
import Nav from "@/components/UI/Nav"

import { useModal } from '@/context/Modal'
import { useCart } from '@/context/CartContext'

import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline"

import "./styles.sass"
import Button from "@/components/Button"
import ButtonIcon from "@/components/ButtonIcon"

export default ({ children, ...props }) => {
    
    const { toggleSidedrawer, toggleCart } = useModal()
    const { cart } = useCart()

    return (
        <header {...props}>
            <div className="page-w !p-0 flex items-center justify-between py-2">
                <ButtonIcon className="p-6" onClick={toggleSidedrawer}>
                    <Bars3Icon height={24} />
                </ButtonIcon>
                <Nav className="flex" />
                <ButtonIcon
                    className="p-6 grid grid-cols-1 grid-rows-1"
                    onClick={toggleCart}
                >
                    <ShoppingCartIcon height={24} className="row-span-full col-span-full" />
                    <span className="row-span-full col-span-full grid place-content-center bg-brown h-5 w-5 rounded-full translate-x-4 -translate-y-4">{cart.length}</span>
                </ButtonIcon>
            </div>
            <div className="page-w text-center border-t-grey border-t-[1px]">
                {children}
            </div>
        </header>
    )
}