import { createContext } from "react";

const CartContext = createContext({
    cart: {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    clearCart: () => {}
})

export default CartContext;