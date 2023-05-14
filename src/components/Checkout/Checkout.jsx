import React, {useState, useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import {getFirestore} from '../../firebase/config'
import firebase from 'firebase'
import 'firebase/firestore'

export const Checkout = () => {

    const {carrito, precioTotal, emptyCart} = useContext(CartContext)

    const [email, setEmail] = useState ("")

    const [name, setName] = useState ("")

    const [lastName, setLastName] = useState ("")

    const [phone, setPhone] = useState ("")

    const handleSubmit = (e) => {
        e.preventDefault ()


    const orden = {
        buyer: {
            email,
            name,
            lastName,
            phone
        },
        item: carrito,
        total_price: precioTotal (),
        data: firebase.firestore.Timestamp.fromDate(new Date())
        }

    // Hago funcion para enviar la orden a firebase
    const db = getFirestore ();
    const ordenes = db.collection ('ordenes')

// Uso add para agregar una nueva orden a la coleccion ya creada
ordenes.add (orden)
    .then ((res) =>{
        Swal.fire({
            icon: 'success',
            title: 'Your purchase was successful!',
            text: `Save your purchase number: ${res.id}`,
            willClose: () => {
                emptyCart();
            }
        })
    })
    .finally(() => {
        console.log('Successful purchase!');
    })

    //Actualizo la cantidad en la base de datos,
    // ForEach: para recorrer toda la coleccion de la base de datos
    carrito.forEach ((item) => {
        const docRef = db.collection ('productos').doc (item.id);

        docRef.get ()
        .then ((doc) =>{
            docRef.update ({
                stock: doc.data().stock - item.counter
            })
        })
    })
}

return (
    <div>
        <h3>Finish shopping</h3>
        <hr/>

        <form onSubmit={handleSubmit} className='conteiner mt-3'>
            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" onChange={(e) => setEmail
                    (e.target.value)} value={email}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName
                    (e.target.value)} value={name} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" onChange={(e) => setLastName
                    (e.target.value)} value={lastName}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" onChange={(e) => setPhone
                    (e.target.value)} value={phone} />
            </div>
            <button type='submit' className='btn btn-success'>Finish</button>
            <Link to="/cart" className="btn btn-info">Back to cart</Link>
        </form>
    </div>
    )
}


