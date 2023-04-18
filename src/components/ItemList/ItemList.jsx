import React from 'react'
import './ItemList.css'
import {Item} from '../Item/Item'

export const ItemList = ({productos = []}) => {
    {/*Paso mediante props todo el array a este componente y mapeo cada item de los objetos y, los recorro con el spread operador */}
    return (
        <div className='container'>
            <hr />
            <h5>Best sellers</h5>
            <hr />
            <div className='fila'>
            {productos.map((item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>       
    )
}

