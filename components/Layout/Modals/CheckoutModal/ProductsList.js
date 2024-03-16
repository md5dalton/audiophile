import React, { useContext, useState } from "react"
import { getProducts } from "../../../../Functions"

import List from "../../../UI/List"
import Button from "../../../UI/Button"
import CartContext from "../../../../context/CartContext"
import ProductRowQauntity from "../../../UI/ProductRowQauntity"

import "./ProductsList.sass"

export default () => {

    const { cart } = useContext(CartContext)

    const products = getProducts(cart)

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