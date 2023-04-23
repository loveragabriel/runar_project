import { createContext, useContext, useState } from 'react';
import useDeepCopy from '../Hooks/useDeepCoy';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

export const ContextCartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const newCart = useDeepCopy(cart);

    // function addItem(product, countFromCounter) {
    //     if (isItemInCart(product.id)) {
    //         const itemIndex = cart.findIndex(
    //             (itemInCart) => itemInCart.id === product.id
    //         );
    //         newCart[itemIndex].count += countFromCounter;
    //     } else {
    //         newCart.push({ ...product, count: countFromCounter });
    //     }
    //     setCart(newCart);
    // }

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

     

    function isItemInCart(id) {
        return cart.some((itemInCart) => itemInCart.id === id);
      }

      function removeItemFromCart(id) {
        const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === id);
        if (itemIndex !== -1) {
          newCart.splice(itemIndex, 1);
          setCart(newCart);
        }
      }

    function getCountInCart(id) {
        const item = cart.find((itemInCart) => itemInCart.id === id);
        return item !== undefined ? item.count : 0;
    }

    function getTotalPrice() {
        let total = 0;
        return 1900;
    }

    return (
        <CartContext.Provider
            value={{ cart: cart,
                 addItem,
                  isItemInCart,
                   getCountInCart,
                   removeItemFromCart,
                     getTotalPrice,
                      setCart, 
                     }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

