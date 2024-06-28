"use client"

import CategoriesLinks from "../CategoriesLinks"
import Modal from "@/components/UI/Modal"

import { useModal } from "@/context/Modal"

export default () => {

    const { toggleSidedrawer, sidedrawer } = useModal()

    return (
        <Modal toggleHandler={toggleSidedrawer} isOpen={sidedrawer}>
            <div className="bg-white text-black rounded-b-lg py-8">
                <CategoriesLinks />
            </div>
        </Modal>
    )
}