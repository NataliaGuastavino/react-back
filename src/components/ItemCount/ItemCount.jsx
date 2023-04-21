import React, { useState } from "react";
import './ItemCount.css'
import { IoIosAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri' ;
import { RiRefreshLine } from 'react-icons/ri';

export const ItemCount = () =>{

    const [counter, setCounter] = useState (0)

    const sumar = () =>{
        setCounter (counter +1)
    }

    const restar = ()  =>{
        if (counter >0){
            setCounter (counter -1)
        }
    }

    const resetear = ()  =>{
        setCounter (0)
    }

    
    return(
        <>
            <h4>Cantidad: {counter}</h4>
            <div>
                <button onClick={sumar}><IoIosAdd /></button>
                <button onClick={restar}><RiSubtractFill /></button>
                <button onClick={resetear}><RiRefreshLine /></button>
            </div>
        </>
    )
}