import { useState } from "react"
import data from "../assets/data.json"

export default () => {

    const getCategoryItems = category => data.filter(item => item.category === category)

    const [ categories, setCategories ] = useState({
        headphones: getCategoryItems("headphones"),
        earphones: getCategoryItems("earphones"),
        speakers: getCategoryItems("speakers")
    })

    return {...categories}

}