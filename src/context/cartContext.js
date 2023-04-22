import { createContext, useContext, useState } from 'react';
import useDeepCopy from '../Hooks/useDeepCoy';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const ContextCartProvider = (props) => {
    const [cart, setCart] = useState([5]);
    const newCart = useDeepCopy(cart);
  
    function addItem(product, countFromCounter) {
      if (isItemInCart(product.id)) {
        const itemIndex = cart.findIndex(
          (itemInCart) => itemInCart.id === product.id
        );
        newCart[itemIndex].count += countFromCounter;
      } else {
        newCart.push({ ...product, count: countFromCounter });
      }
      setCart(newCart);
    }
  
    function removeItem(idToDelete) {
      /*  */
    }
  
    function isItemInCart(id) {
      return cart.some((itemInCart) => itemInCart.id === id);
    }
  
    function getCountInCart(id) {
      const item = cart.find((itemInCart) => itemInCart.id === id);
  
      return item !== undefined ? item.count : 0;
    }
  
    function getTotalPrice(){
      let total = 0;
      return 1900;
    }
  
    return (
      <CartContext.Provider
        value={{ cart: cart, addItem, isItemInCart, getCountInCart, removeItem, getTotalPrice, setCart }}
      >
        {props.children}
      </CartContext.Provider>
    );
  }
  
