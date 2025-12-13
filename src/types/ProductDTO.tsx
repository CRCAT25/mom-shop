import type { ProductStatusEnum } from "../constants/ProductStatusEnum";

export interface ProductSizeDTO {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export interface ProductDTO {
    id: number;
    name: string;
    rating: number;
    totalReviews: number;
    images: string[];
    sizes: ProductSizeDTO[];
    status: ProductStatusEnum;
}

export interface ProductAddToCartDTO {
    id: number;
    quantity: number;
    sizeId: number;
    price: number;
    totalPrice: number;
    imageUrl: string;
}

export const productTest: ProductDTO = {
    id: 1,
    name: 'Bánh Chưng Mặn',
    rating: 4,
    totalReviews: 999,
    images: [
        'https://i.ibb.co/tMtq7YcQ/product1.jpg',
        'https://i.ibb.co/ccvmk2gW/product2.jpg',
        'https://i.ibb.co/wrZqB8md/product4.jpg'
    ],
    sizes: [
        { id: 1, name: 'Nhỏ', quantity: 0, price: 50000 },
        { id: 2, name: 'Trung', quantity: 3, price: 70000 },
        { id: 3, name: 'Lớn', quantity: 2, price: 100000 }
    ],
    status: 1,
};