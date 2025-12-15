import { useMemo, useState } from "react";
import type { ProductCategoryDTO } from "../../types/ProductCategoryDTO";
import { productMockList } from "../../types/ProductDTO";
import ProductCard from "./components/ProductCard/ProductCard";
import { Search } from "lucide-react";
import type { CartItemDTO } from "../../types/CartItemDTO";

interface ProductListProps {
    category?: ProductCategoryDTO | null;
    onAddToCart: (item: CartItemDTO) => void;
}

const ProductList = ({ category, onAddToCart }: ProductListProps) => {
    const [keyword, setKeyword] = useState("");

    const filteredProducts = useMemo(() => {
        return productMockList.filter(product => {
            const matchKeyword = product.name
                .toLowerCase()
                .includes(keyword.toLowerCase());

            const matchCategory =
                !category || category.id === 0 || product.categoryId === category.id;

            return matchKeyword && matchCategory;
        });
    }, [keyword, category]);


    return (
        <div className="product-list-container min-w-[620px] flex flex-col gap-4 w-full">

            {/* 🔍 SEARCH BAR */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Tìm món ăn..."
                    className="
                        w-full pl-12 pr-4 py-3 rounded-full
                        border border-gray-300
                        focus:outline-none focus:ring-2 focus:ring-amber-400
                        transition-all
                    "
                />
            </div>

            {/* 🧾 PRODUCT LIST */}
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))
            ) : (
                <div className="text-center text-gray-500 py-10">
                    Không tìm thấy sản phẩm phù hợp 😢
                </div>
            )}
        </div>
    );
};

export default ProductList;
