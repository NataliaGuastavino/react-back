import React, { useState } from "react";
import './ItemCount.css'

export const ItemCount = () =>{

    const [counter, setCounter] = useState (0)

    
    return(
        <>
            <h4>Cantidad: {counter}</h4>
            <div>
                <button onClick={sumar}>➕</button>
                <button onClick={restar}>➖</button>
                <button onClick={resetear}>🔂</button>
            </div>
        </>
    )
}