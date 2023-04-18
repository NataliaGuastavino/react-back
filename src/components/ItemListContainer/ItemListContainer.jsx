import React, { useEffect, useState } from "react";
import {ImSpinner8} from "react-icons/im"
import {ItemList} from '../ItemList/ItemList';
import { pedirProductos } from "../../helpers/pedirProductos";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState ([])

  const [loading, setLoading] = useState (false)

  //const param = useParams ()

  const {categoryId} = useParams()


  useEffect (() => {
    //Inicio el efecto montaje con un loading en true
    setLoading (true)
    pedirProductos ()
    //Imprimo la respuesta y la guardo en el hook
      .then ((response) => {
        if (categoryId) {
          setItems (response.filter(prod => prod.category === categoryId))
      } else {
        setItems (response)
      }
      })
      .catch ((error) => console.log (error))
      .finally (() => {setLoading (false)})

  }, [categoryId])

  return (
    <>
    {/*El componente comienza con el loading en true. Cuando resuelve, imprime en pantalla todo el componente: ItemList -donde se mapea cada uno de los productos-*/}
    {
      loading
      ? <ImSpinner8/>
      : <div className="spinner"> <ItemList productos ={items} /> </div>
    }
    </>   
  )};

