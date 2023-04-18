import React from 'react';
import './Item.css';
import {Card , Button} from 'react-bootstrap';


export const Item = ({name, price, image}) => {
    // Paso mediante props cada propiedad de los productos (objetos) y lo coloco por props en el retaurn
    return (
        <div className='item'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='nombre'>{name}</Card.Title>
                    <Card.Title className='precio'>{price}</Card.Title>
                    <Button className='btn-black'>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}