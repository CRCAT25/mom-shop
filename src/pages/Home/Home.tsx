import { useState } from "react";
import type { ProductCategoryDTO } from "../../types/ProductCategoryDTO";
import type { CartItemDTO } from "../../types/CartItemDTO";
import Header from "../Layout/Header";
import ProductList from "../Product/ProductList";
import Menu from "../Menu/Menu";
import ShoppingCart from "../Cart/ShoppingCart";
import { message } from "antd";

const Home = () => {
    //#region STATES
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDTO | null>(null);
    const [cartItems, setCartItems] = useState<CartItemDTO[]>([]);
    //#endregion


    //#region PRODUCT LIST
    /**
     * Add to cart (từ ProductCard)
     * @param item 
     * @returns 
     */
    const handleAddToCart = (item: CartItemDTO) => {
        const existed = cartItems.find(
            p => p.id === item.id && p.sizeId === item.sizeId
        );

        // Đã tồn tại & vượt max
        if (existed && existed.quantity + item.quantity > existed.maxQuantity) {
            message.warning("Sản phẩm đã hết");
            return;
        }

        // Thêm mới nhưng vượt max
        if (!existed && item.quantity > item.maxQuantity) {
            message.warning(`Chỉ còn tối đa ${item.maxQuantity} sản phẩm`);
            return;
        }

        // OK → mới setState
        setCartItems(prev => {
            if (existed) {
                return prev.map(p =>
                    p.id === existed.id && p.sizeId === existed.sizeId
                        ? { ...p, quantity: p.quantity + item.quantity }
                        : p
                );
            }
            return [...prev, item];
        });
    };
    //#endregion


    //#region SHOPPING CART
    /**
     * Update quantity (ShoppingCart)
     * @param id 
     * @param delta 
     */
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

    /**
     * Remove item
     * @param id 
     */
    const handleRemoveItem = (id: string) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };
    //#endregion

    return (
        <div className="bg-linear-to-br from-white to-[#FFF9F0] w-full">
            {/* HEADER */}
            <div className="sticky top-0 z-10 w-full">
                <Header />
            </div>

            {/* CONTENT */}
            <div className="py-4 px-10 max-w-8xl">
                <div className="text-center text-3xl py-5 text-(--color-red-primary) uppercase font-bold">Thực đơn hôm nay</div>
                <div className="flex gap-16 justify-between items-start w-full">
                    {/* MENU */}
                    <div className="flex-1 w-full max-w-[320px] sticky min-w-[200px] top-24">
                        <Menu onSelect={setSelectedCategory} />
                    </div>

                    {/* PRODUCT LIST */}
                    <div className="flex-3 w-full">
                        <ProductList
                            category={selectedCategory}
                            onAddToCart={handleAddToCart}
                        />
                    </div>

                    {/* SHOPPING CART */}
                    <div className="flex-2 w-full max-w-[340px] sticky min-w-[200px] top-24">
                        <ShoppingCart
                            cartItems={cartItems}
                            onUpdateQuantity={handleUpdateQuantity}
                            onRemoveItem={handleRemoveItem}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
