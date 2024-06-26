"use client"

import { useRouter } from "next/navigation"
import "./styles.sass"

export default () => {

    const router = useRouter()

    const handler = () => router.back()

    return (
        <button className="button text return-button" onClick={handler}>go back</button>
    )
}