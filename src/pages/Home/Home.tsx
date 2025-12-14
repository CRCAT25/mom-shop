import { useState } from "react";
import type { ProductCategoryDTO } from "../../types/ProductCategoryDTO";
import Header from "../Layout/Header";
import ProductList from "../Product/ProductList";
import Menu from "../Menu/Menu";
import ShoppingCart from "../Cart/ShoppingCart";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDTO | null>(null);

    return (
        <div className='bg-linear-to-br from-white to-[#FFF9F0]'>
            {/* HEADER */}
            <div className="sticky top-0 z-10">
                <Header />
            </div>

            {/* CONTENT */}
            <div className='flex gap-16 justify-center h-auto items-start py-4 px-10 max-w-8xl'>
                <div className='flex-1 w-full max-w-[320px] sticky min-w-[200px] top-24'>
                    <Menu onSelect={setSelectedCategory} />
                </div>
                <div className='flex-3'>
                    <ProductList category={selectedCategory} />
                </div>
                <div className='flex-2 w-full max-w-[340px] sticky min-w-[200px] top-24'>
                    <ShoppingCart />
                </div>
            </div>
        </div>
    )
}

export default Home