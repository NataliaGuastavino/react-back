import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext ()

const init = JSON.parse (localStorage.getItem("cart")) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState (init)

    useEffect (() =>{
        localStorage.setItem ("cart" , JSON.stringify(cart))
    }, [cart])

    const sumarCart = (item) => {
    setCart ([...cart, item])
    }

    const calcularCant = () => {
        return cart.reduce ((acc, prod) => acc + prod.counter, 0)
    }

    const finalPrice = () => {
      return cart.reduce ((acc, prod) => acc + prod.price * prod.counter, 0)
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter ((prod) => prod.id !== itemId)
        setCart (newCart)
    }

    const emptyCart = () => {
        setCart ([])
    }


    return (
        <CartContext.Provider value={{
            sumarCart, 
            calcularCant,
            finalPrice,
            removeItem,
            cart,
            emptyCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}