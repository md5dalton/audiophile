import Link from "next/link"
import Products from "./(home)/Products"
import About from "@/components/Layout/About"
import Header from "@/components/Layout/Header"
import CategoriesLinks from "@/components/Layout/CategoriesLinks"

import "./(home)/styles.sass"

export default () => {

    const name = "home"

    return (
        <>
            <Header
                className="bg-cover bg-no-repeat bg-header-mobile md:bg-header-tablet lg:bg-header-desktop"
            >
                <section className="hero">
                    <div className="overline">New product</div>
                    <h1 className="name">XX99 Mark II Headphones</h1>
                    <p className="description">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Link href="/product/xx99-mark-two-headphones" className="button primary CTA">See product</Link>
                </section>
            </Header>
            <main className={`page ${name}`}>
                <CategoriesLinks />
                <Products />
                <About />
            </main>
        </>
    )
}