
export interface CartItemDTO {
    id: string;
    name: string;
    quantity: number;
    maxQuantity: number;
    sizeId: number;
    sizeName: string;
    price: number;
    totalPrice: number;
    imageUrl: string;
}