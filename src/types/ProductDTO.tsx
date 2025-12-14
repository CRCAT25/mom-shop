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

export interface CartItemDTO {
    id: number;
    quantity: number;
    sizeId: number;
    price: number;
    totalPrice: number;
    imageUrl: string;
}

export const productMockList: ProductDTO[] = [
    {
        id: 1,
        name: 'Bánh Chưng Mặn',
        rating: 4,
        totalReviews: 999,
        images: [
            'https://i.ibb.co/ccvmk2gW/product2.jpg',
            'https://i.ibb.co/tMtq7YcQ/product1.jpg',
            'https://i.ibb.co/wrZqB8md/product4.jpg'
        ],
        sizes: [
            { id: 1, name: 'Nhỏ', quantity: 0, price: 50000 },
            { id: 2, name: 'Trung', quantity: 3, price: 70000 },
            { id: 3, name: 'Lớn', quantity: 2, price: 100000 }
        ],
        status: 1,
    },
    {
        id: 2,
        name: 'Bánh Tét Chuối',
        rating: 4.5,
        totalReviews: 542,
        images: [
            'https://i.ibb.co/tMtq7YcQ/product1.jpg'
        ],
        sizes: [
            { id: 4, name: 'Thường', quantity: 5, price: 40000 }
        ],
        status: 1,
    },
    {
        id: 3,
        name: 'Bánh Chưng Chay',
        rating: 3.8,
        totalReviews: 120,
        images: [], // 👉 test defaultImage
        sizes: [
            { id: 5, name: 'Nhỏ', quantity: 0, price: 45000 },
            { id: 6, name: 'Lớn', quantity: 0, price: 90000 }
        ],
        status: 2, // 👉 hết hàng
    },
    {
        id: 4,
        name: 'Bánh Tét Đậu Xanh',
        rating: 4.9,
        totalReviews: 1820,
        images: [
            'https://i.ibb.co/ccvmk2gW/product2.jpg',
            'https://i.ibb.co/tMtq7YcQ/product1.jpg'
        ],
        sizes: [
            { id: 7, name: 'Nhỏ', quantity: 10, price: 60000 },
            { id: 8, name: 'Trung', quantity: 4, price: 85000 }
        ],
        status: 1,
    },
    {
        id: 5,
        name: 'Bánh Chưng Gấc',
        rating: 4.2,
        totalReviews: 310,
        images: [
            'https://i.ibb.co/wrZqB8md/product4.jpg'
        ],
        sizes: [
            { id: 9, name: 'Lớn', quantity: 1, price: 120000 }
        ],
        status: 1,
    }
];