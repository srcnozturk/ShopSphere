import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Cart } from "../model/ICart";

interface CartContextValue {
    cart: Cart | null;
    setCart: (cart: Cart ) => void;
    deleteItem : (productId: string, quantity: number) => void;
}

export  const CartConext = createContext<CartContextValue | undefined>(undefined);

export function useCartContext() { 
    const context = useContext(CartConext);

    if(context == undefined) {
        throw new Error("no provider");
    }
    return context;
}

export function CartConextProvider({ children }: PropsWithChildren<any>) {
    const [cart, setCart] = useState<Cart | null>(null);

    function deleteItem(productId: string, quantity: number) {
    }
    return (
        <CartConext.Provider value={{ cart, setCart, deleteItem }}>
            {children}
        </CartConext.Provider>
            );
}
