import './ItemCount.css'
import { IoIosAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri' ;

export const ItemCount = ({max, cantidad, modify}) =>{

    const sumar = () =>{
        if (cantidad < max ){
            modify (cantidad +1)
        }
    }

    const restar = ()  =>{
        if (cantidad >0){
            modify (cantidad -1)
        }
    }

    
    return(
        <>
            <h4>{cantidad}</h4>
            <div>
                <button onClick={sumar}><IoIosAdd /></button>
                <button onClick={restar}><RiSubtractFill /></button>
            </div>
        </>
    )
}