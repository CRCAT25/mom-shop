import { useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: 'Bánh chưng chay',
            image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=200&h=200&fit=crop',
            price: 50000,
            quantity: 1
        },
        {
            id: 2,
            name: 'Bánh chưng chay',
            image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=200&h=200&fit=crop',
            price: 50000,
            quantity: 1
        },
        {
            id: 3,
            name: 'Bánh chưng chay',
            image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=200&h=200&fit=crop',
            price: 50000,
            quantity: 1
        },
        {
            id: 4,
            name: 'Bánh chưng chay',
            image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=200&h=200&fit=crop',
            price: 50000,
            quantity: 1
        }
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const formatPrice = (price: number) => {
        return price.toLocaleString('vi-VN') + 'đ';
    };

    return (
        <div className=" w-full bg-white rounded-2xl shadow-xl p-5 border border-[#EEEEEE]">
            {/* Header */}
            <h2 className="text-[20px] font-bold text-center pt-0 py-4 px-5 text-gray-800">
                Giỏ hàng của bạn
            </h2>

            <div className="border-b border-[#EEEEEE] mb-6"></div>

            {/* Cart Items */}
            <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <div className="flex items-center gap-3">
                            {/* Product Image */}
                            <div className="w-full h-full max-w-14 max-h-14 shrink-0 rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Product Info & Controls */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[16px] font-bold text-gray-800">
                                        {item.name}
                                    </h3>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    {/* Quantity Controls */}
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="w-5 h-5 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="text-[13px] font-semibold text-gray-800 min-w-[30px] text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="w-5 h-5 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <div className="text-[16px] font-bold text-gray-800">
                                        {formatPrice(item.price * item.quantity)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-b border-dashed border-gray-300 mt-3"></div>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-bold text-gray-800">
                    Tổng thành tiền:
                </span>
                <span className="text-lg font-bold text-orange-600">
                    {formatPrice(totalPrice)}
                </span>
            </div>

            {/* Order Button */}
            <button className="cursor-pointer w-full py-2 button-background-gradient text-white font-bold text-[14px] rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide">
                ĐẶT HÀNG
            </button>
        </div>
    );
};

export default ShoppingCart;