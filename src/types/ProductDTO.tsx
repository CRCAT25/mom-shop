import type { ProductStatusEnum } from "../constants/ProductStatusEnum";

export interface ProductSizeDTO {
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
        { name: 'Nhỏ', quantity: 0, price: 50000 },
        { name: 'Trung', quantity: 3, price: 70000 },
        { name: 'Lớn', quantity: 2, price: 100000 }
    ],
    status: 1,
};