import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { NavBar } from './components/NavBar/NavBar';
import { ItemCount } from "./components/ItemCount/ItemCount";
//import { Pika } from "./components/Pika/Pika";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,  
} from "react-router-dom"

import { CartProvider } from "./components/Context/CartContext";
import { UIProvider } from "./components/Context/UIcontext";
import { Checkout } from "./components/Checkout/Checkout";
//import { useState } from "react";

function App() {

  return (
    <UIProvider>
    <CartProvider>
      <div className='App'>
        <Router>
          <NavBar/>
            <Routes>
              <Route path ="/"  element={<ItemListContainer/>}/>
              <Route path ="/productos/:categoryId"  element={<ItemListContainer/>}/>
              <Route path ="/detail/:itemId"  element={<ItemDetailContainer/>}/>
              <Route path ="/counter" element={<ItemCount/>}/>
              <Route path="/Chekout" element={<Checkout/>}/>
              <Route path="/cart" element={<CartScreen/>}/>
              <Route path="*" element={<Navigate to= "/"/>}/>
            </Routes>
        </Router>
      </div>
    </CartProvider> 
    </UIProvider>
    );
}

export default App;


