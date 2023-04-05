import React from 'react';
//import cart from "./assets/cart.svg";
import { FaShoppingCart } from "react-icons/fa";import './CartWidget.css';

export const CartWidget = () => {
        return (
                <div>
                        <FaShoppingCart className="carrito"/>
                </div>
        );
};
