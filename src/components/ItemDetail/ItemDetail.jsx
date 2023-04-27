import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Card , Button} from 'react-bootstrap';
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from '../Context/CartContext';

export const ItemDetail = ({id, name, price, image, category, description, stock}) => {
    // Paso mediante props cada propiedad de los productos (objetos) y lo coloco por props en el retaurn

    const navigate = useNavigate
    const turnBack = () => {
        navigate (-1)
    }

    // Se comienza a consumir las funcionalidades del contexto

    const {sumarCart} = useContext (CartContext)

    const [counter, setCounter] = useState (0)

    const addToCart = () => {
        const newItem = {
            id,
            description,
            image,
            price,
            category,
            counter
        }
        sumarCart (newItem)
    }

    return (
        <div className='item'>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='nombre'>{name}</Card.Title>
                    <Card.Title className='precio'>{price}</Card.Title>
                    <Card.Title className='Categoría'>{category}</Card.Title>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus dolorum dolore. Voluptas voluptatem, obcaecati ducimus quia molestiae accusantium sapiente sint quasi at debitis libero quis numquam odit aliquid dignissimos.</p>
                    <ItemCount max={stock} modify={setCounter} cantidad={counter} />
                    <Button onClick={addToCart} className='btn-black'>Add to cart</Button>
                    <Button onClick={turnBack} className='btn-black'>Turn back</Button>
                </Card.Body>
            </Card>
        </div>
    )
}