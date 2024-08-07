import { getResponsiveImages } from "@/Functions"
import Picture from "@/components/UI/Picture"

import "./styles.sass"

export default () => (
    <section className="about">
        <Picture {...getResponsiveImages("/assets/shared", "image-best-gear.jpg")} />
        <div className="details">
            <h2 className="title">Bringing you the <span>best</span> audio gear</h2>
            <p className="description">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                rooms available for you to browse and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                audio equipment.
            </p>
        </div>
    </section>
)