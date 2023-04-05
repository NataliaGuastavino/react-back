import React from 'react'
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
//import {Button} from "../Button/Button"
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <div className='Title'>
        <Navbar.Brand href="#home">Port of Mokha</Navbar.Brand>
        </div>
        <Nav className="menu">
          <Nav.Link href="#Cofee">Cofee</Nav.Link>
          <Nav.Link href="#Brew Guides">Brew Guides</Nav.Link>
          <Nav.Link href="#All products">All products</Nav.Link>
        </Nav>
        
        <Nav>
          <CartWidget />
        </Nav>

      </Container>
    </Navbar>
  );
}



{/*          <Button color="black" handleClick={() => console.log("cofee")}>
            Coffe
          </Button>
          <Button color="black" handleClick={() => console.log("Brew Guides")}>
            Brew Guides
          </Button>
          <Button color="black" handleClick={() => console.log("All products")}>
            All products
</Button>*/}