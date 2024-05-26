import { createContext } from "react";
const CartContext = createContext({
  itemCount: 0,
});

export default CartContext;
