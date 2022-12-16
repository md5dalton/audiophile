import React from "react"
import Modal from "../../../UI/Modal"
import CategoriesLinks from "../../CategoriesLinks"

import "./styles.sass"

export default ({ ...props }) => (
    <Modal {...props}>
        <div className="side-drawer">
            <CategoriesLinks />
        </div>
    </Modal>
)