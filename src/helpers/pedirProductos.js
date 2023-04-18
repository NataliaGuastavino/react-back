import { stock } from "../data/stock"

  // Realizo función para obtener los productos
  // Establezco una nueva promesa para que resuelva o rechace en un tiempo de 2 seg. mi stock.
  export const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() =>{
        resolve (stock)
        reject ("Rechazado")
        }, 2000)
    })
}