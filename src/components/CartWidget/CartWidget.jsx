import React, {useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"
import { CartContext } from "../Context/CartContext";

export const CartWidget = () => {
  const { calcularCant } = useContext(CartContext)

  return (
    <div>
      <FaShoppingCart className="carrito" />
      <span>{calcularCant()}</span>
    </div>
  )
}
