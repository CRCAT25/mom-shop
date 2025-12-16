import { useMemo, useState } from "react";
import type { ProductCategoryDTO } from "../../types/ProductCategoryDTO";
import { productMockList } from "../../types/ProductDTO";
import ProductCard from "./components/ProductCard/ProductCard";
import { Search } from "lucide-react";
import type { CartItemDTO } from "../../types/CartItemDTO";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

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

    const inputSearchProps = {
        style: {
            borderRadius: '100px',
            minWidth: 700
        },
        placeholder: 'Tìm món ăn...',
        value: keyword,
        onChange: (e: any) => setKeyword(e.target.value),
    }

    return (
        <div className="w-full max-w-[820px] flex flex-col gap-4 items-center">

            {/* 🔍 SEARCH BAR */}
            <div className="relative w-full">
                <Input {...inputSearchProps} size="large" prefix={<SearchOutlined />} />
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
