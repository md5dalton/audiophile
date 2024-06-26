import ProductCard from "@/components/UI/ProductCard"
import Link from "next/link"

import "./styles.sass"

export default props => {
    
    const { slug } = props

    return (
        <ProductCard {...props}>
            <Link href={`/product/${slug}`} className="button">see product</Link>
        </ProductCard>
    )
}