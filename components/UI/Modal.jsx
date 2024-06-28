"use client"

import { useEffect } from "react"
import Backdrop from "./Backdrop"

export default ({ isOpen, children, toggleHandler, ...props }) => {
    
    useEffect(() => {
        scrollTo(0,0)
    }, [isOpen])
    
    return isOpen && (
        <>
            <Backdrop onClick={toggleHandler} />
            <div className="absolute w-full top-[90px] z-[101]" {...props}>
                { children }
            </div>
        </>
    )
}