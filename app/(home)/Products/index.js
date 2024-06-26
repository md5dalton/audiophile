import "./_index.sass"
import { getResponsiveImages } from "@/Functions"
import Picture from "@/components/UI/Picture"
import Link from "next/link"

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
                    <h1 className="name">ZX9 speaker</h1>
                    <p className="description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link href="/p?s=zx9-speaker" className="button primary CTA">See product</Link>
                </div>
            </div>
            <div className="product secondary colapsed">
                <Picture {...images[1]} />
                <div className="details">
                    <h4 className="name">ZX7 speaker</h4>
                    <Link href="/p?s=zx7-speaker" className="button secondary">See product</Link>
                </div>
            </div>
            <div className="product secondary dettached">
                <Picture {...images[2]} />
                <div className="details">
                    <h4 className="name">YX1 earphones</h4>
                    <Link href="/p?s=yx1-earphones" className="button secondary">See product</Link>
                </div>
            </div>
        </section>
    )
}