"use client"
import { useModal } from "@/context/Modal"

import Modal from "@/components/UI/Modal"
import CategoriesLinks from "../../CategoriesLinks"

import "./styles.sass"

export default () => {

    const { toggleSidedrawer, sidedrawer } = useModal()

    return (
        <Modal toggleHandler={toggleSidedrawer} isOpen={sidedrawer.value}>
            {sidedrawer.value}
            <div className="side-drawer">
                <CategoriesLinks />
            </div>
        </Modal>
    )
}