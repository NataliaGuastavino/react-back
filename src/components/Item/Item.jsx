import React from 'react';
import './Item.css';
import {Card , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({id,name, price, image, category}) => {
    // Paso mediante props cada propiedad de los productos (objetos) y lo coloco por props en el retaurn
    return (
        <div className='item'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='nombre'>{name}</Card.Title>
                    <Card.Title className='precio'>{price}</Card.Title>
                    <Card.Title className='Categoría'>{category}</Card.Title>
                    <Link to={`/detail/${id}`} >
                        <Button className='btn-black'>More details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}