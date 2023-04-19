import React from 'react';
import {Card , Button} from 'react-bootstrap';

export const ItemDetail = ({id,name, price, image, category}) => {
    // Paso mediante props cada propiedad de los productos (objetos) y lo coloco por props en el retaurn
    return (
        <div className='item'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='nombre'>{name}</Card.Title>
                    <Card.Title className='precio'>{price}</Card.Title>
                    <Card.Title className='Categoría'>{category}</Card.Title>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus dolorum dolore. Voluptas voluptatem, obcaecati ducimus quia molestiae accusantium sapiente sint quasi at debitis libero quis numquam odit aliquid dignissimos.</p>
                    <Button className='btn-black'>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}