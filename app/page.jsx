import Link from "next/link"
import Page from "@/components/Layout/Page"
import CategoriesLinks from "@/components/Layout/CategoriesLinks"
import Products from "./(home)/Products"
import About from "@/components/Layout/About"
import "./(home)/styles.sass"

export default () => {

    const header = (
        <section className="hero">
            <div className="overline">New product</div>
            <h1 className="name">XX99 Mark II Headphones</h1>
            <p className="description">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link href="/p?s=xx99-mark-two-headphones" className="button primary CTA">See product</Link>
        </section>
    )
    
    return (
        <Page name="home" header={header}>
            <CategoriesLinks />
            <Products />
            <About />
        </Page>
    )
}