import { productTest, type ProductAddToCartDTO } from "../../types/ProductDTO"
import ProductCard from "./components/ProductCard/ProductCard"

const ProductList = () => {
    const handleAddToCart = (item: ProductAddToCartDTO) => {
        console.log(item)
    }

    return (
        <div className='product-list-container'>
            <ProductCard product={productTest} onAddToCart={handleAddToCart} />
        </div>
    )
}

export default ProductList