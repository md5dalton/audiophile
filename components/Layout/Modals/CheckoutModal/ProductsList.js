import { useState } from "react"
import { getProducts } from "../../../../Functions"
import { cart } from "@/signals/cart"

import List from "../../../UI/List"
import Button from "../../../UI/Button"
import ProductRowQauntity from "../../../UI/ProductRowQauntity"

import "./ProductsList.sass"

export default () => {

    const products = getProducts(cart.value)

    const [ isMax, setIsMax ] = useState(false)

    const toggleHandler = () => setIsMax(!isMax)
    
    return (
        <div className="products">
            <List
                className={isMax ? "" : "min-size"}
                items={products} 
                itemHandler={(item, index) => <ProductRowQauntity key={index} {...item} /> }
            />
            {
                products.length > 1 && (
                    <div className="additional-products">
                        <Button className="button text" onClick={toggleHandler}>
                            {isMax ? "View less" : `and ${products.length - 1} other item(s)`}
                        </Button>
                    </div>
                )
            }
        </div>
    )
}