import { useState } from "react";
import type { ProductCategoryDTO } from "../../types/ProductCategoryDTO";
import type { CartItemDTO } from "../../types/CartItemDTO";
import Header from "../Layout/Header";
import ProductList from "../Product/ProductList";
import Menu from "../Menu/Menu";
import ShoppingCart from "../Cart/ShoppingCart";

const Home = () => {
    const [selectedCategory, setSelectedCategory] =
        useState<ProductCategoryDTO | null>(null);

    const [cartItems, setCartItems] = useState<CartItemDTO[]>([]);

    // ➕ Add to cart (từ ProductCard)
    const handleAddToCart = (item: CartItemDTO) => {
        setCartItems(prev => {
            const existed = prev.find(
                p => p.id === item.id && p.sizeId === item.sizeId
            );

            if (existed) {
                return prev.map(p =>
                    p.id === existed.id
                        ? {
                            ...p,
                            quantity: Math.min(
                                p.quantity + item.quantity,
                                p.maxQuantity
                            )
                        }
                        : p
                );
            }

            return [...prev, item];
        });
    };

    // ➕➖ Update quantity (ShoppingCart)
    const handleUpdateQuantity = (id: string, delta: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.min(
                            item.maxQuantity,
                            Math.max(1, item.quantity + delta)
                        )
                    }
                    : item
            )
        );
    };

    // ❌ Remove item
    const handleRemoveItem = (id: string) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div className="bg-linear-to-br from-white to-[#FFF9F0]">
            {/* HEADER */}
            <div className="sticky top-0 z-10">
                <Header />
            </div>

            {/* CONTENT */}
            <div className="flex gap-16 justify-center items-start py-4 px-10 max-w-8xl">
                {/* MENU */}
                <div className="flex-1 w-full max-w-[320px] sticky min-w-[200px] top-24">
                    <Menu onSelect={setSelectedCategory} />
                </div>

                {/* PRODUCT LIST */}
                <div className="flex-3">
                    <ProductList
                        category={selectedCategory}
                        onAddToCart={handleAddToCart}
                    />
                </div>

                {/* SHOPPING CART */}
                <div className="flex-[2 w-full max-w-[340px] sticky min-w-[200px] top-24">
                    <ShoppingCart
                        cartItems={cartItems}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
