export interface Cart{ 
    cartId: string;
    customerId: string;
    cartItems: CartItem[];
}

export interface CartItem{
    productId: string;
    quantity: number;
    name: string;
    price: number;
    imageUrl: string;
}