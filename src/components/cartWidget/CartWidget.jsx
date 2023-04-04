import React from "react";
import cart from "./assets/cart.svg";
import CartWidget from "./assets"
//import { IconName } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
        return (
                <div>
                        <img src={cart} alt="cart-widget" className="carrito" />0
                </div>
        );
};

export default CartWidget;
