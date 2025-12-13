import { productTest } from "../../types/ProductDTO"
import ProductCard from "./components/ProductCard/ProductCard"

const ProductList = () => {
    return (
        <div className='product-list-container'>
            <ProductCard product={productTest} />
        </div>
    )
}

export default ProductList