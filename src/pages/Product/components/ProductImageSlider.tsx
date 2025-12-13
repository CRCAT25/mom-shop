import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

interface ProductImageSliderProps {
    images: string[];
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const canPrev = currentImageIndex > 0;
    const canNext = currentImageIndex < images.length - 1;

    const handlePrevImage = () => {
        if (!canPrev) return;
        setCurrentImageIndex(prev => prev - 1);
    };

    const handleNextImage = () => {
        if (!canNext) return;
        setCurrentImageIndex(prev => prev + 1);
    };

    return (
        <div className="w-[200px] h-[200px] relative overflow-hidden rounded-lg">
            {/* Slider */}
            <div
                className="w-full h-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="w-full h-full object-cover shrink-0"
                        alt={`product-${index}`}
                    />
                ))}
            </div>

            {/* Left arrow */}
            <ChevronLeft
                size={30}
                onClick={handlePrevImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    cursor: canPrev ? 'pointer' : 'default',
                    opacity: canPrev ? 1 : 0.4,
                    pointerEvents: canPrev ? 'all' : 'none',
                }}
            />

            {/* Right arrow */}
            <ChevronRight
                size={30}
                onClick={handleNextImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    cursor: canNext ? 'pointer' : 'default',
                    opacity: canNext ? 1 : 0.4,
                    pointerEvents: canNext ? 'all' : 'none',
                }}
            />
        </div>
    );
};

export default ProductImageSlider;
