import React from 'react'
import { Button } from 'react-bootstrap'
import {TbTrashOff} from "react-icons/tb"

export const CartScreen = () => {
    return (
        <div className='container my-5'>
            <h3>Resumen de compras</h3>
            <hr />
            <div className='listado'>
                <p>Product</p>
                <p>€</p>
                <p>Cantidad:</p>
                <Button className='btn btn-danger'>
                    <TbTrashOff/>
                </Button>
            </div>
        </div>
    )
}
