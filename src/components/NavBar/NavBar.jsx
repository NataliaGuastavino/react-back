import React from 'react'
import './Navbar.css'
import CartWidget from '../cartWidget/CartWidget'
import Button from '../Button/Button'

const NavBar = () => {
    return (
        <nav className='Navbar'>
            <div className='title'>Port of Mokha</div>
            <div className='menu'>
                <Button
                    color="black"
                    handleClick={() => console.log('cofee')}
                >Coffe</Button>
                <Button
                    color="black"
                    handleClick={() => console.log('Brew Guides')}
                >Brew Guides</Button>
                <Button
                    color="black"
                    handleClick={() => console.log('All products')}
                >All products</Button>

                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar