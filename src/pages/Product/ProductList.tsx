import { useEffect } from "react";
import type { ProductCategoryDTO } from "../../types/ProductCategoryDTO";
import { productMockList, type ProductAddToCartDTO } from "../../types/ProductDTO"
import ProductCard from "./components/ProductCard/ProductCard"

interface ProductListProps {
    category?: ProductCategoryDTO | null;
}

const ProductList = ({ category }: ProductListProps) => {
    const handleAddToCart = (item: ProductAddToCartDTO) => {
        console.log(item)
    }

    useEffect(() => {
        if (category) {
            console.log('Selected category:', category);
        }
        // gọi API / filter list ở đây
    }, [category]);

    return (
        <div className="product-list-container max-w-[720px] flex flex-col gap-4 w-full">
            {productMockList.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
}

export default ProductList