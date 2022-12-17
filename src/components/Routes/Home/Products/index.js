import React from "react"
import { Link } from "react-router-dom"
import { getResponsiveImages } from "../../../../Functions"
import Picture from "../../../UI/Picture"

import "./_index.sass"

export default () => {

    const images = [
        "speaker-zx9.png", 
        "speaker-zx7.jpg", 
        "earphones-yx1.jpg"
    ].map(image => getResponsiveImages("./assets/home", `image-${image}`))

    return (
        <section className="products">
            <div className="product primary">
                <Picture {...images[0]} />
                <div className="details">
                    <h1>ZX9 speaker</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/p?s=zx9-speaker" className="link-button">See product</Link>
                </div>
            </div>
            <div className="product secondary colapsed">
                <Picture {...images[1]} />
                <div className="details">
                    <h4>ZX7 speaker</h4>
                    <Link to="/p?s=zx7-speaker" className="link-button">See product</Link>
                </div>
            </div>
            <div className="product secondary dettached">
                <Picture {...images[2]} />
                <div className="details">
                    <h4>YX1 earphones</h4>
                    <Link to="/p?s=yx1-earphones" className="link-button">See product</Link>
                </div>
            </div>
        </section>
    )
}