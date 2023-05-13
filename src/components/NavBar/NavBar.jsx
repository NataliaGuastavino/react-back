import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <div className="title mr-auto">
                    <Navbar.Brand href="#home">Port of Mokha</Navbar.Brand>
                </div>
                
                <Nav className="menu ml-auto">
                    <Nav.Link as={Link} to="/productos/merchandising">Merchandising</Nav.Link>
                    <Nav.Link as={Link} to="/productos/coffee">Coffee</Nav.Link>
{/*                 <Nav.Link href="#Cofee">Coffee</Nav.Link>
                    <Nav.Link href="#Brew Guides">Brew Guides</Nav.Link>
                    <Nav.Link href="#All products">All products</Nav.Link>*/}
                    <Link className="link" to= "/cart"><CartWidget/></Link>
                </Nav>

                <Nav>
                    <Nav.Link as={CartWidget} to="/"> </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}