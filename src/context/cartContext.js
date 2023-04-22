import { createContext, useState } from "react";

export const cartContext = createContext(); 
const CartProvider = cartContext.Provider

export const ContextProvider = (props) => {
    const [cart, setCart] = useState([75])
  return (
    <CartProvider value={{cart}}>
        {props.children}
    </CartProvider>
  )
}
