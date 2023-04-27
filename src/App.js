import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './components/NavBar/NavBar';
import { ItemCount } from "./components/ItemCount/ItemCount";
//import { Container } from "react-bootstrap";
//import { Pika } from "./components/Pika/Pika";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,  
} from "react-router-dom"

import { CartContext } from "./components/Context/CartContext";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState ([])

  const sumarCart = (item) => {
  setCart ([...cart, item])
}

  const calcularCant = () => {
    return cart.reduce ((acc, prod) => acc + prod.counter, 0)
  }

  return (
    <CartContext.Provider value={{
      sumarCart, 
      calcularCant
    }}>

      <div className='App'>
        <Router>
          <NavBar/>
            <Routes>
              <Route path ="/"  element={<ItemListContainer/>}/>
              <Route path ="/productos/:categoryId"  element={<ItemListContainer/>}/>
              <Route path ="/detail/:itemId"  element={<ItemDetailContainer/>}/>
              <Route path ="/counter" element={<ItemCount/>}/>
              {/*<Route path="/pika" element={<Pika/>}/>*/}
              <Route path="*" element={<Navigate to= "/"/>}/>
            </Routes>
        </Router>
      </div>
    </CartContext.Provider> 
    );
}

export default App;


