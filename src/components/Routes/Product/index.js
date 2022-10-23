import React from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Page from "../../Layout/Page"
import About from "../../Layout/About"
import Picture from "../../UI/Picture"
import useData from "../../../hooks/useData"
import CategoriesLinks from "../../Layout/CategoriesLinks"
import { getProduct } from "../../../Functions"

import "./styles.sass"
import Button from "../../UI/Button"

export default () => {

    const {
        image, new: isNew, name, description, slug, price, features, includes, gallery, others
    } = getProduct("xx99-mark-two-headphones")

    return (
        <Page name="product">
            <section className="product-detail">
                <Link className="go-back">go back</Link>
                <div className="product-item">
                    <Picture {...image} />
                    <div className="details">
                        {!isNew && <overline className="new-product">new product</overline>}
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <h6 className="price">${Intl.NumberFormat("en-US").format(price)}</h6>
                        <form>
                            <input type="number" defaultValue={1} />
                            <Button>add to cart</Button>
                        </form>
                    </div>
                </div>
                <div className="features">
                    <h5>features</h5>
                    <p>{features}</p>
                </div>
                <div className="includes">
                    <h5>in the box</h5>
                    <List 
                        items={includes} 
                        itemHandler={({quantity, item}, index) => (
                            <li key={index}>
                                <div>{quantity}x</div> 
                                <div>{item}</div> 
                            </li>
                        )}
                    />
                </div>
                <div className="includes">
                    <List 
                        items={Object.values(gallery)} 
                        itemHandler={(images, index) => <li key={index}><Picture {...images} /></li> }
                    />
                </div>
                <div className="related">
                    <h5>you may also like</h5>
                    <List 
                        items={others} 
                        itemHandler={({ image, slug, name }, index) => (
                            <li key={index}>
                                <Picture {...image} />
                                <h5>{name}</h5>
                                <Link to={slug} className="link-button">see product</Link>
                            </li>
                        )}
                    />
                </div>
            </section>
            <CategoriesLinks />
            <About />
        </Page>
    )
}