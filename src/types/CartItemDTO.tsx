
export interface CartItemDTO {
    id: string;
    name: string;
    quantity: number;
    maxQuantity: number;
    sizeId: number;
    price: number;
    totalPrice: number;
    imageUrl: string;
}