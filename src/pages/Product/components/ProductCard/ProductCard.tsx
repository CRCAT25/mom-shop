import { ShoppingCartIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge, Button, InputNumber, Rate } from 'antd';
import './productCard.css';
import SizeSelector from '../SizeSelector';
import type { ProductDTO, ProductSizeDTO } from '../../../../types/ProductDTO';
import { formatCurrency } from '../../../../utils/formatCurrency';
import ProductImageSlider from '../ProductImageSlider';

const ProductCard: React.FC<{ product: ProductDTO }> = ({ product }) => {
    //#region STATES
    const [selectedSize, setSelectedSize] = useState<ProductSizeDTO>({
        name: '',
        quantity: 0,
        price: 0
    });
    //#endregion

    //#region HANDLE FUNCTIONS
    useEffect(() => {
        const availableSize = product.sizes.find(size => size.quantity > 0);
        if (availableSize) {
            setSelectedSize(availableSize);
        }
    }, [product.sizes]);

    const handleSizeChange = (size: ProductSizeDTO) => {
        setSelectedSize(size);
    };


    //#endregion

    //#region TAG PROPS
    const quantityInputProps = {
        mode: 'spinner' as const,
        min: 1,
        max: selectedSize.quantity,
        defaultValue: 1,
        style: {
            width: 120,
            height: 40,
            backgroundColor: '#FFFFFF',
            borderRadius: '100px',
            border: '1px solid #000',
            fontWeight: 600
        },
        className: 'quantity-input',
    };

    const buttonAddToCartProps = {
        style: {
            width: `calc(100% - ${quantityInputProps.style.width}px)`,
            height: 40,
            backgroundColor: '#FFB432',
            fontWeight: 600
        },
        className: 'add-to-cart-button',
    };

    const productStatusProps = {
        style: {
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 14px'
        },
        text: product.status == 1 ? "Còn hàng" : "Hết hàng",
        color: product.status == 1 ? '#008001' : '#D00000'
    };
    //#endregion

    return (
        <div className="product-card-container max-w-3xl mx-auto h-auto bg-white border border-[#EEEEEE] rounded-xl shadow-lg">
            <Badge.Ribbon {...productStatusProps}>
                <div className='p-5'>
                    <div className="flex gap-5 w-full">
                        {/* IMAGE */}
                        <ProductImageSlider
                            images={product.images}
                        />
                        {/* PRODUCT DETAILS */}
                        <div className='flex flex-col justify-between gap-1' style={{ width: 'calc(100% - 200px)' }}>
                            {/* Block 1 */}
                            <div>
                                {/* Product name */}
                                <div className='flex justify-between gap-2 items-center'>
                                    <div className='text-[24px] font-bold uppercase'>{product.name}</div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-3">
                                    <Rate allowHalf defaultValue={product.rating} disabled />
                                    <span className="text-[14px]">
                                        {product.rating} ({product.totalReviews} đánh giá)
                                    </span>
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className='flex justify-between w-full'>
                                <div className='flex flex-col justify-between w-full gap-0.5'>
                                    {/* Size Selection */}
                                    <label className="block text-[#4D4D4D] font-medium text-[12px]">
                                        Chọn size
                                    </label>

                                    <div className="flex gap-3 justify-between items-end">
                                        <SizeSelector
                                            selectedSize={selectedSize}
                                            sizes={product.sizes}
                                            setSelectedSize={handleSizeChange}
                                        />

                                        <span>Còn <span className='font-bold text-[#008001]'>{selectedSize.quantity}</span> sản phẩm</span>
                                    </div>

                                    {/* Quantity Selection */}
                                    <div className='flex justify-between gap-2 items-end'>
                                        <span className="text-[#4D4D4D] font-medium text-[12px]">
                                            Số lượng
                                        </span>
                                        <span className='font-bold text-[22px]'>{formatCurrency(selectedSize.price)}</span>
                                    </div>

                                    <div className='flex justify-between gap-2'>
                                        <InputNumber {...quantityInputProps} variant="filled" placeholder="0" />
                                        <Button {...buttonAddToCartProps} type="primary" shape="round" icon={<ShoppingCartIcon />} size='small'>
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Badge.Ribbon>
        </div>
    )
}

export default ProductCard