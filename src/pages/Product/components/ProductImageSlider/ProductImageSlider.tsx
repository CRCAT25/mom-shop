import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { Image } from 'antd';
import { defaultImage } from '../../../../constants/DefaultData';
import './ProductImageSlider.css'

interface ProductImageSliderProps {
    images: string[];
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const displayImages =
        images && images.length > 0 ? images : [defaultImage];

    const canPrev = currentImageIndex > 0;
    const canNext = currentImageIndex < displayImages.length - 1;

    const handlePrevImage = () => {
        if (canPrev) setCurrentImageIndex(prev => prev - 1);
    };

    const handleNextImage = () => {
        if (canNext) setCurrentImageIndex(prev => prev + 1);
    };

    return (
        <div className="w-[200px] h-[200px] relative overflow-hidden rounded-lg">
            <Image.PreviewGroup>
                {/* Slider */}
                <div
                    className="w-full h-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {displayImages.map((img, index) => (
                        <div
                            key={index}
                            className="w-full h-full shrink-0 image-container"
                        >
                            <Image
                                src={img}
                                alt={`product-${index}`}
                                className="w-full h-full! object-cover rounded-lg"
                                preview={{
                                    mask: 'Xem ảnh',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </Image.PreviewGroup>

            {/* Left arrow */}
            <ChevronLeft
                size={30}
                onClick={handlePrevImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: 4,
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    cursor: 'pointer',
                    display: canPrev ? 'block' : 'none',
                    zIndex: 10,
                }}
            />

            {/* Right arrow */}
            <ChevronRight
                size={30}
                onClick={handleNextImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: 4,
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    cursor: 'pointer',
                    display: canNext ? 'block' : 'none',
                    zIndex: 10,
                }}
            />
        </div>
    );
};

export default ProductImageSlider;
