import { Star } from 'lucide-react'
import Product1Image from '../assets/product1.png'
import { useState } from 'react';

interface ProductSize {
    id: string;
    label: string;
}

const ProductCard = () => {
    const [selectedSize, setSelectedSize] = useState<string>('small');

    const mockSizes: ProductSize[] = [
        { id: 'small', label: 'Nhỏ' },
        { id: 'medium', label: 'Trung' },
        { id: 'large', label: 'Lớn' },
    ];

    return (
        <div className="product-card-container max-w-3xl mx-auto h-auto bg-white border border-[#EEEEEE] rounded-3xl shadow-lg p-5">
            <div className="flex gap-4">
                {/* IMAGE */}
                <div className="rounded-2xl min-w-[200px]">
                    <img
                        src={Product1Image}
                        className="w-[200px] h-[200px] object-cover"
                    />
                </div>
                {/* PRODUCT DETAILS */}
                <div className='flex flex-col'>
                    {/* Product name */}
                    <div className='text-[22px]'>BÁNH CHƯNG MẶN</div>

                    {/* Rating */}
                    <div className="flex gap-3 mt-1">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={20}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                        <span className="text-[14px] text-gray-700">
                            5.0 (999+ đánh giá)
                        </span>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-4">
                        <label className="block text-[#4D4D4D] font-medium text-[14px]">
                            Chọn size
                        </label>
                        <div className="flex gap-3 mt-1">
                            {mockSizes.map(size => (
                                <button
                                    key={size.id}
                                    onClick={() => setSelectedSize(size.id)}
                                    className={`px-6 py-2 cursor-pointer text-[12px] rounded-lg font-medium transition-colors ${selectedSize === size.id
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    {size.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard