import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {TbTrashOff} from "react-icons/tb"
import { CartContext } from '../Context/CartContext'
import "./CartScreen.css"

export const CartScreen = () => {

    const {cart ,finalPrice, removeItem, emptyCart} = useContext (CartContext)

    return (
        <div className='container my-5'>
            {
                cart.length === 0
                ?<>
                    <h3>Empty cart</h3>
                    <hr/>
                    <Link to="/" className='btn btn-sucess'></Link>
                </>
                :<>
                <h3>Resumen de compras</h3>
                <hr/>
            {
                cart.map ((prod) => (
                    <>
                        <div className='listado'>
                            <p>Product: {prod.decription} </p>
                            <p>€</p>
                            <p>Cantidad:</p>
                        </div>
                        <Button className='btn btn-danger' onClick={() => removeItem (prod.id)}>
                            <TbTrashOff/>
                        </Button>
                    </>
                ))
            }
            <hr />
            <strong>Final price:{finalPrice()}€ </strong>
            <hr/>
                <Button className='btn btn-danger' onClick={emptyCart}>Empty Cart</Button>
                <Link className='btn btn-success' to="/Chekout">
                    Terminar compra 
                </Link>
            </>
            }
        </div>
    )
}
