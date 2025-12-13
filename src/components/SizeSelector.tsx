import React from 'react';
import type { ProductSizeDTO } from '../types/ProductDTO';

interface SizeSelectorProps {
    selectedSize: ProductSizeDTO | undefined;
    sizes: ProductSizeDTO[];
    setSelectedSize: (size: ProductSizeDTO) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
    selectedSize,
    sizes,
    setSelectedSize,
}) => {
    return (
        <div className="flex gap-3">
            {sizes.map(size => {
                const isOutOfStock = size.quantity <= 0;

                return (
                    <button
                        key={size.name}
                        disabled={isOutOfStock}
                        onClick={() => !isOutOfStock && setSelectedSize(size)}
                        className={`
                            px-3 py-1 uppercase text-[11px] rounded-xs font-medium
                            transition-colors border
                            ${isOutOfStock
                                ? 'opacity-40 cursor-not-allowed bg-[#E6E6E6] text-black border-gray-300'
                                : selectedSize?.name === size.name
                                    ? 'bg-gray-800 text-white border-gray-800'
                                    : 'bg-[#E6E6E6] text-black hover:bg-gray-300 border-gray-300 cursor-pointer'
                            }
                        `}
                    >
                        {size.name}
                    </button>
                );
            })}
        </div>
    );
};

export default SizeSelector;
