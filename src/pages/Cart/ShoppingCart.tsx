import { Trash2, Minus, Plus } from 'lucide-react';
import type { CartItemDTO } from '../../types/CartItemDTO';

interface ShoppingCartProps {
    cartItems: CartItemDTO[];
    onUpdateQuantity: (id: string, delta: number) => void;
    onRemoveItem: (id: string) => void;
}

const ShoppingCart = ({
    cartItems,
    onUpdateQuantity,
    onRemoveItem
}: ShoppingCartProps) => {

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const formatPrice = (price: number) =>
        price.toLocaleString('vi-VN') + 'đ';

    return (
        <div className="w-full bg-white rounded-2xl shadow-xl p-5 border border-[#EEEEEE]">
            {/* Header */}
            <h2 className="text-[20px] font-bold text-center py-4 pt-0 text-gray-800">
                Giỏ hàng của bạn
            </h2>

            <div className="border-b border-[#EEEEEE] mb-6" />

            {/* Cart Items */}
            {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 py-10 pt-5">
                    Giỏ hàng đang trống 🛒
                </div>
            ) : (
                <div className="space-y-3 mb-6">
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <div className="flex items-center gap-3">
                                {/* Image */}
                                <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden shadow-md">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-[16px] font-bold text-gray-800">
                                            {item.name} ({item.sizeName})
                                        </h3>
                                        <button
                                            onClick={() => onRemoveItem(item.id)}
                                            className="cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg p-1"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center mt-2">
                                        {/* Quantity */}
                                        <div className="flex items-center">
                                            <button
                                                disabled={item.quantity <= 1}
                                                onClick={() => onUpdateQuantity(item.id, -1)}
                                                className={`w-5 h-5 rounded-full text-white flex items-center justify-center transition-all
                                                    ${item.quantity <= 1
                                                        ? 'bg-gray-300 cursor-not-allowed'
                                                        : 'bg-gray-700 hover:bg-gray-800 cursor-pointer'}
                                                `}
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>

                                            <span className="mx-2 text-[13px] font-semibold">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() => onUpdateQuantity(item.id, 1)}
                                                className={`w-5 h-5 rounded-full text-white flex items-center justify-center transition-all
                                                    ${item.quantity >= item.maxQuantity
                                                        ? 'bg-gray-300 cursor-not-allowed'
                                                        : 'bg-gray-700 hover:bg-gray-800 cursor-pointer'}
                                                `}
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div className="font-bold text-gray-800">
                                            {formatPrice(item.price * item.quantity)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-dashed border-gray-300 mt-3" />
                        </div>
                    ))}
                </div>
            )}

            {/* Total */}
            <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-gray-800">
                    Tổng thành tiền:
                </span>
                <span className="text-lg font-bold text-orange-600">
                    {formatPrice(totalPrice)}
                </span>
            </div>

            {/* Order Button */}
            <button
                disabled={cartItems.length === 0}
                className={`w-full py-2 rounded-full font-bold text-[14px] uppercase tracking-wide transition-all
                    ${cartItems.length === 0
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'button-background-gradient text-white hover:scale-[1.02] cursor-pointer'}
                `}
            >
                ĐẶT HÀNG
            </button>
        </div>
    );
};

export default ShoppingCart;
