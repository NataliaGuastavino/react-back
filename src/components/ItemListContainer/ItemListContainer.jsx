import React, { useEffect, useState } from "react";
import {ImSpinner8} from "react-icons/im"
import {ItemList} from '../ItemList/ItemList';
//import { pedirProductos } from "../../helpers/pedirProductos";
// Importo la funcion getfirestore para consumir mi base de datos
import {getFirestore} from "../../firebase/config"
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()


  useEffect (() => {
    setLoading (true)

    const db = getFirestore ();

    const productos = db.collection ('productos')

    if (categoryId){
      const filtrado = productos.where("category", "==", categoryId)
      filtrado.get()
        .then((res) =>{
          const newItem = res.docs.map ((doc) =>{
            return {id: doc.id, ...doc.data()}
          })
          setItems (newItem)
        })
        .catch ((error) => console.log (error))
        .finally (() =>{
          setLoading(false)
        })
    }

    productos.get () 
      .then ((res) => {
        const newItem = res.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        })
        setItems (newItem)
      })
      .catch ((error) => console.log (error))
      .finally (() => {
        setLoading (false)
      })

  }, [categoryId])

  return (
    <>
    {/*El componente comienza con el loading en true. Cuando resuelve, imprime en pantalla todo el componente: ItemList -donde se mapea cada uno de los productos-*/}
    {
      loading
      ? <div className="spinner"> <ImSpinner8/></div>
      : <ItemList productos={items}/>
    }
    </>   
  )};


      //Inicio el efecto montaje con un loading en true
   //setLoading (true)
    //pedirProductos ()
    //Imprimo la respuesta y la guardo en el hook
    //.then ((response) => {
      //  if (categoryId) {
        //  setItems (response.filter(prod => prod.category === categoryId))
      //} else {
       // setItems (response)
      //}
      //})
      //.catch ((error) => console.log (error))
      //.finally (() => {setLoading (false)})