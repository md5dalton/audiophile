import React from "react"
import { Link } from "react-router-dom"
import List from "../../UI/List"
import Picture from "../../UI/Picture"

export default ({ others }) => (
    <section className="related">
        <h5>you may also like</h5>
        <List 
            items={others} 
            itemHandler={({ image, slug, name }, index) => (
                <li key={index}>
                    <Picture {...image} />
                    <h5>{name}</h5>
                    <Link to={`/p?s=${slug}`} className="link-button">see product</Link>
                </li>
            )}
        />
    </section>
)